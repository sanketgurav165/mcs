import "./about.css";
import Award from "../../img/award.png";
import construction from "../../img/construction.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={construction}
            alt="constructon not found"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h2 className="a-title">About Mauli Construction</h2>
        
        <h4 className="a-title">Owners:</h4>
        <p className="a-sub">
          <b> Mr. Navnath Shendage (DCE, B.E Civil, M.E Civil)</b><br />
          Civil Engineer completed from Pune University having more than 10
          years experience in commercial, residential construction and Real
          Estate Industry. Worked with companies like CBRE, Paranjape, Nyati,
          Marvel Realtors.
        </p>
        
        <p className="a-sub">
          <b> Mr. Sachin Waghmare (B.A 7 YEARS EXPERIENCE IN BBM AND RCC BBM PLASTERING)</b><br />
          B.A. completed from Pune University having more than 7 years experience in RCC and BBM plaster
        </p>
        <p className="a-sub">
        <b>We have completed RCC work 5 lakh sft and ongoing exicution of RCC and BBM-plaster work near about 4 lakh sft.</b>
        </p>
        {/* <p className="a-desc">
          <b>We have completed current work executive 5lakh area completed under construction 4.5lakh sft</b> So, it is no surprise that Mauli
          Construction Group today has built itself a name across the Real
          Estate, Infrastructure & Industrial contracting sectors.
        </p> */}
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">
              International Best Construction Award
            </h4>
            <p className="a-award-desc">
              “It is not the beauty of the building you should look at: it’s the
              construction of the foundation that will stand the test of time.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
