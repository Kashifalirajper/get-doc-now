import React, { useState } from "react";
import {
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  Paper,
  CardHeader,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import "../index.css";
import "./index.css";
import { Stack } from "@mui/material";

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

const Product = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(0);
  const [values, setValues] = useState(0);
  //   const [checkbox, setChecked] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const classes = useStyles();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <>
      {/* <Typography
        style={{
          marginTop: "50px",
          position: "absolute",
          marginLeft: "160px",
          color: "red",
          fontWeight: "800",
          fontSize: "17",
        }}
      >
        Edit GDN Commons MD
      </Typography> */}
      <Container>
        <>
          <Card
            style={{
              borderRadius: "5px",
              borderBottom: "solid 1px #ccc",
              borderBottomRightRadius: "0px",
              borderBottomLeftRadius: "0px",
            }}
          >
            <Paper>
              <CardHeader
                title={
                  <Typography variant="h5">
                    Products Associated with this HOA
                  </Typography>
                }
                subheader={
                  <>
                    <FormControlLabel
                      control={
                        <Checkbox name="user-availability" color="primary" />
                      }
                      label=" Hide Unrelated Documents"
                    />{" "}
                  </>
                }
              />
            </Paper>
          </Card>
          <Card>
            <Paper>
              <CardContent>
                {/* First card Table */}
                <Grid
                  container
                  xs={12}
                  spacing={2}
                  style={{
                    backgroundColor: "#F1F1F1",
                    borderBottom: "1px solid #C7C4C4",
                    color: "#400040",
                    borderRadius: "10px",
                  }}
                >
                  <Grid item xs={12} md={3} sm={3}>
                    <Stack direction={"row"}>
                      <p>ID</p>
                      <p className="idContent">18 GDN TEST Manager 2009</p>
                    </Stack>
                  </Grid>

                  <Grid item xs={12} md={3} sm={3}>
                    Product Name
                  </Grid>
                  <Grid item xs={4} md={2} sm={2}>
                    $Vendor
                  </Grid>
                  <Grid item xs={4} md={2} sm={2}>
                    $GDN
                  </Grid>
                  <Grid item xs={4} md={2} sm={2}>
                    Taxes & Fees
                  </Grid>
                </Grid>
                <Grid
                  container
                  xs={12}
                  spacing={2}
                  style={{
                    backgroundColor: "#F1F1F1",
                    borderTop: "1px solid #C7C4C4",
                    borderBottom: "1px solid #C7C4C4",
                  }}
                >
                  <Grid item xs={0} md={3} sm={3}></Grid>

                  <Grid item xs={12} md={3} sm={3}>
                    Alternative Dispute Resolution
                  </Grid>
                  <Grid item xs={4} md={2} sm={2}>
                    <Stack direction={"row"}>
                      $5.00
                      <EditIcon style={{ color: "#1eabc7" }} />
                    </Stack>
                  </Grid>
                  <Grid item xs={4} md={2} sm={2}>
                    <Stack direction={"row"}>
                      $5.00
                      <EditIcon style={{ color: "#1eabc7" }} />
                    </Stack>
                  </Grid>
                  <Grid item xs={4} md={2} sm={2}>
                    Show GDN Fee
                  </Grid>
                </Grid>
                <Grid container xs={12} spacing={2}>
                  <Grid
                    item
                    xs={3}
                    style={{
                      borderRight: "1px solid #C7C4C4",
                      textAlign: "center",
                    }}
                    className="onMobileHid"
                  >
                    <p>18</p>
                    <p>GDN TEST Manager</p>
                    <p>2009</p>
                  </Grid>

                  <Grid
                    item
                    xs={2}
                    style={{
                      textAlign: "center",
                      height: "200px",
                    }}
                    className="onMobileHid"
                  >
                    Assigned
                  </Grid>
                  {/* {isEditing && ( */}
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sm={8}
                    className={isEditing ? "openIconBox" : "closeIconBox"}
                    style={{ borderLeft: "solid 1px #ccc" }}
                  >
                    Available
                    <div
                      style={{
                        width: "100% !important",
                        height: "500px",
                      }}
                    >
                      <p>
                        <Button
                          variant="contained"
                          className="btnArrow"
                          color="primary"
                          size="small"
                        >
                          <ArrowBackIcon />
                        </Button>
                        Escrow/Closing Demand Statement HOA Certificate
                        Questionnaire
                      </p>
                      <p>
                        <Button
                          variant="contained"
                          className="btnArrow"
                          color="primary"
                          size="small"
                        >
                          <ArrowBackIcon />
                        </Button>{" "}
                        Custom Forms
                      </p>
                      <p>
                        <Button
                          variant="contained"
                          className="btnArrow"
                          color="primary"
                          size="small"
                        >
                          <ArrowBackIcon />
                        </Button>{" "}
                        Statement Of Accounts
                      </p>
                      <p>
                        <Button
                          variant="contained"
                          className="btnArrow"
                          color="primary"
                          size="small"
                        >
                          <ArrowBackIcon />
                        </Button>{" "}
                        Lender Only Loan Estimate info
                      </p>
                      <p>
                        <Button
                          variant="contained"
                          className="btnArrow"
                          color="primary"
                          size="small"
                        >
                          <ArrowBackIcon />
                        </Button>{" "}
                        Fannie Mae 1077/Freddie Mac 477 Full Form
                      </p>
                      <p>
                        <Button
                          variant="contained"
                          className="btnArrow"
                          color="primary"
                          size="small"
                        >
                          <ArrowBackIcon />
                        </Button>{" "}
                        Fannie Mae 1077/Freddie Mac 477 Short FOrm GDN Final
                        Inspection
                      </p>
                      <p>
                        <Button
                          variant="contained"
                          className="btnArrow"
                          color="primary"
                          size="small"
                        >
                          <ArrowBackIcon />
                        </Button>
                        Resale Certificate
                      </p>
                      <p>
                        <Button
                          variant="contained"
                          className="btnArrow"
                          color="primary"
                          size="small"
                        >
                          <ArrowBackIcon />
                        </Button>
                        Escrow/Closing Demand Statement
                      </p>
                      <p>
                        <Button
                          variant="contained"
                          className="btnArrow"
                          color="primary"
                          size="small"
                        >
                          <ArrowBackIcon />
                        </Button>
                        HUD 9991 Form
                      </p>

                      <p>
                        <Button
                          variant="contained"
                          className="btnArrow"
                          color="primary"
                          size="small"
                        >
                          <ArrowBackIcon />
                        </Button>
                        Refinance Only
                      </p>
                    </div>
                  </Grid>

                  {/* )} */}
                  <Grid item xs={12} className="hidePenContainer">
                    <Paper style={{ width: "100%", padding: "10px" }}>
                      <Stack direction={"row"}>
                        <p>
                          Assigned:
                          <span style={{ color: "#400040", fontWeight: "800" }}>
                            5 Documents
                          </span>
                        </p>
                        <p style={{ marginLeft: "20%", color: "#1eabc7" }}>
                          <EditIcon onClick={handleEditClick} />
                        </p>
                      </Stack>
                    </Paper>
                  </Grid>
                </Grid>
                {/* Second Card Table */}

                <Grid
                  container
                  xs={12}
                  spacing={2}
                  style={{
                    backgroundColor: "#F1F1F1",
                    borderTop: "1px solid #C7C4C4",
                    borderBottom: "1px solid #C7C4C4",
                  }}
                >
                  <Grid item xs={0} md={3} sm={3}></Grid>

                  <Grid item xs={12} md={3} sm={3}>
                    Alternative Dispute Resolution
                  </Grid>
                  <Grid item xs={4} md={2} sm={2}>
                    <Stack direction={"row"}>
                      $5.00
                      <EditIcon style={{ color: "#1eabc7" }} />
                    </Stack>
                  </Grid>
                  <Grid item xs={4} md={2} sm={2}>
                    <Stack direction={"row"}>
                      $5.00
                      <EditIcon style={{ color: "#1eabc7" }} />
                    </Stack>
                  </Grid>
                  <Grid item xs={4} md={2} sm={2}>
                    Show GDN Fee
                  </Grid>
                </Grid>
                <Grid container xs={12} spacing={2}>
                  <Grid
                    item
                    xs={3}
                    style={{
                      borderRight: "1px solid #C7C4C4",
                      textAlign: "center",
                      //   height: "200px",
                    }}
                    className="onMobileHid"
                  >
                    <p>18</p>
                    <p>GDN TEST Manager</p>
                    <p>2009</p>
                  </Grid>

                  <Grid
                    item
                    xs={2}
                    style={{
                      textAlign: "center",
                      height: "200px",
                    }}
                    className="onMobileHid"
                  >
                    Assigned
                  </Grid>
                  {/* {isEditing && ( */}
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sm={8}
                    className={isEditing ? "openIconBox" : "closeIconBox"}
                    style={{ borderLeft: "solid 1px #ccc" }}
                  >
                    Available
                    <div
                      style={{
                        width: "100% !important",
                        height: "500px",
                      }}
                    >
                      <p>
                        <Button
                          variant="contained"
                          className="btnArrow"
                          color="primary"
                          size="small"
                        >
                          <ArrowBackIcon />
                        </Button>
                        Escrow/Closing Demand Statement HOA Certificate
                        Questionnaire
                      </p>
                      <p>
                        <Button
                          variant="contained"
                          className="btnArrow"
                          color="primary"
                          size="small"
                        >
                          <ArrowBackIcon />
                        </Button>{" "}
                        Custom Forms
                      </p>
                      <p>
                        <Button
                          variant="contained"
                          className="btnArrow"
                          color="primary"
                          size="small"
                        >
                          <ArrowBackIcon />
                        </Button>{" "}
                        Statement Of Accounts
                      </p>
                      <p>
                        <Button
                          variant="contained"
                          className="btnArrow"
                          color="primary"
                          size="small"
                        >
                          <ArrowBackIcon />
                        </Button>{" "}
                        Lender Only Loan Estimate info
                      </p>
                      <p>
                        <Button
                          variant="contained"
                          className="btnArrow"
                          color="primary"
                          size="small"
                        >
                          <ArrowBackIcon />
                        </Button>{" "}
                        Fannie Mae 1077/Freddie Mac 477 Full Form
                      </p>
                      <p>
                        <Button
                          variant="contained"
                          className="btnArrow"
                          color="primary"
                          size="small"
                        >
                          <ArrowBackIcon />
                        </Button>{" "}
                        Fannie Mae 1077/Freddie Mac 477 Short FOrm GDN Final
                        Inspection
                      </p>
                      <p>
                        <Button
                          variant="contained"
                          className="btnArrow"
                          color="primary"
                          size="small"
                        >
                          <ArrowBackIcon />
                        </Button>
                        Resale Certificate
                      </p>
                      <p>
                        <Button
                          variant="contained"
                          className="btnArrow"
                          color="primary"
                          size="small"
                        >
                          <ArrowBackIcon />
                        </Button>
                        Escrow/Closing Demand Statement
                      </p>
                      <p>
                        <Button
                          variant="contained"
                          className="btnArrow"
                          color="primary"
                          size="small"
                        >
                          <ArrowBackIcon />
                        </Button>
                        HUD 9991 Form
                      </p>

                      <p>
                        <Button
                          variant="contained"
                          className="btnArrow"
                          color="primary"
                          size="small"
                        >
                          <ArrowBackIcon />
                        </Button>
                        Refinance Only
                      </p>
                    </div>
                  </Grid>

                  {/* )} */}
                  <Grid item xs={12} className="hidePenContainer">
                    <Paper style={{ width: "100%", padding: "10px" }}>
                      <Stack direction={"row"}>
                        <p>
                          Assigned:
                          <span style={{ color: "#400040", fontWeight: "800" }}>
                            5 Documents
                          </span>
                        </p>
                        <p style={{ marginLeft: "20%", color: "#1eabc7" }}>
                          <EditIcon onClick={handleEditClick} />
                        </p>
                      </Stack>
                    </Paper>
                  </Grid>
                </Grid>
              </CardContent>
            </Paper>
          </Card>
        </>
      </Container>
    </>
  );
};

export default Product;
