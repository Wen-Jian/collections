import React from "react";
import style from "../../styles/list.module.scss";

const ListBox = ({ imgUrl, name, description }) => {
  return (
    <div className={style.list_box_container}>
      <img className={style.list_box_img} src={imgUrl} alt={description} />
      <div className={style.list_box_name}>{name}</div>
    </div>
  );
};

export default React.memo(ListBox);
