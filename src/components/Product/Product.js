import React, { useState, useEffect } from "react";
import "./products.css"
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import style from "./Modal.module.css";

function Product() {
  const [productcategories, setProductCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(
      JSON.parse(localStorage.getItem("productsPage"))["products"] 
    );
    setProductCategories(
      JSON.parse(localStorage.getItem("productsPage"))["categories"]
    );
  }, []);

  let newProducts = [];
  const onChangeHandler = (e, index) => {
    if (e.target.checked) {
      newProducts.push(products[index])
    }
    console.log(newProducts)
  }

  const onDeleteIcon = (e, idx) => {
    // console.log(products)
    const newData = products.filter((item, index) => idx !== index)
    console.log("DeleteData", newData)
    setProducts(newData)
    // console.log(newData)
    const newCategories = productcategories.filter((item, index) => idx !== index)
    setProductCategories(newCategories)
  }

  const onMultipleDelete = () => {
    // console.log(newProducts)
    const filteredArray = products.filter((element) => !newProducts.includes(element));
    // console.log(filteredArray)
    setProducts(filteredArray)
  }

  const showModalHandler = () => {
    setShowModal(true);
  };

  const newCategoryHandler = (e) => {
    setNewCategory(e.target.value);
  };

  const addCategoryHandler = () => {
    if (newCategory === "") {
      alert("Please Enter a New Category");
      return;
    }
    productcategories.push(newCategory);
    console.log(productcategories);
    let obj = JSON.parse(localStorage.getItem("productsPage"));
    obj = {
      ...obj,
      categories: productcategories,
    };
    localStorage.setItem("productsPage", JSON.stringify(obj));
    setProductCategories(
      JSON.parse(localStorage.getItem("productsPage"))["categories"]
    );
    setShowModal(false);
    setNewCategory("");
  };

  return (<>
{!showModal && (
    <div className="product-container">
      <div className="product-box">
        <div className="product-left">
          <table className="productLeftTable">
            <thead className="theadproduct">
              <tr >
                <th></th>
                <th>PRODUCT NAME</th>
                <th>UNIT SOLD</th>
                <th>IN STOCK</th>
                <th>EXPIRE DATE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products && products.map((item, index) => (
                <tr className="productbody" key={item.name}>
                  <th><input className="checkbox" type="checkbox" onChange={(e) => onChangeHandler(e, index)} /></th>
                  <td>Lorem Ipsum {item.name}</td>
                  <td>{item.unitSold}</td>
                  <td>{item.stock}</td>
                  <td>{item.expireDate}</td>
                  <td>

                    <div className="deleteIcon" onClick={(e) => onDeleteIcon(e, index)}>
                      < RiDeleteBin5Fill size={20} /></div>

                  </td>
                </tr>
              ))
              }
            </tbody>
          </table>
        </div>
        <Link to="/addproduct"> <button className="btnNewProducts productBtn">
          Add new products
        </button>
        </Link>
        <br></br>

        <button className="btnDeleteProducts productBtn" onClick={onMultipleDelete} >
          Delete selected products
        </button>
      </div>

      <div className="product-right">
        <div className="product-rightbox">
          <h3>Product Categories</h3>
          <div className="product-rightcard">
            <table >
              <tbody >

                {productcategories && productcategories.map((item, index) => (
                  <tr key={index}>
                    <td className="product-name">Product Category {index + 1}</td>
                    <td className="text-center">
                      <div className="deleteIcon" onClick={(e) => onDeleteIcon(e, index)}>
                        < RiDeleteBin5Fill size={20} /></div>
                    </td>
                  </tr>
                ))}



              </tbody>
            </table>
          </div>
          <button className="btnDeleteProducts productnewCategoryBtn" onClick={showModalHandler} >
            Add New Category
          </button>

        </div>
      </div>
    </div>
    )}

{showModal && (
        <div className={style.modal}>
          <form onSubmit={(e) => e.preventDefault()} className={style.form}>
            <div>
            <label htmlFor="productcat">Category Name</label>
            <input
              type="text"
              value={newCategory}
              id="productcat"
              onChange={newCategoryHandler}
            />
            </div>
            <button  className={style.btn}
             onClick={addCategoryHandler}
             >
              Add Category
            </button>
            <button className={style.btn}
            onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
  </>
  );
}

export default Product;