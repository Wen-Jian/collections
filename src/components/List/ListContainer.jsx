import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../util/util";
import { appendData } from "../../store/reducers/listStore/action";
import ListBox from "./ListBox";
import style from "../../styles/list.module.scss";
import InfiniteScroll from "react-infinite-scroll-component";

const ListContainer = () => {
  const { data } = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const isUnmounted = useRef(false);
  const currentOffset = useRef(0);

  const fetchData = async () => {
    const response = await getList(currentOffset.current);
    const { assets } = response;
    if (assets.length > 0 && !isUnmounted.current) {
      dispatch(appendData(assets));
      currentOffset.current += 1;
    }
  };

  useEffect(() => {
    isUnmounted.current = false;
    fetchData();
    return () => {
      isUnmounted.current = ture;
    };
  }, []);
  if (data.length === 0) {
    return null;
  }
  return (
    <div className={style.list_container}>
      <InfiniteScroll
        dataLength={data.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {data.map((obj, index) => {
          return (
            <ListBox
              imgUrl={obj.image_url}
              name={obj.name}
              description={obj.description}
              key={index}
            />
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default ListContainer;
