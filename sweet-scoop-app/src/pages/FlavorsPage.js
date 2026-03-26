import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FlavorCatalog from "../components/FlavorCatalog";
import OrderList from "../components/OrderList";

<div className="flavors-page"> 
  <Header /> 
  <div className="content"> 
    <FlavorCatalog /> 
    <OrderList /> 
  </div> 
  <Footer /> 
</div>