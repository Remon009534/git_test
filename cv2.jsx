import { useState } from "react";
import Footer from "./Footer";
import App from "../App"
import img1 from '../assets/Samira Alcaraz.jpg'
function Header()
{
  return (
    <>
    <h1><a href="/">QuickCV</a></h1>
    <div className="title">
      <h1>Welcome to QuickCV</h1>
      <h3>Choose Documents</h3>
    </div>
    <hr></hr>
    <div className="document">
      <img src={img1}></img>
    </div>
    </>
  );
}

export default Header
