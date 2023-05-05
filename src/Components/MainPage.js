import React, { useState } from "react";
import {
  Typography,
  Button,
  useMediaQuery,
  Tabs,
  Tab,
  Container,
  Card,
  CardContent,
  Paper,
  CardHeader,
  FormControlLabel,
  Checkbox,
  TextField,
  Grid,
} from "@material-ui/core";
import { Address } from "./Address";
import Product from "./Products";
import { NavBars } from "./NavBars";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import MediaQuery from "react-responsive";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import "./index.css";

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

const MainPage = () => {
  const [value, setValue] = useState(0);
  const [values, setValues] = useState(0);
  //   const [checkbox, setChecked] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChebox = (event) => {
    setChecked(event.target.checked);
  };

  const tabProps = (index) => {
    return {
      className: value === index ? classes.activeTab : "",
    };
  };

  const classes = useStyles();
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const arrowStyle = {
    color: theme.palette.primary.contrastText,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1,
    cursor: "pointer",
  };

  const tabStyle = {
    color: "white",
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
        Edit GDN Commons MD
      </Typography>
      <Container>
        <div class="nav nav-tabs">
          <MediaQuery maxWidth={960}>
            {(matches) =>
              matches ? (
                <div style={{ position: "relative" }}>
                  <Tabs value={value} onChange={handleChange} centered>
                    <Tab style={tabStyle} label="General" {...tabProps(0)} />
                    <Tab style={tabStyle} label="Products" {...tabProps(1)} />
                    <Tab style={tabStyle} label="Address" {...tabProps(2)} />
                    <Tab
                      style={tabStyle}
                      label="Escrow Demand"
                      {...tabProps(3)}
                    />
                    <Tab
                      style={tabStyle}
                      label="Resale Cert"
                      {...tabProps(4)}
                    />
                  </Tabs>
                  <ChevronLeft
                    style={{
                      ...arrowStyle,
                      left: 0,
                      backgroundColor: "#7e087e",
                    }}
                    onClick={() => setValue(value - 1)}
                    disabled={value === 0}
                  />
                  <ChevronRight
                    style={{
                      ...arrowStyle,
                      right: 0,
                      backgroundColor: "#5f055f",
                    }}
                    onClick={() => setValue(value + 1)}
                    disabled={value === 4}
                  />
                </div>
              ) : (
                <Tabs value={value} onChange={handleChange} centered>
                  <Tab style={tabStyle} label="General" {...tabProps(0)} />
                  <Tab style={tabStyle} label="Products" {...tabProps(1)} />
                  <Tab style={tabStyle} label="Address" {...tabProps(2)} />
                  <Tab
                    style={tabStyle}
                    label="Escrow Demand"
                    {...tabProps(3)}
                  />
                  <Tab style={tabStyle} label="Resale Cert" {...tabProps(4)} />
                </Tabs>
              )
            }
          </MediaQuery>
        </div>
        {value === 0 && (
          <>
            <Card style={{ marginTop: "20px", borderRadius: "10px" }}>
              <Paper>
                <CardHeader
                  title={<Typography variant="h5"> General</Typography>}
                />

                <CardContent>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={handleChebox}
                        name="myCheckbox"
                        color="primary"
                      />
                    }
                    label="We do not handle documents for this HOA"
                  />{" "}
                  <br />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={handleChebox}
                        name="information"
                        color="primary"
                      />
                    }
                    label="Is information only"
                  />
                  <br />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={handleChebox}
                        name="HOA"
                        color="primary"
                      />
                    }
                    label="This HOA is professionally manages (The management company setting can override this)"
                  />
                  <br />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={handleChebox}
                        name="collectTaxes"
                        color="primary"
                      />
                    }
                    label="Collect Taxes"
                  />{" "}
                  <br />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={handleChebox}
                        name="accecptPayment"
                        color="primary"
                      />
                    }
                    label="Accept Payment"
                  />
                </CardContent>
              </Paper>
            </Card>

            <Card style={{ marginTop: "20px", borderRadius: "20px" }}>
              <Paper>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-basic"
                        label="HOA Name"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-basic"
                        label="City"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-basic"
                        label="State"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-basic"
                        label="Zip"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="outlined-basic"
                        label="GDN Common MD"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checked}
                            onChange={handleChebox}
                            name="myCheckbox"
                            color="primary"
                          />
                        }
                        label="We do not handle documents for this HOA"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Button variant="contained" color="primary">
                        Contained
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Paper>
            </Card>
          </>
        )}

        {value === 1 && <Product />}
        {value === 2 && <Address />}
        {value === 3 && ""}
        {value === 4 && ""}
      </Container>
    </div>
  );
};

export default MainPage;
