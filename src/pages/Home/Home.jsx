import './Home.css'
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import SkillsList from "../../components/SkillsList";
import Footer from "../../components/Footer";

export default function Home(){
    return (
        <div className="App">
            <Header/>
            <div className={'content'}>
                <HeroSection/>
                <SkillsList/>
            </div>
            <Footer/>
        </div>
    )
}