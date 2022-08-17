import Helmet from "../components/Helmet/Helmet";
import Category from "../components/Category/Category";
import Service from "../components/Service/Service";
import Introduce from "../components/Introduce/Introduce";
import FilterProduct from "../components/FilterProduct/FilterProduct";
import HotItem from "../components/HotItem/HotItem";
import WhyTasty from "../components/WhyTasty/WhyTasty";


import "../style/Home.css";
import Review from "../components/Review/Review";
import { useEffect } from "react";


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet title="Home">
      <div className="mt-100"> 
        <section>
          <Introduce />
        </section>

        <section>
          <Category />
        </section>

        <section>
          <FilterProduct />
        </section>

        <section>
          <Service />
        </section>


        <section>
          <WhyTasty />
        </section>

        <section>
          <HotItem />
        </section>

        <section>
          <Review />
        </section>

      </div>

    </Helmet>
  )
}

export default Home