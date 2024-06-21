'use client'
// import Image from "next/image";
// import styles from "./page.module.css";
import Home from "../component/products/DisplayProduct";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";



export default function Index() {
  return (
  <>
    <Header />
    <Home />
    <Footer />
  </>
  );
}
