import React from "react";
import imgBoxStyle from "../../styles/image_box.module.scss";

const ImageBox = ({ src }) => {
  return (
    <div className={imgBoxStyle.img_box_wrapper}>
      <img src={src} alt="detail img" />
    </div>
  );
};

export default React.memo(ImageBox);
