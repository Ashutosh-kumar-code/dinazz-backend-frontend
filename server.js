import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import axios from 'axios';
   
const app = express();
app.use(express.json());
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://www.dhswellness.com'  // apna Hostinger domain yahan daalo
  ]
}));
app.use(express.static('dist'));

app.post('/send-booking', async (req, res) => {
  try {
    const { fullName, phone, email } = req.body;
    
    let emailSent = false;
    let crmContactCreated = false;
    const errors = [];

    // Send Email if configured
    if (process.env.SMTP_HOST && process.env.SMTP_HOST !== 'your_smtp_host') {
      try {
        let transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT),
          secure: false,
          auth: { 
            user: process.env.SMTP_USER, 
            pass: process.env.SMTP_PASS 
          },
          tls: {
            rejectUnauthorized: false
          }
        });

        await transporter.sendMail({
          from: process.env.EMAIL_FROM,
          to: process.env.EMAIL_TO,
          subject: 'New Booking Request - DHS Wellness',
          html: `
            <h2>New Booking Request</h2>
            <table border="1" style="border-collapse: collapse;">
              <tr><td><strong>Full Name:</strong></td><td>${fullName}</td></tr>
              <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
              <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
            </table>
          `
        });
        emailSent = true;
        console.log('✅ Email sent successfully!');
      } catch (emailError) {
        console.warn('⚠️ Email Error (continuing anyway):', emailError.message);
        errors.push(`Email: ${emailError.message}`);
      }
    } else {
      console.log('ℹ️ Email not configured - skipping email notification');
    }

    // Add contact to HubSpot CRM if available
    const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;
    if (accessToken) {
      try {
        const hubspotApiUrl = 'https://api.hubapi.com/crm/v3/objects/contacts';
        
        const payload = {
          properties: {
            firstname: fullName.split(' ')[0] || fullName,
            lastname: fullName.split(' ').slice(1).join(' ') || '',
            email: email,
            phone: phone,
            // lifecyclestage: 'lead',
            // hs_lead_status: 'NEW'
          }
        };
// console.log("payload========",payload)
        const config = {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        };

        const response = await axios.post(hubspotApiUrl, payload, config);
        crmContactCreated = true;
        console.log('✅ Contact created in HubSpot:', response.data.id);
      } catch (crmError) {
        console.warn('⚠️ CRM Error (continuing anyway):', crmError.message);
        if (crmError.response) {
          const hubspotError = crmError.response.data;
          errors.push(`CRM: ${hubspotError.message || 'Unknown HubSpot error'}`);
        } else {
          errors.push(`CRM: ${crmError.message}`);
        }
      }
    } else {
      console.log('ℹ️ HubSpot not configured - skipping CRM integration');
    }

    // Return success if at least one method worked
    if (emailSent || crmContactCreated) {
      res.json({ 
        success: true, 
        emailSent,
        crmContactCreated,
        message: `Form submitted successfully! ${emailSent ? 'Email sent. ' : ''}${crmContactCreated ? 'Contact created in CRM.' : ''}`
      });
    } else {
      res.status(500).json({ 
        error: 'No integrations configured. Please set up email or HubSpot CRM.',
        details: errors
      });
    }
  } catch (error) {
    console.error('❌ Server Error:', error.message);
    console.error('❌ Full Error:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});