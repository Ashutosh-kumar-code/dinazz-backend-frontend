# 🚀 Vercel Deployment Guide

## 📋 Prerequisites
- Vercel account (free)
- GitHub/GitLab/Bitbucket repository
- Your project code ready

## 🎯 Deployment Options

### Option 1: Full-Stack on Vercel (Recommended)
**Frontend + Serverless Functions**

#### Step 1: Prepare Your Code
```bash
# Build your React app
npm run build

# Commit all changes including:
# - api/send-booking.js (serverless function)
# - vercel.json (configuration)
# - dist/ folder (built frontend)
```

#### Step 2: Deploy to Vercel
1. Push your code to GitHub/GitLab
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect it's a React project

#### Step 3: Configure Environment Variables
In Vercel dashboard → Settings → Environment Variables:


#### Step 4: Update Frontend API Calls
Your forms will automatically call `/send-booking` which Vercel routes to the serverless function.

---

### Option 2: Split Deployment
**Frontend on Vercel + Backend on Render/Railway**

#### Frontend (Vercel)
1. Deploy only the React app to Vercel
2. Update API calls to point to your backend URL

#### Backend (Render/Railway)
1. Deploy `server.js` to Render/Railway
2. Get the backend URL
3. Update frontend API calls

---

## 🔧 Files Created for Vercel

### `vercel.json`
- Routes `/send-booking` to serverless function
- Serves static files from `dist/`
- Handles environment variables

### `api/send-booking.js`
- Serverless version of your Express server
- Same functionality (email + HubSpot CRM)
- Handles CORS for web requests

### Updated `vite.config.js`
- Changed `base` from `/clinic/` to `/`
- Proper build configuration

---

## 🌍 URL Structure After Deployment

### Option 1 (Full-Stack)
```
https://your-app.vercel.app/          # Frontend
https://your-app.vercel.app/send-booking # API endpoint
```

### Option 2 (Split)
```
https://your-app.vercel.app/          # Frontend
https://your-backend.onrender.com/send-booking # API
```

---

## ✅ Benefits of Vercel Deployment

1. **Free Hosting**: No cost for most projects
2. **Automatic HTTPS**: SSL certificates included
3. **Global CDN**: Fast loading worldwide
4. **Serverless Functions**: Backend included
5. **Automatic Deployments**: Git-based deployments
6. **Environment Variables**: Secure configuration

---

## 🚨 Important Notes

### Email Configuration
- Use **App Passwords** for Gmail (not regular password)
- Enable 2FA on your Gmail account
- Generate App Password: Google Account → Security → App Passwords

### HubSpot CRM
- Contacts will appear in HubSpot immediately

### Domain Setup
- Add custom domain in Vercel dashboard
- Automatic DNS configuration
- Free SSL certificate

---

## 🔄 Testing After Deployment

1. **Frontend**: Visit your Vercel URL
2. **Forms**: Submit test form data
3. **Email**: Check `ak0827kumar@gmail.com`
4. **CRM**: Check HubSpot Contacts
5. **Console**: Check Vercel function logs

---

## 🆘 Troubleshooting

### Common Issues:
1. **CORS errors**: Check `api/send-booking.js` headers
2. **Email not sending**: Verify SMTP credentials
3. **CRM not working**: Check HubSpot token permissions
4. **Build errors**: Check `npm run build` locally first

### Debug Commands:
```bash
# Test build locally
npm run build

# Test API locally
npm start

# Check Vercel logs
vercel logs
```

---

**Ready to deploy! 🚀**
