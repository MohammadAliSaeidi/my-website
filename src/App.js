import './App.css';
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import './styles'

function App() {
    return (
        <div className="App">
            <div className={'content'}>
                <HeroSection/>
                <Skills />
            </div>
        </div>
    );
}

export default App;
