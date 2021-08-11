import React, { useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterChange, setFilterChange] = useState("All")
  function handleFilterChange(event) {
    setFilterChange(event.target.value);
  }
  const itemsToDisplay = items.filter((item) => {
    if (filterChange === "All") {
      return true;
    } else {
      return item.category === filterChange;
    }
  });
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
