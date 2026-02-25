import axios from 'axios';
import 'dotenv/config';

async function testNewHubSpotToken() {
  console.log('🔍 Testing new HubSpot token...');
  
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!token) {
    console.log('❌ No HUBSPOT_ACCESS_TOKEN found in .env');
    return;
  }
  
  console.log('✅ Token found:', token.substring(0, 20) + '...');
  
  try {
    const hubspotApiUrl = 'https://api.hubapi.com/crm/v3/objects/contacts';
    
    const payload = {
      properties: {
        firstname: 'Test',
        lastname: 'User',
        email: 'test@example.com',
        phone: '1234567890',
        lifecyclestage: 'lead',
        hs_lead_status: 'NEW'
      }
    };

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };

    console.log('🔄 Testing contact creation...');
    const response = await axios.post(hubspotApiUrl, payload, config);
    console.log('✅ Contact created successfully:', response.data.id);
    
    // Clean up - delete the test contact
    await axios.delete(`https://api.hubapi.com/crm/v3/objects/contacts/${response.data.id}`, config);
    console.log('🧹 Test contact deleted');
    
  } catch (error) {
    console.log('❌ Error:', error.message);
    
    if (error.response) {
      console.log('Status:', error.response.status);
      console.log('Response:', JSON.stringify(error.response.data, null, 2));
    }
  }
}

testNewHubSpotToken();
