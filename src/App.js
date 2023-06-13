import './App.css';
import HeroSection from "./components/HeroSection";
import SkillsList from "./components/SkillsList";
import './styles'
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <div className={'content'}>
                <HeroSection/>
                <SkillsList/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
