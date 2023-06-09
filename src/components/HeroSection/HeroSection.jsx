import './HeroSection.css'
// import bgImage from "../../assets/pictures/bg-nature.jpg";
import myImage from '../../assets/pictures/mohammadali.jpg'

export default function HeroSection() {

    return (
        <div className={'hero-section'}>
            <div className={'content'}>
                <div className={'my-image'}>
                    <img src={myImage}/>
                </div>
                <div className={'info-and-action'}>
                    <div className={'info'}>
                        <p className={'expertise'}>Frontend developer</p>
                        <p className={'name'}>MohammadAli Saeidi</p>
                        <p className={'introduction'}>I am currently studying Computer Engineering at Hamedan University of Technology, with a
                            strong
                            foundation in programming,
                            algorithms, and software development. I have a keen interest in design and enjoy creating
                            user-friendly interfaces. Collaboration is
                            important to me, and I actively engage with my team and other teams. I am highly motivated
                            to
                            support others by sharing my
                            knowledge and contribute to their growth. Overall, I am passionate about creating excellent
                            user
                            experiences through attention to
                            detail and continuous learning.
                        </p>
                    </div>
                    <div className={'actions'}>
                        <button className={'button primary-button'}>Download Resume</button>
                        <button className={'button normal-button'}>Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
}