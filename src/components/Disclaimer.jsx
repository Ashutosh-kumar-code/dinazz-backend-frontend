// Disclaimer.jsx

// import Nav from './Nav';
import styles from './sty_dis.module.css';

const Disclaimer = () => {
  return (<>
    {/* <DisNav /> */}
    {/* <Nav/> */}

    <div className={styles.container}>

      <div className={styles.header}>
        <p>LEGAL</p>
        <h1>  DISCLAIMER </h1></div>
      <div className={styles.content}>
        <ol className={styles.list}>
          <li>
            <h3 className={styles.point}>1. Consent</h3>
            <div className={styles.text}>
             By using this Site or by providing your information, you acknowledge the use of your personal information in the manner, as set out in this Disclaimer. We will share your Personal Information only If we have your consent or any deemed consent to do so i.e., if we are compelled by law.
            </div>
          </li>
          <li>
            <h3 className={styles.point}>2. General</h3>
            <div className={styles.text}>
             Any changes to Dinaaz Hair & Skin disclamer will be communicated through our website in advance of implementation. If we or our corporate affiliates are involved in an acquisition or merger, we may share personal information with another company, but this policy will continue to apply.
            </div>
          </li>
          <li>
            <h3 className={styles.point}>3. Contact Us</h3>
            <div className={styles.text}>
              If you have any concerns or questions regarding these disclaimer, kindly contact us info@dhswellness.com
            </div>
          </li>
        </ol>
      </div>
    </div>

  </>

  );
};

export default Disclaimer;
