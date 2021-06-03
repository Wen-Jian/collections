import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetail } from "../../util/util";
import Header from "../common/header";
import ImageBox from "../common/ImageBox";
import contentStyle from "../../styles/content.module.scss";

const ContentContainer = () => {
  const { id } = useParams();
  const isUnmounted = useRef(false);
  const [detail, setDetail] = useState({});

  const fetchData = async () => {
    const response = await getDetail(id);
    setDetail(response);
  };

  useEffect(() => {
    isUnmounted.current = false;
    fetchData();
    return () => {
      isUnmounted.current = true;
    };
  }, []);

  if (Object.keys(detail).length === 0) return null;

  return (
    <>
      <Header title={detail.collection.name} />
      <div className={contentStyle.content_wrapper}>
        <ImageBox src={detail.image_url} />
        <div className={contentStyle.content_name}>
          {detail.name || "no name"}
        </div>
        <div className={contentStyle.description}>{detail.description}</div>
        <div className={contentStyle.permalink_wrapper}>
          <a href={detail.permalink}>permalink</a>
        </div>
      </div>
    </>
  );
};

export default ContentContainer;
