import Pizza from "./Pizza";
import { pizzas } from "../data.js";
export default function PizzaList() {
  // const pizzaObj = {
  //   title: "Sucuklu Pizza",
  //   description: "Lorem ipsum dolor sit amet.",
  //   image: "pizza1.jpg",
  //   price: 200
  // };

  return (
    <div className="pizza-list">
      <h1>PizzaList</h1>
      <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4">
        {pizzas.length > 0 ? (
          pizzas.map((p, index) => (
            // <Pizza title={p.title} description={p.description} image={p.image} price={p.price} />
            <Pizza pizzaObj={p} key={index} />
          ))
        ) : (
          <div className="alert alert-danger">Pizza bulunamadı!</div>
        )}
      </div>
    </div>
  );
}
