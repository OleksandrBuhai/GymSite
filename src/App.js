import './App.css';
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Plans from "./components/Plans/Plans";
import Testimonials from "./components/Testimonials/Testimonials";
import JoinUs from "./components/JoinUs/JoinUs";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
        <Hero/>
        <Programs/>
        <Reasons/>
        <Plans/>
        <Testimonials/>
        <JoinUs/>
        <Footer/>
    </div>
  );
}

export default App;
