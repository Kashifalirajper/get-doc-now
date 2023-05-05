import React, { useState } from "react";
import {
  Typography,
  Button,
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  OutlinedInput,
} from "@material-ui/core";
// import { Address } from "./Address";

import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import MediaQuery from "react-responsive";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { NavBars } from "../NavBars";

import "../index.css";

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

const CompanySetting = () => {
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
                    <Tab
                      style={tabStyle}
                      label="Disclaimers"
                      {...tabProps(1)}
                    />
                    <Tab
                      style={tabStyle}
                      label="Document Settings"
                      {...tabProps(2)}
                    />
                    <Tab style={tabStyle} label="Reports" {...tabProps(3)} />
                    <Tab style={tabStyle} label="User Roles" {...tabProps(4)} />
                    <Tab
                      style={tabStyle}
                      label="User Assignment"
                      {...tabProps(5)}
                    />
                    <Tab
                      style={tabStyle}
                      label="Create User"
                      {...tabProps(6)}
                    />
                    <Tab
                      style={tabStyle}
                      label="Final inspection"
                      {...tabProps(7)}
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
                  <Tab style={tabStyle} label="Disclaimer" {...tabProps(1)} />
                  <Tab
                    style={tabStyle}
                    label="Document Settings"
                    {...tabProps(2)}
                  />
                  <Tab style={tabStyle} label="Reports" {...tabProps(3)} />
                  <Tab style={tabStyle} label="User Roles" {...tabProps(4)} />
                  <Tab
                    style={tabStyle}
                    label="User Assignment"
                    {...tabProps(5)}
                  />
                  <Tab style={tabStyle} label="Create User" {...tabProps(6)} />
                  <Tab
                    style={tabStyle}
                    label="Final inspection"
                    {...tabProps(7)}
                  />
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
                  subheader="Example Card Subheader"
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
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ backgroundColor: "#1EABC7" }}
                      >
                        Contained
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Paper>
            </Card>
          </>
        )}

        {value === 1 && ""}
        {value === 2 && (
          <>
            <Card style={{ marginTop: "20px", borderRadius: "10px" }}>
              <Paper>
                <CardHeader
                  title={
                    <Typography variant="h5">
                      Documents/Products Assignment
                    </Typography>
                  }
                />

                <CardContent>
                  <Grid container xs={12} spacing={2}>
                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>
                              <Grid container justifyContent="center">
                                Folder
                              </Grid>
                            </TableCell>
                            <TableCell>
                              <Grid container justifyContent="center">
                                HOA Lender Questionnaire
                              </Grid>
                            </TableCell>
                            <TableCell>
                              <Grid container justifyContent="center">
                                Escrow/Closing Demand Statement
                              </Grid>
                            </TableCell>
                            <TableCell>
                              <Grid container justifyContent="center">
                                Resale Certificate & Governing Documents
                              </Grid>
                            </TableCell>
                            <TableCell>
                              <Grid container justifyContent="center">
                                Resale Certificate
                              </Grid>
                            </TableCell>
                            <TableCell>
                              <Grid container justifyContent="center">
                                Purchasers Fee Statement Not For Escrow
                              </Grid>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>Age restrictions, if any</TableCell>
                            <TableCell>
                              <Select
                                defaultValue=" Do not Sale Individually"
                                input={<OutlinedInput />}
                              >
                                <MenuItem value=" Do not Sale Individually">
                                  Do not Sale Individually
                                </MenuItem>
                              </Select>
                            </TableCell>
                            <TableCell>
                              <Select
                                defaultValue="Included In Base"
                                input={<OutlinedInput />}
                              >
                                <MenuItem value="Included In Base">
                                  Included In Base
                                </MenuItem>
                              </Select>
                            </TableCell>
                            <TableCell>
                              <Select
                                defaultValue="Silver"
                                input={<OutlinedInput />}
                              >
                                <MenuItem value="Silver">Silver</MenuItem>
                              </Select>
                            </TableCell>
                            <TableCell>
                              <Select
                                defaultValue="Included In Base"
                                input={<OutlinedInput />}
                              >
                                <MenuItem value="Included In Base">
                                  Included In Base
                                </MenuItem>
                              </Select>
                            </TableCell>
                            <TableCell>
                              <Select
                                defaultValue="Included In Base"
                                input={<OutlinedInput />}
                              >
                                <MenuItem value="Included In Base">
                                  Included In Base
                                </MenuItem>
                              </Select>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              Annual budget report or summary, including reserve
                              study
                            </TableCell>
                            <TableCell>
                              <Select
                                defaultValue=" Do not Sale Individually"
                                input={<OutlinedInput />}
                              >
                                <MenuItem value=" Do not Sale Individually">
                                  Do not Sale Individually
                                </MenuItem>
                              </Select>
                            </TableCell>
                            <TableCell>
                              <Select
                                defaultValue="Included In Base"
                                input={<OutlinedInput />}
                              >
                                <MenuItem value="Included In Base">
                                  Included In Base
                                </MenuItem>
                              </Select>
                            </TableCell>
                            <TableCell>
                              <Select
                                defaultValue="Silver"
                                input={<OutlinedInput />}
                              >
                                <MenuItem value="Silver">Silver</MenuItem>
                              </Select>
                            </TableCell>
                            <TableCell>
                              <Select
                                defaultValue="Included In Base"
                                input={<OutlinedInput />}
                              >
                                <MenuItem value="Included In Base">
                                  Included In Base
                                </MenuItem>
                              </Select>
                            </TableCell>
                            <TableCell>
                              <Select
                                defaultValue="Included In Base"
                                input={<OutlinedInput />}
                              >
                                <MenuItem value="Included In Base">
                                  Included In Base
                                </MenuItem>
                              </Select>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              Approved changes to Assessment
                            </TableCell>
                            <TableCell>
                              <Select
                                defaultValue=" Do not Sale Individually"
                                input={<OutlinedInput />}
                              >
                                <MenuItem value=" Do not Sale Individually">
                                  Do not Sale Individually
                                </MenuItem>
                              </Select>
                            </TableCell>
                            <TableCell>
                              <Select
                                defaultValue="Included In Base"
                                input={<OutlinedInput />}
                              >
                                <MenuItem value="Included In Base">
                                  Included In Base
                                </MenuItem>
                              </Select>
                            </TableCell>
                            <TableCell>
                              <Select
                                defaultValue="Silver"
                                input={<OutlinedInput />}
                              >
                                <MenuItem value="Silver">Silver</MenuItem>
                              </Select>
                            </TableCell>
                            <TableCell>
                              <Select
                                defaultValue="Included In Base"
                                input={<OutlinedInput />}
                              >
                                <MenuItem value="Included In Base">
                                  Included In Base
                                </MenuItem>
                              </Select>
                            </TableCell>
                            <TableCell>
                              <Select
                                defaultValue="Included In Base"
                                input={<OutlinedInput />}
                              >
                                <MenuItem value="Included In Base">
                                  Included In Base
                                </MenuItem>
                              </Select>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </CardContent>
              </Paper>
            </Card>
          </>
        )}
        {value === 3 && ""}
        {value === 4 && ""}
        {value === 5 && (
          <>
            <Card style={{ marginTop: "20px", borderRadius: "10px" }}>
              <Paper>
                <CardHeader
                  title={
                    <Typography variant="h5">
                      Set HOA assignment for users of Demo Management Co.
                    </Typography>
                  }
                  subheader="Unassigned users will still have access to on HOA, but the HOA will not appear in their default view"
                />

                <CardContent>
                  <Grid container xs={12} spacing={2}>
                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>
                              <Grid container justifyContent="center">
                                HOA
                              </Grid>
                            </TableCell>
                            <TableCell>
                              <Grid container justifyContent="center">
                                Joseph Russo
                              </Grid>
                            </TableCell>
                            <TableCell>
                              <Grid container justifyContent="center">
                                Demon Stration
                              </Grid>
                            </TableCell>
                            <TableCell>
                              <Grid container justifyContent="center">
                                Army Assistant Admin
                              </Grid>
                            </TableCell>
                            <TableCell>
                              <Grid container justifyContent="center">
                                Company Admin
                              </Grid>
                            </TableCell>
                            <TableCell>
                              <Grid container justifyContent="center">
                                New Test
                              </Grid>
                            </TableCell>
                            <TableCell>
                              <Grid container justifyContent="center">
                                Test Client
                              </Grid>
                            </TableCell>
                            <TableCell>
                              <Grid container justifyContent="center">
                                Test User
                              </Grid>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>Check All</TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>GDN commons MD</TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Demo Pleasantville Commons</TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Clarksville Estates_Demo</TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Jercho Hills Estates_Demo</TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                            <TableCell>
                              <Checkbox color="primary" />
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </CardContent>
              </Paper>
            </Card>
          </>
        )}
      </Container>
    </div>
  );
};

export default CompanySetting;
