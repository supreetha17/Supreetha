//import "./App.css";
// import Navbar from "./Components/Navbar";
// import Main from "./Components/Main";
// import Footer from "./Components/Footer";
import Buttons from "./Components/Buttons";
//import DynamicRendering from "./Day 3/DynamicRendering";
//import HelloWorld from "./Day2/HelloWorld";
//import Counter from "./Day 3/Counter";
//import GokuTransformation from "./Day 3/GokuTransformation";
//import ToggleMessage from "./Day 3/ToggleMessage";

function App() {
  return (
    <div>
      <Buttons>Buttons</Buttons>
      <Buttons color="green">Green</Buttons>
      <Buttons color="red">Red</Buttons>
      <Buttons color="blue">Blue</Buttons>
      <Buttons color="yellow">Yellow</Buttons>
    </div>
  );
}
// <Counter></Counter>
//<HelloWorld></HelloWorld>
//   ****buttons code***
//     <div className="flex space-x-4 my-4">
//     </div>

export default App;

// import { useState } from "react";
// import Cart from "./Day 3/CoffeeShop/Cart";
// import Menu from "./Day 3/CoffeeShop/Menu";
// import Navbar from "./Day 3/CoffeeShop/Navbar";
// import categories from "./Day 3/CoffeeShop/Products";

// function App() {
//   const [activeCategory, setActiveCategory] = useState(categories[0]);
//   const [products, setProducts] = useState([]);

//   const handleClick = (index) => {
//     setActiveCategory(categories[index]);
//   };

//   const handleAddToCart = (item) => {
//     setProducts([...products, item]);
//   };

//   return (
//     <div className="space-y-4 my-4">
//       <Navbar category={categories} handleClick={handleClick} />
//       <Menu activeCategory={activeCategory} handleAddToCart={handleAddToCart} />
//       <Cart products={products} />
//     </div>
//   );
// }

// export default App;
