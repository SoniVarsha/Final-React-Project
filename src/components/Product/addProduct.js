import React, { useState, useEffect } from "react";
import styles from "./Modal.module.css";
import { Alert } from '@mui/material'
import { Navigate } from "react-router-dom";

export function AddProduct() {
  const [category, setCategory] = useState("");
  const [description, setdescription] = useState("");
  const [expireDate, setexpireDate] = useState("");
  const [name, setName] = useState("");
  const [unitSold, setUnitSold] = useState("");
  const [productlist, setProductlist] = useState([]);
  const [selected, setSelected] = useState([]);
  const [alert, setAlert] = useState(false);
const [ProductPage,settoProductPage] = useState(false)

  useEffect(() => {
    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );
  }, [selected]);

   const addProductHandler = () => {
    let obj = JSON.parse(localStorage.getItem("productsPage"));
    console.log("before addding product:", obj);

    if (
      name === "" ||
      description === "" ||
      category === "" ||
      expireDate === "" ||
      unitSold === ""
    ) {
      window.alert("Please enter all details for product");
   
      return;
    }

    obj.products.push({
      name: name,
      description: description,
      category:category,
      expireDate: expireDate,
      unitSold: unitSold,

    });

    console.log("after addding product:", obj);

    localStorage.setItem("productsPage", JSON.stringify(obj));
    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );
    
    setAlert(true)
    setTimeout(()=>{
        setAlert(false)
      },1000)
       setTimeout(()=>{
        settoProductPage(true)
      },2000)

  };

  const selectAddHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
{alert && <Alert onClose={() => {}} >This is a success alert — check it out!</Alert>
}
{ProductPage && <Navigate  to="/Product" />}
      <div className="container tm-mt-big tm-mb-big">
        <div className="row">
          <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
            <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
              <div className="row">
                <div className="col-12">
                  <h2 className="tm-block-title d-inline-block">Add Product</h2>
                </div>
              </div>
              <div className="row tm-edit-product-row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <form  onSubmit={selectAddHandler} action="" className="tm-edit-product-form">
                    <div className="form-group mb-3">
                      <label htmlFor="name">Product Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control validate"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    
                        required=""
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="description">Description</label>
                      <textarea
                        className="form-control validate"
                        rows="3"
                        required=""
                        onChange={(e) => setdescription(e.target.value)}
                        value={description}
                      ></textarea>
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="category">Category</label>
                      <select
                        className="custom-select tm-select-accounts"
                        id="category"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                      >
                        <option value="0">Select category</option>
                        <option value="1">New Arrival</option>
                        <option value="2">Most Popular</option>
                        <option value="3">Trending</option>
                      </select>
                    </div>
                    <div className="row">
                      <div className="form-group mb-3 col-xs-12 col-sm-6">
                        <label htmlFor="expire_date">Expire Date</label>
                        <input
                          id="expire_date"
                          name="expire_date"
                          type="text"
                          onChange={(e) => setexpireDate(e.target.value)}
                          value={expireDate}
                          className="form-control validate hasDatepicker"
                          data-large-mode="true"
                        />
                      </div>
                      <div className="form-group mb-3 col-xs-12 col-sm-6">
                        <label htmlFor="stock">Units In Stock</label>
                        <input
                          id="stock"
                          name="stock"
                          type="text"
                          onChange={(e) => setUnitSold(e.target.value)}
            value={unitSold}
                          className="form-control validate"
                          required=""
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
                  <div className="tm-product-img-dummy mx-auto">
                    <i className="fas fa-cloud-upload-alt tm-upload-icon"></i>
                  </div>

                  <div className="custom-file mt-3 mb-3">
                    <input
                      id="fileInput"
                      type="file"
                      style={{ display: "none" }}
                    />
                    <input
                      type="button"
                      className="btn btn-primary btn-block mx-auto"
                      value="UPLOAD PRODUCT IMAGE"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block text-uppercase"
                    onClick={addProductHandler}>
                    Add Product Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}
