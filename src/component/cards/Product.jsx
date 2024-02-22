import React, { useEffect, useState } from "react";
import "./product.css";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await fetch("http://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await res.clone().json());
        setFilter(await res.json());
        setLoading(false);
      } else {
        return (componentMounted = false);
      }
    };
    getProduct();
  }, []);

  const Loading = () => {
    <>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
    </>;
  };

  const filterProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList);
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            {" "}
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            {" "}
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            {" "}
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2 "
            onClick={() => filterProduct("electronics")}
          >
            {" "}
            Electronic
          </button>
        </div>
        {filter.map((pro) => {
          return (
            <>
              <div className="card" key={pro.title}>
                <div className="content">
                  <img src={pro.image} alt={pro.title} className="cover" />
                  <h2 className="title">{pro.title.substring(0, 15)}..</h2>
                  <p className="sub-title">{pro.category}</p>
                  <p className="sub-title">${pro.price}</p>
                </div>
                <NavLink to={`/products/${pro.id}`} className="add-cart">
                  {" "}
                  Buy Now
                </NavLink>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <section id="off-banner" className="section-m1">
              <h4>Repaire Services</h4>
              <h2>Up to 70% Off - All t-Shirts &amp; Accessories</h2>
              <button className="normal">Explore More</button>
            </section>
            <h1 className="display-6 fw-bolder text-center late">
              Latest Products
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
