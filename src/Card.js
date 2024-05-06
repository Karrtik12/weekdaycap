import React from "react";
import {
  Card as MUICard,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from "@mui/material";

const Card = ({ item }) => {
  const {
    companyName,
    jobRole,
    salaryCurrencyCode,
    minJdSalary,
    maxJdSalary,
    jobDetailsFromCompany,
    logoUrl,
    location,
  } = item;

  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <MUICard style={{ padding: "20px" }}>
        <Grid container spacing={2}>
          <Grid item>
            <CardMedia
              component="img"
              style={{ width: "100px", height: "auto" }}
              image={logoUrl}
              alt={companyName}
            />
          </Grid>
          <Grid item>
            <CardContent>
              <Typography
                variant="subtitle2"
                gutterBottom
                style={{ fontWeight: "bold", color: "#757575" }}
              >
                {companyName}
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ textTransform: "capitalize" }}
              >
                {jobRole}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ textTransform: "capitalize" }}
              >
                {location}
              </Typography>
            </CardContent>
          </Grid>
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography variant="body1" gutterBottom>
              Estimated Salary:
              {!minJdSalary
                ? ` ${salaryCurrencyCode} ${maxJdSalary}`
                : !minJdSalary
                ? ` ${salaryCurrencyCode} ${minJdSalary}`
                : ` ${salaryCurrencyCode} ${minJdSalary} - ${maxJdSalary}`}
            </Typography>
            <Typography
              variant="body2"
              style={{ textTransform: "capitalize", fontWeight: "bold" }}
            >
              About Us:
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{
                position: "relative",
                zIndex: 2,
                maxHeight: "300px",
                overflow: "hidden",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black, transparent)",
              }}
            >
              {jobDetailsFromCompany}
            </Typography>
            <Button color="primary" style={{ bottom: 0, alignSelf: "center" }}>
              View Job
            </Button>
            <Typography>Minimum Experience</Typography>
            <Typography>8 Years</Typography>
            <Button
              style={{
                background: "#54EFC2",
                color: "black",
                textTransform: "initial",
                fontWeight: "400",
              }}
            >
              ⚡️ Easy Apply{" "}
            </Button>
            <Button
              style={{
                background: "#4943DA",
                color: "white",
                textTransform: "initial",
                fontWeight: "400",
              }}
            >
              ⚡️ Unlock Referral Asks
            </Button>
          </CardContent>
        </Grid>
      </MUICard>
    </Grid>
  );
};

export default Card;
