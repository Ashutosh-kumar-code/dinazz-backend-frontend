import React from 'react'
import sty_privacy from "./Privacy.module.css"
// import Nav from './Nav'


const Privacy = () => {
  return (
    <div>
      {/* <DisNav /> */}
      {/* <Nav/> */}


      <div className={sty_privacy.container}>


        <div className={sty_privacy.header}>
          <p>LEGAL</p>
          <h1> PRIVACY POLICY </h1>
        </div>
        <div className={sty_privacy.content}>


          <ol className={sty_privacy.list}>
            <li>
              <h3 className={sty_privacy.point}>1. Collection of Data</h3>
              <div className={sty_privacy.text}>
                We collect, store and process your data to provide you with our services. Therefore, if you choose to provide us with your personal information, you are consenting to the storage and transfer of that info on our servers.
                We collect and store personal information like your name, gender, email address, postal address, mobile number, telephone number, fax number, and financial information(if necessary).

              </div>
            </li>
            <li>
              <h3 className={sty_privacy.point}>2. Use of your information</h3>
              <div className={sty_privacy.text}>
                We use your personal data to provide the services you request. We do not rent, sell, trade or exchange any personally-identifying information of our users. We may share your collected information to our affiliates and service providers under contract to support the operation of the Website and our services.
                We use your personal data to improve our platform, Site’s content, and product offerings, prevent or detect fraud of our website and tailor it to meet your needs. We provide you with an efficient, smooth, safe and customized experience while using the Site.

              </div>
            </li>
            <li>
              <h3 className={sty_privacy.point}>3. Contact Us</h3>
              <div className={sty_privacy.text}>
                All your personal information collected by Dinaaz Hair & Skin is treated as strictly confidential and we will not disclose or share such confidential information with any of the external organizations.
                <ul>
                  <li>•	The users’ privacy is quite important to us. We do not share the users’ personal information to third parties without users’ explicit consent.</li>
                  <li>
                    •	We may be required from time to time disclosure of users’ personal information with government authorities and agencies for the purposes of authentication of identity or for detection, investigations including prosecution, cyber incidents and punishment of offences. You agree and consent for Dinaaz Hair & Skin to disclose your information, but we will only do so under proper authority.
                  </li>
                </ul>
              </div>






            </li>

            <li>
              <h3 className={sty_privacy.point}>4. Data Protection</h3>
              <div className={sty_privacy.text}>
                We adopt a number of mechanisms such as passwords, encryption and physical security to protect your personal data against unauthorized disclosure and access. Unfortunately, no data transmission over the internet can be guaranteed to be secured completely. So while we take all reasonable exertions to protect such data, we cannot assure or guarantee the security of any data you transferred to the site at your own risk. When any personal data is under our possession, we will take reasonable steps to protect that information from any misuse or loss and from unauthorized access or modification.

              </div>
            </li>


            <li>
              <h3 className={sty_privacy.point}>5. Your rights</h3>
              <div className={sty_privacy.text}>
                You possess the right to ask us not to process your personal data for marketing purposes. We will usually inform you (before collecting your data), if we intend to use your data for such purposes or if we intend to disclose your information to any third party for such purposes. You can use your right to prevent such processing by checking certain boxes on the forms we use to collect your data. <br />
                The Website may, from time to time, contain links to and from the websites of our partner networks, advertisers and affiliates. If you follow a link to any of these websites, kindly note that these websites have their own privacy policies and that we do not accept any responsibility or liability for these policies. Please check these policies before you submit any personal data to these websites.


              </div>
            </li>

            <li>
              <h3 className={sty_privacy.point}>6. Minors</h3>
              <div className={sty_privacy.text}>
                Dinaaz Hair & Skin has not designed this website for minors under 18 years of age. The Company does not intentionally gather personal data about users and visitors who are under the age of 18 years.

              </div>
            </li>

            <li>
              <h3 className={sty_privacy.point}>7. Third Parties and Links</h3>
              <div className={sty_privacy.text}>
                We employ other individuals and companies to perform functions on our behalf. They have access to personal information needed to perform their functions, but may not misuse it for other purposes. According to this Privacy Notice, they may process personal data as permissible by the law.
                We may exchange information with third parties for the purposes of credit risk reduction and fraud protection. Other than as set out in the Privacy Policy, we shall not disclose or sell your personal data to third parties without obtaining your prior consent, unless we are required to do so by law.


              </div>
            </li>

            <li>
              <h3 className={sty_privacy.point}>8. Cookies</h3>
              <div className={sty_privacy.text}>
                Cookies can be used to find your Internet Protocol address which saves your time while you are on the Site. The acceptance of cookies is not essential for visiting the Site. We would like to point out that with the activation of cookies, some functionality on the Site and ordering is possible. <br />
                We ensure to use cookies only for your convenience in using the Site and not for obtaining any other information about you. Kindly accept our assurance that the usage of cookies does not contain any personal or private data and are free from viruses. Cookies permit you to take advantage of some of the essential features of Dinaaz Hair & Skin so we recommend you to leave them turned on.


              </div>
            </li>

            <li>
              <h3 className={sty_privacy.point}>9. Consent</h3>
              <div className={sty_privacy.text}>
                By using this Site or by providing your information, you acknowledge the use of your personal information in the manner, as set out in this Privacy Policy. We will share your Personal Information only If we have your consent or any deemed consent to do so i.e., if we are compelled by law.

              </div>
            </li>

            <li>
              <h3 className={sty_privacy.point}>10. General</h3>
              <div className={sty_privacy.text}>
                Any changes to Dinaaz Hair & Skin privacy policy will be communicated through our Website in advance of implementation. If we or our corporate affiliates are involved in an acquisition or merger, we may share personal information with another company, but this policy will continue to apply.
                If you have any concerns or questions regarding these privacy policies, kindly contact us info@dhswellness.com


              </div>
            </li>



          </ol>





        </div>
      </div>

    </div>
  )
}

export default Privacy
