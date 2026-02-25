import { Client } from '@hubspot/api-client';
import 'dotenv/config';

async function testHubSpotToken() {
  console.log('🔍 Testing HubSpot token...');
  
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!token) {
    console.log('❌ No HUBSPOT_ACCESS_TOKEN found in .env');
    return;
  }
  
  console.log('✅ Token found:', token.substring(0, 20) + '...');
  
  try {
    const hubspotClient = new Client({ accessToken: token });
    
    // Test contact creation directly (this will fail if permissions are missing)
    console.log('🔄 Testing contact creation...');
    const testContact = {
      properties: {
        firstname: 'Test',
        lastname: 'User',
        email: 'test@example.com',
        phone: '1234567890',
        lifecyclestage: 'lead',
        hs_lead_status: 'NEW',
        source: 'API Test'
      }
    };
    
    const contactResponse = await hubspotClient.crm.contacts.basicApi.create(testContact);
    console.log('✅ Contact created successfully:', contactResponse.id);
    
    // Clean up - delete the test contact
    await hubspotClient.crm.contacts.basicApi.archive(contactResponse.id);
    console.log('🧹 Test contact deleted');
    
  } catch (error) {
    console.log('❌ Error:', error.message);
    
    if (error.message.includes('MISSING_SCOPES') || error.message.includes('403')) {
      console.log('\n🔧 SOLUTION:');
      console.log('1. Go to: https://app.hubspot.com/developer-privateapps');
      console.log('2. Find your app or create a new one');
      console.log('3. Go to Scopes tab');
      console.log('4. Add these exact scopes:');
      console.log('   ✅ crm.objects.contacts.write');
      console.log('   ✅ crm.schemas.contacts.write');
      console.log('5. Save and reinstall the app');
      console.log('6. Copy the NEW access token');
      console.log('7. Update your .env file');
    }
  }
}

testHubSpotToken();
