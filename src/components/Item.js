import React from "react";

function Item({ item, onChange, onDelete }) {
  function handleClick(e) {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isInCart: !item.isInCart }),
    })
      .then((res) => res.json())
      .then((data) => onChange(data));
  }
  function handleDelete(e) {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => onDelete(item));
  }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button
        className={item.isInCart ? "remove" : "add"}
        onClick={handleClick}
      >
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export default Item;
