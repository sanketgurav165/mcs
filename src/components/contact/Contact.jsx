import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tu5zijw",
        "template_auxqwfg",
        formRef.current,
        "user_RrIza5pXJTbiJXSCltx9P"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              7507987722
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              mauliconstruction2016@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Plot No-44, Shop No -1, Sr No.311/5, Sai Park, Lane No-04, Behind SilverStone Mall,Handewadi Chowk, Pune -411060
            </div>
            <div className="cicon">
            <a href="https://www.facebook.com/profile.php?id=100078916986845" class="fa fa-facebook">.</a>&nbsp;&nbsp;
            <a href="mailto:mauliconstructions2016@gmail.com" class="fa fa-google">.</a>
              </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            Service if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} >
            <div className="pad">
            <input style={{backgroundColor: darkMode && "#333"}} type="text" required placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" required placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" required placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" required placeholder="Message" name="message" />
            <button>Submit</button>
            </div>
            {/* {done && "Thank you............"} */}
            {done   &&  <h1>Thank You for Contacting Us........</h1> }
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
