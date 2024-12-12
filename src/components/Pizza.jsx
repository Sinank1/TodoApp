export default function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  // const title = "Sucuklu Pizza";
  // const description = "Lorem ipsum dolor sit amet.";
  // const image = "pizza1.jpg";
  // const price = 200;

  if (!pizzaObj.is_active) {
    return null;
  }

  return (
    <div className="col">
      <div className="card">
        <img
          src={"/img/" + pizzaObj.image}
          className="card-img-top p-2 p-md-3 border-bottom"
        />
        <div className="card-body">
          <h5 className="card-title">{pizzaObj.title}</h5>
          <p className="card-text">{pizzaObj.description}</p>
          <span
            className={` badge ${
              pizzaObj.price > 300 ? "text-bg-danger" : "text-bg-primary"
            } `}
          >
            {pizzaObj.price} ₺
          </span>
        </div>
      </div>
    </div>
  );
}
