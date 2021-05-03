import React from "react";
import Cart from "./cart";

export default function CartList({ robots }) {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Cart
            key={i}
            id={robots[i].name}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
}
