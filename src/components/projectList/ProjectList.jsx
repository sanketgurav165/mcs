import "./projectlist.css";
import Project from "../Project/Project";
import { projects } from "../../projectsData";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Build & inspire. It's Mauli Constructions</h1>
        <p className="pl-desc">
        At the core of MAULI CONSTRUCTIONS is a team of highly
dedicated and skilled professionals which are the driving force of the
company. This combined with a huge base of skilled workforce
associated with the company, constantly strive for delivering the
project on the parameters of Quality , Safety and Time.
        </p>
        <h1><strong>Project List</strong></h1>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project key={item.id} img1={item.img1} link1={item.link1} sitename={item.sitename1} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
