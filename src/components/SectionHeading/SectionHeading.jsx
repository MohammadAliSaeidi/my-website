import './SectionHeading.css'

export default function SectionHeading({heading}) {
    return (
        <div className={'section-heading'}>
            <h2>
                {heading}
            </h2>
        </div>
    )
}