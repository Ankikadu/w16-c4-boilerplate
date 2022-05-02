// import About from "./About";
// import Home from "./Home";
// import Homedecor from "./Homedecor";
// import Kids from "./Kids";
// import Men from "./Men";
// import Products from "./Products";
// import Women from "./Women";
  

const Navbar = () => {
  return (
    <nav style={{ 
    
    backgroundColor: "#8000ff", 
    padding: 20 , 
    display:"flex",
    
    
    }}>
{/*        
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement  */}
     
     <h2>Home</h2>
      <h2>About</h2>
      <h2>Products</h2>
      <h2>Men</h2>
      <h2>Women</h2>
      <h2>Kids</h2>
      <h2>Homedecor</h2>

      
  {/* <Home/>
  <About/>
   <Products/>
  <Men/>
  <Men/>
  <Women/>
  <Kids/>
  <Homedecor/> */}


    </nav>
  );
};
export default Navbar;