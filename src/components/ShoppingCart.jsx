import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { decrement, increment, remove } from "../Redux/ShoppingSlice";

function ShoppingCart() {
  let dispatch = useDispatch();
  let products = useSelector((state) => state.shopping.products);
  // let [values, setValues] = useState(products);
  let handleClick = (event) => {
    console.log(event);
    dispatch(increment(event.id));
  };
  let handleDecrement = (event) => {
    dispatch(decrement(event.id));
  };
  let handleSum = () => {
    return products.reduce((acc, curr) => {
      acc += curr.count * curr.price;
      return acc;
    }, 0);
  };
  let handleRemove = (eve) => {
    dispatch(remove(eve.id));
  };

  return (
    <div className="container-fluid">
      <Card
        className="bg-light text-black"
        style={{ width: "900px", margin: "auto", padding: "20px" }}
      >
        {products.map((e, i) => {
          return (
            <div key={i}>
              <div className="d-flex justify-content-between">
                <div
                  className="d-flex"
                  style={{ columnGap: "15px", width: "50%" }}
                >
                  <img src={e.images[0]} style={{ width: "50%" }}></img>
                  <div>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text>{e.description}</Card.Text>
                  </div>
                </div>
                <div
                  className="d-flex flex-column align-items-end"
                  style={{ rowGap: "30px" }}
                >
                  <div
                    className="d-flex align-items-center"
                    style={{ columnGap: "15px" }}
                  >
                    <div className="d-flex" style={{ columnGap: "5px" }}>
                      <Button
                        variant="outline-danger"
                        onClick={() => handleClick(e)}
                      >
                        +
                      </Button>
                      &nbsp;
                      <span>{e.count}</span>&nbsp;
                      <Button
                        variant="outline-danger"
                        onClick={() => handleDecrement(e)}
                      >
                        -
                      </Button>
                    </div>
                    <div>
                      <span>{e.price}</span>
                    </div>
                  </div>
                  {e.stock == 0 ? (
                    <span style={{ color: "red" }}>Out of Stock</span>
                  ) : (
                    ""
                  )}
                  <div>
                    <Button
                      variant="outline-danger"
                      onClick={() => handleRemove(e)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
              <hr></hr>
              <div className="d-flex justify-content-between">
                <span>Quantity</span>
                <span>{e.count}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>{e.count != 0 ? e.count * e.price : 0}</span>
              </div>
              <hr />
            </div>
          );
        })}

        <div className="d-flex justify-content-between">
          <span>Total</span>
          <span>{handleSum()}</span>
        </div>
      </Card>
    </div>
  );
}

export default ShoppingCart;
