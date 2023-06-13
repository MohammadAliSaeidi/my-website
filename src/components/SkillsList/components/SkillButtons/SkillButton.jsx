import './SkillButtons.css';

export default function SkillButton({key, icon, name, handleOnClick}) {
    return (
        <div onClick={() => handleOnClick(key)} key={key} className={'skill-button button'}>
            {icon}
            {name}
        </div>
    )
}