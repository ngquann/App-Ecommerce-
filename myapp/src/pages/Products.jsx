import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterActions } from "../store/shoppingCart/filter";
import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";
import products from "../assets/fake-data/products";
import ProductCard from "../components/ProductCard/ProductCard";
import ReactPaginate from "react-paginate";

import "../style/Products.css";


const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [pageNumber, setPageNumber] = useState(0);

  const itemFilter = useSelector(state => state.filter.data)

  if (itemFilter.length === 0) {
    var searchedProduct = products.filter((item) => {
      if (searchTerm.value === "") {
        return item;
      }
      if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return item;
      } else {
        return console.log("not found");
      }
    });
  } else {
    var searchedProduct = itemFilter.filter((item) => {
      if (searchTerm.value === "") {
        return item;
      }
      if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return item;
      } else {
        return console.log("not found");
      }
    });
  };
  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  const items = [...products]
  
  const handleSort = (e) => {
    setValue(e.target.value)
    if (e.target.value === "high-price") {
      dispatch(filterActions.sortAsc(items))
    } else if (e.target.value === "low-price") {
      dispatch(filterActions.sortDes(items))
    } else if (e.target.value === "ascending") {
      dispatch(filterActions.sortAz(items))
    } else if (e.target.value === "descending") {
      dispatch(filterActions.sortZa(items))
    } else {
      dispatch(filterActions.loadData(items))
    }
  }


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet title="All-Foods">
      {/* <CommonSection title="All Foods" /> */}

      <section className="mt-pro">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50" value={value} onChange={(e) => handleSort(e)}>
                  <option value="default">Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName="paginationBttns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Products;