import Header from "./components/Header";
import Offer from "./components/Offer";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import MainPage from "./components/MainPage";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([]);
  const [curPost, setCurPost] = useState();
  const [cartData, setCartData] = useState([]);
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getData = async() => {
    const response = await fetch("https://ecommbackend-asaw.onrender.com/getshoes", {
      method: "GET",
      headers: {
          'Content-Type': 'application/json',
      },
    });
    const res = await response.json();
    setData(res);
  }

  useEffect(() => {
    let d = localStorage.getItem("username");
    console.log(d);
    if(d) {
      setUser(d);
    }
    getData();
  },[]);

  return (
    <BrowserRouter>
      <div className="flex flex-col">
        <Header />
        <Offer/>
        <Routes>
          <Route path="/" element={<MainPage data={data} setCurPost={setCurPost} />} />
          <Route path="/product" element={<ProductPage curPost={curPost} cartData={cartData} setCartData={setCartData} />} />
          <Route path="/cart" element={<Cart cartData={cartData} setCurPost={setCurPost} setCartData={setCartData} user={user}/>} />
          <Route path="/account" element={<Profile setCurPost={setCurPost} user={user} setUser={setUser} username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>} />
          {/* <Route path="/checkout" element={<Checkout/>} cartData={cartData} check={check}/> */}
        </Routes>
        <Footer />
        <Copyright />
      </div>
    </BrowserRouter>
  );
}

export default App;
