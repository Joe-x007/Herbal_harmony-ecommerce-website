import {useEffect} from "react";
import {
  BrowserRouter,
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import Home from "./scenes/home/Home"
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import Checkout from "./scenes/checkout/checkout";
import Confirmation from "./scenes/checkout/confirmation";
import Navbar from "./scenes/global/Navbar";
import CartMenu from "./scenes/global/CartMenu";
import About_us_page from "./scenes/home/About_us_page";
import ShoppingList from "./scenes/Products/ShoppingList";
import Footer from "./scenes/global/Footer";

const ScrollToTop = () => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname])

  return null;
}

function App() {
  return (
    <div className="app">
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path= "/" element = {<Home />}/>
        <Route path= "item/:itemId" element = {<ItemDetails />}/>
        <Route path= "checkout" element = {<Checkout />}/>
        <Route path= "checkout/success" element = {<Confirmation />}/>
        <Route path= "about" element={<About_us_page />}/>
        <Route path= "/products" element={<ShoppingList />}/>
      </Routes>
      <CartMenu />
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
