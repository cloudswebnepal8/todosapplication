import { Link } from "react-router-dom";
import Hero from "./Hero";
import About from "./About";
import Todo from "./Todo";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Todo/>
      <Contact/>
    
      
    </>

  );
}

export default Home;