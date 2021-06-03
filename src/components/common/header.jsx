import React from "react";
import { Link } from "react-router-dom";
import headerStyle from "../../styles/header.module.scss";
const Header = ({ title }) => {
  return (
    <div className={headerStyle.header_container}>
      <Link className={headerStyle.last_page_link} to={"/"}>
        {"<"}
      </Link>
      <span>{title}</span>
    </div>
  );
};

export default Header;
