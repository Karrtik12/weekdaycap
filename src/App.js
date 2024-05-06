import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card.js";
import { Grid } from "@mui/material";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://api.weekday.technology/adhoc/getSampleJdJSON",
          { limit: 10, offset: (page - 1) * 10 }
        );
        setData((prevData) => [...prevData, ...response.data["jdList"]]);
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return;
    }
    // User has scrolled to the bottom, fetch more data
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div>{/* Card code here */}</div>;
}

export default App;
