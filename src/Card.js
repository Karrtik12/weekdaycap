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
              <Typography variant="h6" gutterBottom>
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
          <CardContent>
            <Typography variant="body1" gutterBottom>
              Estimated Salary:{" "}
              {`${salaryCurrencyCode} ${minJdSalary} - ${maxJdSalary}`}
            </Typography>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
                  zIndex: 1,
                }}
              />
              <Typography
                variant="body2"
                gutterBottom
                style={{
                  position: "relative",
                  zIndex: 2,
                  maxHeight: "100px",
                  color:
                    "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
                  overflow: "hidden",
                }}
              >
                {jobDetailsFromCompany}
              </Typography>
            </div>
            <Button
              color="primary"
              style={{ position: "relative", bottom: 0, left: "50%" }}
            >
              View Job
            </Button>
          </CardContent>
        </Grid>
      </MUICard>
    </Grid>
  );
};

export default Card;
