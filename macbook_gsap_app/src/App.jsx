import React from "react";
import Hero from "./components/Hero.jsx";
import NavBar from "./components/NavBar.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import gsap from "gsap";
import {ScrollTrigger, SplitText} from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
        <NavBar />
        <Hero />
        <ProductViewer />
    </main>
  )
}

export default App