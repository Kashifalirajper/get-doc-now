import React from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  Paper,
  CardHeader,
  TextField,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
} from "@material-ui/core";
import "./index.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const Address = () => {
  return (
    <>
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Card style={{ marginTop: "20px", borderRadius: "10px" }}>
            <Paper style={{ padding: "20px" }}>
              <CardHeader
                title={
                  <>
                    <Typography variant="h5"> Edit Big Grin</Typography>
                  </>
                }
                subheader="Demo Pleasantville Commons"
              />

              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Street Name"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid>
                    <a href="#">Advance Setting</a>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="City"
                      variant="outlined"
                      fullWidth
                      placeholder="Pleasantville"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="State"
                      variant="outlined"
                      fullWidth
                      placeholder="Pleasantville"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Zip"
                      variant="outlined"
                      fullWidth
                      placeholder="7777"
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Paper>
          </Card>
        </Grid>

        {/* Next  */}
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Card style={{ marginTop: "20px", borderRadius: "10px" }}>
            <Paper style={{ padding: "10px" }}>
              <CardHeader />

              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <label>New Street Number</label>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      fullWidth
                      placeholder="For Example: 8, #A-101, 11 #A-102, 1313#/"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <label>Parcel Number</label>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      fullWidth
                      placeholder="162-35-113-001"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ backgroundColor: "#1EABC7" }}
                    >
                      Add
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <TableContainer>
                      <Table>
                        <TableHead
                          style={{
                            background:
                              "linear-gradient(to right, #410141, #7e087e)",
                            color: "white",
                          }}
                        >
                          <TableRow style={{ fontSize: "8px" }}>
                            <TableCell style={{ color: "white" }}>
                              Street ID#
                            </TableCell>
                            <TableCell style={{ color: "white" }}>
                              Street #
                            </TableCell>
                            <TableCell style={{ color: "white" }}>
                              Street #
                            </TableCell>
                            <TableCell style={{ color: "white" }}>
                              Unit
                            </TableCell>
                            <TableCell style={{ color: "white" }}>
                              Parcel #
                            </TableCell>
                            <TableCell style={{ color: "white" }}>
                              Action
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>12345</TableCell>
                            <TableCell>123 Main St</TableCell>
                            <TableCell>Apt 1</TableCell>
                            <TableCell>1234567</TableCell>
                            <TableCell>View</TableCell>
                            <TableCell>
                              <EditIcon style={{ color: "#1EABC7" }} />
                              <DeleteOutlineIcon style={{ color: "red" }} />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>67890</TableCell>
                            <TableCell>456 Oak St</TableCell>
                            <TableCell>Unit B</TableCell>
                            <TableCell>8910111</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell>
                              <EditIcon style={{ color: "#1EABC7" }} />
                              <DeleteOutlineIcon style={{ color: "red" }} />
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </CardContent>
            </Paper>
          </Card>
        </Grid>
      </Grid>

      {/* <Card style={{ marginTop: "20px", borderRadius: "10px" }}>
        <Paper style={{ padding: "20px" }}>
          <CardHeader
            title={<Typography variant="h5"> General</Typography>}
            subheader="Example Card Subheader"
          />

          <CardContent>
            <Grid container spacing={3}>
              <Grid xs={6} spacing={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Street Name"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid>
                    <a href="#">Advance Setting</a>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="City"
                      variant="outlined"
                      fullWidth
                      placeholder="Pleasantville"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="State"
                      variant="outlined"
                      fullWidth
                      placeholder="Pleasantville"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Zip"
                      variant="outlined"
                      fullWidth
                      placeholder="7777"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid xs={6}>
                <Grid item xs={12}></Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Card> */}
    </>
  );
};
