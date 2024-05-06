import React, { useState, useEffect } from "react";
const InfiniteScroll = ({ fetchData, renderData, hasMore, filters }) => {
  const [page, setPage] = useState(2);
  useEffect(() => {
    fetchData(1);
  }, []);
  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight && hasMore) {
      fetchData(page);
      setPage((page) => page + 1);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchData]);
  return <div>{renderData(filters)}</div>;
};
export default InfiniteScroll;
