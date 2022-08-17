import { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";

import foodCategoryImg01 from "../../assets/images/hamburger.png";
import foodCategoryImg02 from "../../assets/images/pizza.png";
import foodCategoryImg03 from "../../assets/images/bread.png";

import products from "../../assets/fake-data/products";
import ProductCard from "../ProductCard/ProductCard";
import "./FilterProduct.css";

const FilterProduct = () => {
    const [category, setCategory] = useState("all")
    const [filterProduct, setFilterProduct] = useState(products)

    useEffect(() => {
        if (category === 'all') {
            setFilterProduct(products)
        }

        if (category === 'burger') {
            setFilterProduct(products.filter(product => product.category === "Burger"));
        }

        if (category === 'pizza') {
            setFilterProduct(products.filter(product => product.category === "Pizza"));
        }

        if (category === 'bread') {
            setFilterProduct(products.filter(product => product.category === "Bread"));
        }

    }, [category]
    )
    return (
        <Container>
            <Row>
                <Col lg="12" className="text-center">
                    <h2>Popular Foods</h2>
                </Col>

                <Col lg="12">
                    <div className="food__category d-flex align-items-center justify-content-center gap-lg-4">
                        <button
                            className={`all__btn ${category === 'all' ? 'foodBtnActive' : ''}`}
                            onClick={() => setCategory("all")}
                        >
                            All
                        </button>
                        <button
                            className={`d-flex align-items-center gap-2 ${category === 'burger' ? 'foodBtnActive' : ''}`}
                            onClick={() => setCategory("burger")}
                        >
                            <img src={foodCategoryImg01} alt="" />
                            Burger
                        </button>

                        <button
                            className={`d-flex align-items-center gap-2 ${category === 'pizza' ? 'foodBtnActive' : ''}`}
                            onClick={() => setCategory("pizza")}
                        >
                            <img src={foodCategoryImg02} alt="" />
                            Pizza
                        </button>

                        <button
                            className={`d-flex align-items-center gap-2 ${category === 'bread' ? 'foodBtnActive' : 'alo'}`}
                            onClick={() => setCategory("bread")}
                        >
                            <img src={foodCategoryImg03} alt="" />
                            Bread
                        </button>
                    </div>
                </Col>

                {
                    filterProduct.map(item => (
                        <Col lg="3" md="4" key={item.id} className="mt-5">
                            <ProductCard item={item} />
                        </Col>
                    ))
                }

            </Row>
        </Container>
    )
}

export default FilterProduct