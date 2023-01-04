import React, { useContext } from "react";
import ThemeContext from "../Context";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { isLight, changeTheme } = useContext(ThemeContext);

  return (
    <div className="main">
      <div className="heading">
        I have changed Theme to {isLight ? "Light" : "Dark"}
      </div>
      <br></br>
      <hr></hr>
      <div>
        <h2>Geekster</h2>
      </div>
      <Link to="/">Home </Link>
      <br></br>
      <br></br>
      <Link to="/Contact">Contact </Link>
      <br></br>
      <br></br>
      <Link to="/Service">Service</Link>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          changeTheme();
        }}
      >
        Toggle theme to {isLight ? "dark" : "light"}
      </button>
    </div>
  );
};
export default Navbar;
