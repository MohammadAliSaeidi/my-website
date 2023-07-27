import './ContactLink.css'

export default function ContactLink({link, icon, label}) {
    return (
        <a className={'contact-link'} href={link} target="_blank">
            <div className={'icon'}>
                {icon}
            </div>
            {label}
        </a>
    )
}