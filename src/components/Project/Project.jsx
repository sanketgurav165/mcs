import "./project.css";

const Product = ({img1,link1,sitename}) => {
  return (
    <div className="p-">
      <div className="p-browser-">
        <div className="p-circle-"></div>
        <div className="p-circle-"></div>
        <div className="p-circle-"></div>
        <span className="sitenamespan-">{sitename}</span>
      </div>


      <div className="bigimg-">


       <div className="childimg-">
      <a href={link1} target="_blank" rel="noreferrer">
        <img className="objfit-" src={img1} alt=""  />
      </a> 
      </div>
      
      </div>


    </div>
  );
};

export default Product;
