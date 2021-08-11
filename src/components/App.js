import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData); 
  const [toggler, setToggle] = useState(false);
  // this data will be passed down to the ShoppingList as a prop
  console.log(items);
  const appClass = toggler ? "App dark" : "App light"
  function toggleHandler(){
    setToggle(!toggler)
    }
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
 

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleHandler}>{toggler ? "Light Mode": "Dark Mode"}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
