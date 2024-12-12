import React, { useState } from "react";

const products = [
  { id: 1, title: "Yumurta", quantity: 10, complated: true },
  { id: 2, title: "Un", quantity: 1, complated: true },
  { id: 3, title: "Süt", quantity: 2, complated: false },
  { id: 4, title: "Zeytin", quantity: 2, complated: true },
  { id: 5, title: "Peynir", quantity: 3, complated: false },
];

export default function TodoApp() {
  const [items, setItems] = useState(products);

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, complated: !item.complated } : item
      )
    );
  }

  return (
    <div className="container my-3">
      <div className="card">
        <Header />
        <div className="card-body">
          <Form onAddItem={handleAddItem} />
          <List
            items={items}
            onDeleteItem={handleDeleteItem}
            onUpdateItem={handleUpdateItem}
          />
        </div>
        <Summary items={items} />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="card-header">
      <h1 className="h3">Todo App</h1>
    </div>
  );
}

function Form({ onAddItem }) {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleFormSubmit(event) {
    event.preventDefault();

    const product = {
      id: products.length + 1,
      title: itemName,
      quantity: quantity,
      complated: false,
    };

    console.log(product);

    onAddItem(product);

    setItemName("");
    setQuantity(1);
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="row">
        <div className="col-10">
          <input
            className="form-control"
            type="text"
            placeholder="Eleman ekle"
            name="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div className="col">
          <select
            className="form-select"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {Array.from({ length: 10 }, (v, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <button className="btn btn-primary" type="submit">
            Ekle
          </button>
        </div>
      </div>
    </form>
  );
}

function List({ items, onDeleteItem, onUpdateItem }) {
  return (
    <>
      {items.length > 0 ? (
        <ul className="list-group mt-3">
          {items.map((p, index) => (
            <ListItem
              item={p}
              key={index}
              onDeleteItem={onDeleteItem}
              onUpdateItem={onUpdateItem}
            />
          ))}
        </ul>
      ) : (
        <p className="text-danger">Henüz eleman eklenmedi</p>
      )}
    </>
  );
}

function ListItem({ item, onDeleteItem, onUpdateItem }) {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <div>
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={item.complated}
          onChange={() => onUpdateItem(item.id)}
        />
        <span style={item.complated ? { textDecoration: "line-through" } : {}}>
          {item.title} - {item.quantity}
        </span>
      </div>

      <button
        className="btn btn-sm btn-danger"
        onClick={() => onDeleteItem(item.id)}
      >
        X
      </button>
    </li>
  );
}

function Summary({ items }) {
  const itemsCount = items.length;
  const complatedItemsCount = items.filter((i) => i.complated).length;

  return (
    <footer className="card-footer">
      {itemsCount === complatedItemsCount ? (
        <p className="mb-0">Alışveris tamamlandı.</p>
      ) : (
        <p>
          Alışveriş sepetinizdeki {itemsCount} üründen {complatedItemsCount}{" "}
          tanesini aldınız.
        </p>
      )}
    </footer>
  );
}
