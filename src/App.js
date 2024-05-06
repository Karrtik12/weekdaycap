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
  const renderData = (filters) => {
    console.log(filters);
    return (
      <div style={{ margin: "50px" }}>
        <Grid container spacing={10}>
          {data
            .filter((item) => {
              if (
                filters.selectedExperience !== "" &&
                (filters.selectedExperience < item.minExp ||
                  filters.selectedExperience > item.maxExp)
              )
                return false;
              if (
                filters.selectedRole.length !== 0 &&
                filters.selectedRole.includes(item.jobRole) === false
              )
                return false;
              if (
                filters.selectedSalary !== "" &&
                (filters.selectedSalary < item.minJdSalary ||
                  filters.selectedSalary > item.maxJdSalary)
              )
                return false;
              if (
                filters.selectedCompanyName !== "" &&
                item.companyName
                  .toLowerCase()
                  .includes(filters.selectedCompanyName.toLowerCase()) === false
              )
                return false;
              return true;
            })
            .map((item, index) => (
              <Card key={index} item={item} />
            ))}
        </Grid>
      </div>
    );
  };
  return (
    <>
      <div className="filters">
        <FormControl sx={{ m: 1, width: "150px" }}>
          <InputLabel>Role</InputLabel>
          <Select
            multiple
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            input={<OutlinedInput label="Multiple Select" />}
          >
            {Roles.map((name) => (
              <MenuItem key={name} value={name}>
                {name.toLocaleUpperCase()}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: "150px" }}>
          <InputLabel>Employees</InputLabel>
          <Select
            multiple
            value={selectedEmployees}
            onChange={(e) => setSelectedEmployees(e.target.value)}
            input={<OutlinedInput label="Multiple Select" />}
          >
            {NumberOfEmployees.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: "150px" }}>
          <InputLabel>Experience</InputLabel>
          <Select
            value={selectedExperience}
            onChange={(e) => setSelectedExperience(e.target.value)}
            input={<OutlinedInput label="Multiple Select" />}
          >
            {Experience.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: "150px" }}>
          <InputLabel>Remote</InputLabel>
          <Select
            multiple
            value={selectedRemote}
            onChange={(e) => setSelectedRemote(e.target.value)}
            input={<OutlinedInput label="Multiple Select" />}
          >
            {Remote.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, width: "150px" }}>
          <InputLabel>Salary</InputLabel>
          <Select
            value={selectedSalary}
            onChange={(e) => setSelectedSalary(e.target.value)}
            input={<OutlinedInput label="Multiple Select" />}
          >
            {MinimumBasePaySalary.map((name) => (
              <MenuItem key={name} value={name}>
                {name}L
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Company Name"
          variant="outlined"
          onChange={(e) => setSelectedCompanyName(e.target.value)}
        >
          {selectedCompanyName}
        </TextField>
      </div>
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
