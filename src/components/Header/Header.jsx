import "./Header.css";

import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header>
        <img id='logo-header' src="https://logos-world.net/wp-content/uploads/2021/02/Dragon-Ball-Logo.png" alt="Logo Dragon Ball Z" />
       
        <NavBar/>
    </header>
  )
}

export default Header