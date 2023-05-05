import React, { useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  Paper,
  CardHeader,
  Checkbox,
  TextField,
  Grid,
  FormControlLabel,
} from "@material-ui/core";
import ImageIcon from "@mui/icons-material/Image";
// import { Address } from "./Address";
import "../index.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { Stack } from "@mui/material";
import { NavBars } from "../NavBars";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  mobileMenuButton: {
    marginRight: theme.spacing(1),
  },
  activeTab: {
    borderTop: "2px solid #1eabc7",
    borderBottom: "none",
  },
}));
export const Submit = () => {
  const [checked, setChecked] = useState(false);

  const handleChebox = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="header">
      <NavBars />
      <Typography
        style={{
          marginTop: "50px",
          position: "absolute",
          marginLeft: "160px",
          color: "white",
          fontWeight: "800",
          fontSize: "17",
        }}
      >
        Submit Order
      </Typography>

      <Grid
        container
        spacing={2}
        style={{ marginTop: "100px", padding: "0 20px" }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Card style={{ marginTop: "20px", borderRadius: "10px" }}>
            <Paper style={{ padding: "20px" }}>
              <CardHeader
                title={
                  <>
                    <Typography
                      variant="h5"
                      style={{
                        textAlign: "center",
                        color: "#4d024d",
                        fontWeight: "800",
                      }}
                    >
                      Order #178351
                    </Typography>
                  </>
                }
              />

              <CardContent>
                <div style={{ textAlign: "center" }}>
                  <p>Resale Certificate</p>
                  <p>
                    HOA:
                    <span style={{ color: "#4d024d", fontWeight: "800" }}>
                      Clarksville Estates_Demo
                    </span>
                    Property Address:
                    <span style={{ color: "#4d024d", fontWeight: "800" }}>
                      1313 Las Vegas NVA
                    </span>
                  </p>
                </div>
                <div
                  className="mdc-file-upload"
                  style={{
                    width: "auto",
                    border: "dotted #ccc",
                    height: "150px",
                    lineHeight: "60px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="file"
                    class="mdc-file-upload__input"
                    id="upload"
                    style={{ display: "none" }}
                  />
                  <label for="upload" class="mdc-file-upload__label">
                    <div
                      class="mdc-file-upload__text"
                      style={{
                        marginLeft: "auto",
                        textAlign: "center",
                      }}
                    >
                      <ImageIcon style={{ fontSize: "30px" }} /> <br />
                      Drag and drop an image file here or click to upload
                    </div>
                  </label>
                </div>
              </CardContent>
              <Grid container xs={12} spacing={2}>
                <Grid item xs={12} md={3}>
                  <TextField
                    id="outlined-basic"
                    label="Assesment Periods"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    id="outlined-basic"
                    label="Range"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    id="outlined-basic"
                    label="Amount (Freedom)"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    id="outlined-basic"
                    label="Amount (Freedom)"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Payable To"
                    variant="outlined"
                    fullWidth
                    placeholder="Jericho Hill"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="outlined-basic"
                    label="Has Late Fee"
                    variant="outlined"
                    fullWidth
                    placeholder="Jericho Hill"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="outlined-basic"
                    label="Late Fee Amount"
                    variant="outlined"
                    fullWidth
                    placeholder="Jericho Hill"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="outlined-basic"
                    label="Charged After"
                    variant="outlined"
                    fullWidth
                    placeholder="Jericho Hill"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="outlined-basic"
                    label="Amount of Unpaid Assesments"
                    variant="outlined"
                    fullWidth
                    placeholder="Jericho Hill"
                  />
                </Grid>
                <Grid item xs={12} md={8}>
                  <TextField
                    id="outlined-basic"
                    label="Charged After"
                    variant="outlined"
                    fullWidth
                    placeholder="Jericho Hill"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="outlined-basic"
                    label="Association Fees"
                    variant="outlined"
                    fullWidth
                    placeholder="Jericho Hill"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="outlined-basic"
                    label="Amount"
                    variant="outlined"
                    fullWidth
                    placeholder="Jericho Hill"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="outlined-basic"
                    label="Pay To"
                    variant="outlined"
                    fullWidth
                    placeholder="Jericho Hill"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="outlined-basic"
                    label="Management Fees"
                    variant="outlined"
                    fullWidth
                    placeholder="Jericho Hill"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="outlined-basic"
                    label="Amount"
                    variant="outlined"
                    fullWidth
                    placeholder="Jericho Hill"
                  />
                </Grid>
                <Grid item xs={12} md={4}></Grid>
                <Grid item xs={12} md={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={handleChebox}
                        name="myCheckbox"
                        color="primary"
                      />
                    }
                    label="Display Resale Contribution On Resale Certificate"
                  />{" "}
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="outlined-basic"
                    label="Association Contribution"
                    variant="outlined"
                    fullWidth
                    placeholder="Jericho Hill"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="outlined-basic"
                    label="$/X"
                    variant="outlined"
                    fullWidth
                    placeholder="Jericho Hill"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="outlined-basic"
                    label="Multiplier"
                    variant="outlined"
                    fullWidth
                    placeholder="Jericho Hill"
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={handleChebox}
                        name="myCheckbox"
                        color="primary"
                      />
                    }
                    label="Separate Checks Required for Association Contribution"
                  />{" "}
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="outlined-basic"
                    label="Association Contribution"
                    variant="outlined"
                    fullWidth
                    placeholder="Jericho Hill"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="outlined-basic"
                    label="$/X"
                    variant="outlined"
                    fullWidth
                    placeholder="Jericho Hill"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="outlined-basic"
                    label="Multiplier"
                    variant="outlined"
                    fullWidth
                    placeholder="Jericho Hill"
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={handleChebox}
                        name="myCheckbox"
                        color="primary"
                      />
                    }
                    label="Separate Checks Required for Association Contribution"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="outlined-basic"
                    label="Amount Of Fees Associated with the Resale of the property"
                    variant="outlined"
                    fullWidth
                    placeholder="Jericho Hill"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="outlined-basic"
                    label="Late Fee Due to the Association"
                    variant="outlined"
                    fullWidth
                    placeholder="Jericho Hill"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="outlined-basic"
                    label="Late Fee Due to the Management Company"
                    variant="outlined"
                    fullWidth
                    placeholder="Jericho Hill"
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    id="outlined-basic"
                    label=" Is the Association account for the Property in collection?"
                    variant="outlined"
                    fullWidth
                    placeholder="Jericho Hill"
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    id="outlined-basic"
                    label="  Fees not payable at this time (Expected in the future)"
                    variant="outlined"
                    fullWidth
                    placeholder="Jericho Hill"
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    id="outlined-basic"
                    label="   Additional Text/Notes"
                    variant="outlined"
                    fullWidth
                    placeholder="Jericho Hill"
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    id="outlined-basic"
                    label="Violations"
                    variant="outlined"
                    fullWidth
                    placeholder="Jericho Hill"
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <Stack sx={{ mt: 2 }} spacing={2} direction="row">
                    <Button variant="contained" color="primary">
                      Submit
                    </Button>
                    <Button variant="contained" color="primary">
                      Save Order Data
                    </Button>
                    <Button variant="contained" color="primary">
                      Preview
                    </Button>
                    <Button variant="contained" color="primary">
                      Cancel
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Paper>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
