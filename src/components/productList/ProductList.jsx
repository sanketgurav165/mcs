import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

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
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} sitename={item.sitename} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
