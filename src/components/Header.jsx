import logoSmall from "../assets/images/react-logo.png"

export default function Header() {
  return (
    <header className="header">
      <div className="logo-wrapper">
        <img className="logo-small" src={logoSmall} alt="react" width="28" />
        <p className="logo-text">ReactFacts</p>
      </div>
      <p>React Couse - Project 1</p>
    </header>
  )
}
