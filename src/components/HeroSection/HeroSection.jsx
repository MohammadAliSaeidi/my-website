import './HeroSection.css'
import HeroImage from "./HeroImage";
import Introduction from "./Introduction";

export default function HeroSection() {

    return (
        <div className={'hero-section'}>
            <div className={'content'}>
                <HeroImage />
                <div className={'info-and-action'}>
                    <Introduction />
                    <div className={'actions'}>
                        {/*<button className={'button primary-button'}>Download Resume</button>*/}
                        {/*<button className={'button normal-button'}>Contact</button>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}