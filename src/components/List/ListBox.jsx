import React from "react";
import style from "../../styles/list.module.scss";
import { Link } from "react-router-dom";

const ListBox = ({ imgUrl, name, description, tokenId }) => {
  return (
    <Link to={`/${tokenId}`}>
      <div className={style.list_box_container}>
        <img className={style.list_box_img} src={imgUrl} alt={description} />
        <div className={style.list_box_name}>{name}</div>
      </div>
    </Link>
  );
};

export default React.memo(ListBox);
