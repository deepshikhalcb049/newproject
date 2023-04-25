import logo from './logo.svg';
import './App.css';
import Header from './header.js'
import Like from './like.js';
import Home from './home.js';
import Footer from './footer.js';
import About from './about.js';
function App() {
  return (
    <div className=" bg-black w-min-screen min-h-screen">
    <Header></Header>
    <Home ></Home>
    <Footer></Footer>
    <About></About>
    {/* <Like></Like> */}
     {/* <div className=" bg-orange-700"></div> */}
    </div>
  );
}

export default App;
