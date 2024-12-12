import { useState } from "react";
import { pizzas } from "../data.js";

export default function State() {
  const [index, setIndex] = useState(0);

  const [showMore, setShowMore] = useState(false);

  let pizza = pizzas[index];

  function handlePreviousClick() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(pizzas.length - 1);
    }
  }
  function handleNextClick() {
    if (index < pizzas.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  function handleShowMoreClick() {
    setShowMore(!showMore);
  }
  return (
    <div className="container mt-4">
      <button className="btn btn-primary me-2" onClick={handlePreviousClick}>
        Previous
      </button>

      {/* <button
        onClick={() => {
          console.log("Previous");
          alert("Geri Butonuna Tıklandı");
        }}
      >
        Previous
      </button> */}

      <button className="btn btn-danger " onClick={handleNextClick}>
        Next
      </button>

      <div className="card" style={{ width: "400px" }}>
        <img
          src={"/img/" + pizza.image}
          className="card-img-top p-2 p-md-3 border-bottom"
        />
        <div className="card-body">
          <h5 className="card-title">{pizza.title}</h5>
          {showMore ? (
            <p className="card-text">{pizza.description}</p>
          ) : (
            <p className="card-text">{pizza.description.substring(0, 50)}</p>
          )}
          <button
            className="btn btn-primary "
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
          <span
            className={` badge ms-2 ${
              pizza.price > 300 ? "text-bg-danger" : "text-bg-primary"
            } `}
          >
            {pizza.price} ₺
          </span>
        </div>
      </div>
    </div>
  );
}
