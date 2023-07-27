import './Home.css'
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import SkillsList from "../../components/SkillsList";
import Experiences from "../../components/Experiences";
import Footer from "../../components/Footer";
import '../../styles'
import Background from "../../components/Background/Background";

export default function Home() {
    return <div className="home">
        {/*<Background />*/}
        <Header/>
        <div className={'content'}>
            <HeroSection/>
            <div className='sections'>
                <SkillsList/>
                <Experiences/>
            </div>
        </div>
        <Footer/>
    </div>
}