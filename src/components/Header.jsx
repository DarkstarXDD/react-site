import reactLogo from "../assets/react-logo.png"

export default function Header() {
    return (
        <header>
            <img className="logo-img" src={reactLogo} alt="React logo" />
            <p className="logo-text">ReactFacts</p>
            <p className="project-details">React Course - Project 1</p>
        </header>
    )
}