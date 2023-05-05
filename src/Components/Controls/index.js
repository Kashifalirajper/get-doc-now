import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import FormatShapesIcon from "@mui/icons-material/FormatShapes";
import {
  Typography,
  Button,
  Card,
  CardContent,
  Paper,
  CardHeader,
  FormControlLabel,
  Checkbox,
  TextField,
  Grid,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { NavBars } from "../NavBars";

import "../index.css";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import { Stack } from "@mui/material";

export const Controls = () => {
  const [value, setValue] = useState(0);
  //   const [checkbox, setChecked] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        HOA Administration
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
                  <Typography component="h2" variant="h4">
                    Controls
                  </Typography>
                }
              />

              <CardContent>
                <Grid container sx={3}>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <TextField
                      placeholder="Start typing to search"
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon
                              color="primary"
                              style={{ color: "#1EABC7" }}
                            />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <Button
                              variant="contained"
                              color="primary"
                              style={{
                                height: "40px",
                                backgroundColor: "#1EABC7",
                              }}
                            >
                              Search HOAs
                            </Button>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={8}
                    md={8}
                    lg={8}
                    textAlign="right"
                    style={{ textAlign: "right" }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      position="end"
                      style={{ height: "40px", backgroundColor: "#1EABC7" }}
                    >
                      Click Here to view the system message
                    </Button>
                  </Grid>
                </Grid>

                <Grid container xs={12} spacing={2}>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>
                            <Grid container justifyContent="center">
                              HOA Name
                            </Grid>
                          </TableCell>
                          <TableCell>
                            <Grid container justifyContent="center">
                              Associate info
                            </Grid>
                          </TableCell>
                          <TableCell>
                            <Grid container justifyContent="center"></Grid>
                          </TableCell>
                          <TableCell>
                            <Grid container justifyContent="center"></Grid>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <Stack direction={"column"} spacing={2}>
                              GDN commons MD
                              <p>
                                <Stack direction={"row"}>
                                  <ListAltIcon style={{ fontSize: "18px" }} />{" "}
                                  Grid
                                </Stack>
                              </p>
                            </Stack>
                          </TableCell>
                          <TableCell>
                            <Stack>
                              College Park, NV
                              <span
                                class="tag"
                                style={{
                                  width: "auto",
                                  backgroundColor: "#e3e3e3",
                                  padding: "3px",
                                  color: "#9e9e9e",
                                }}
                              >
                                {" "}
                                Demon Stration{" "}
                              </span>
                            </Stack>
                          </TableCell>
                          <TableCell>
                            <Stack direction={"row"}>
                              Edit HOA <EditIcon style={{ fontSize: "18px" }} />
                            </Stack>
                          </TableCell>
                          <TableCell>
                            {/* <p style={{ fontSize: "15px" }}> */}
                            <Stack direction={"row"}>
                              Edit Logo
                              <FormatShapesIcon />
                            </Stack>
                            {/* </p> */}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Stack direction={"column"} spacing={2}>
                              Demo Pleasantville common
                              <p>
                                <Stack direction={"row"}>
                                  <ListAltIcon style={{ fontSize: "18px" }} />{" "}
                                  Grid
                                </Stack>
                              </p>
                            </Stack>
                          </TableCell>
                          <TableCell>
                            <Stack>
                              Clarksville, CA
                              <span
                                class="tag"
                                style={{
                                  width: "auto",
                                  backgroundColor: "#e3e3e3",
                                  padding: "3px",
                                  color: "#9e9e9e",
                                }}
                              >
                                {" "}
                                Demon Stration{" "}
                              </span>
                            </Stack>
                          </TableCell>
                          <TableCell>
                            <Stack direction={"row"}>
                              Edit HOA <EditIcon style={{ fontSize: "18px" }} />
                            </Stack>
                          </TableCell>
                          <TableCell>
                            {/* <p style={{ fontSize: "15px" }}> */}
                            <Stack direction={"row"}>
                              Edit Logo
                              <FormatShapesIcon />
                            </Stack>
                            {/* </p> */}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Stack direction={"column"} spacing={2}>
                              Clarksville Estates_Demo
                              <p>
                                <Stack direction={"row"}>
                                  <ListAltIcon style={{ fontSize: "18px" }} />{" "}
                                  Grid
                                </Stack>
                              </p>
                            </Stack>
                          </TableCell>
                          <TableCell>
                            <Stack>
                              Jericho, NV
                              <span
                                class="tag"
                                style={{
                                  width: "auto",
                                  backgroundColor: "#e3e3e3",
                                  padding: "3px",
                                  color: "#9e9e9e",
                                }}
                              >
                                {" "}
                                Demon Stration{" "}
                              </span>
                            </Stack>
                          </TableCell>
                          <TableCell>
                            <Stack direction={"row"}>
                              Edit HOA <EditIcon style={{ fontSize: "18px" }} />
                            </Stack>
                          </TableCell>
                          <TableCell>
                            {/* <p style={{ fontSize: "15px" }}> */}
                            <Stack direction={"row"}>
                              Edit Logo
                              <FormatShapesIcon />
                            </Stack>
                            {/* </p> */}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Stack direction={"column"} spacing={2}>
                              Clarksville Estates_Demo
                              <p>
                                <Stack direction={"row"}>
                                  <ListAltIcon style={{ fontSize: "18px" }} />{" "}
                                  Grid
                                </Stack>
                                <Stack direction={"row"}>
                                  <FormControlLabel
                                    control={
                                      <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        color="primary"
                                      />
                                    }
                                    label="Generate Devis-stirling Form"
                                  />
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                  >
                                    View
                                  </Button>
                                </Stack>
                              </p>
                            </Stack>
                          </TableCell>
                          <TableCell>
                            <Stack>
                              Jericho, NV
                              <span
                                class="tag"
                                style={{
                                  width: "auto",
                                  backgroundColor: "#e3e3e3",
                                  padding: "3px",
                                  color: "#9e9e9e",
                                }}
                              >
                                {" "}
                                Demon Stration{" "}
                              </span>
                            </Stack>
                          </TableCell>
                          <TableCell>
                            <Stack direction={"row"}>
                              Edit HOA <EditIcon style={{ fontSize: "18px" }} />
                            </Stack>
                          </TableCell>
                          <TableCell>
                            {/* <p style={{ fontSize: "15px" }}> */}
                            <Stack direction={"row"}>
                              Edit Logo
                              <FormatShapesIcon />
                            </Stack>
                            {/* </p> */}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Stack direction={"column"} spacing={2}>
                              Jericho Hills Estates_Demo
                              <p>
                                <Stack direction={"row"}>
                                  <ListAltIcon style={{ fontSize: "18px" }} />{" "}
                                  Grid
                                </Stack>
                              </p>
                            </Stack>
                          </TableCell>
                          <TableCell>
                            <Stack>
                              Jericho, NV
                              <span
                                class="tag"
                                style={{
                                  width: "auto",
                                  backgroundColor: "#e3e3e3",
                                  padding: "3px",
                                  color: "#9e9e9e",
                                }}
                              >
                                {" "}
                                Demon Stration{" "}
                              </span>
                            </Stack>
                          </TableCell>
                          <TableCell>
                            <Stack direction={"row"}>
                              Edit HOA <EditIcon style={{ fontSize: "18px" }} />
                            </Stack>
                          </TableCell>
                          <TableCell>
                            {/* <p style={{ fontSize: "15px" }}> */}
                            <Stack direction={"row"}>
                              Edit Logo
                              <FormatShapesIcon />
                            </Stack>
                            {/* </p> */}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </CardContent>
            </Paper>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
