import './HeroSection.css'
import HeroImage from "./HeroImage";
import Introduction from "./Introduction";

export default function HeroSection() {

    return (
        <div className={'hero-section'}>
            <div className={'content'}>
                <HeroImage/>
                <div className={'info-and-action'}>
                    <Introduction/>
                    <div className={'actions'}>
                        <a className={'button primary-button download-resume'}
                           href={process.env.PUBLIC_URL + '/resume-files/en-Resume.pdf'}>Download Resume</a>
                        {/*<button className={'button normal-button'}>Contact</button>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}