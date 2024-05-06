import React, { useState } from "react";
import axios from "axios";
import Card from "./Card.js";
import { Grid } from "@mui/material";
import InfiniteScroll from "./InfiniteScroll";
import TextField from "@mui/material/TextField";
import "./App.css";
import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import {
  Roles,
  NumberOfEmployees,
  Experience,
  Remote,
  MinimumBasePaySalary,
} from "./Dropdown.js";

const App = () => {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [selectedRole, setSelectedRole] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedRemote, setSelectedRemote] = useState([]);
  const [selectedSalary, setSelectedSalary] = useState("");
  const [selectedCompanyName, setSelectedCompanyName] = useState("");

  const fetchData = async (page) => {
    axios
      .post("https://api.weekday.technology/adhoc/getSampleJdJSON", {
        limit: 10,
        offset: (page - 1) * 10,
      })
      .then((res) => {
        if (res.data["jdList"].length === 0) {
          setHasMore(false);
        } else {
          // console.log(res.data["jdList"]);
          setData([...data, ...res.data["jdList"]]);
        }
      });
  };

  return (
    <>
      <InfiniteScroll
        filters={{
          selectedEmployees,
          selectedExperience,
          selectedRole,
          selectedSalary,
          selectedCompanyName,
        }}
        fetchData={fetchData}
        renderData={renderData}
        hasMore={hasMore}
      />
    </>
  );
};

export default App;
