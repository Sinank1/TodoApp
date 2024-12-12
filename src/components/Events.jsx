import { pizzas } from "../data.js";

export default function Events() {
  let index = 0;
  let pizza = pizzas[index];
  console.log(pizza);

  function handlePreviousClick() {
    index--;
  }
  function handleNextClick() {
    index++;
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
          <p className="card-text">{pizza.description}</p>
          <span
            className={` badge ${
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
