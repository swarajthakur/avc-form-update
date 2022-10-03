import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {
  Container,
  Select,
  InputLabel,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  MenuItem,
  FormHelperText,
  Grid,
  Checkbox,
  Link
} from "@mui/material";

function User_Info() {
  return (
    <Box component="form" noValidate sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="place"
            label="Place of Work"
            name="place"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="empno"
            label="Employee Number"
            name="empno"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField required fullWidth id="ni" label="NI Number" name="ni" />
        </Grid>
        <Grid>
          <FormControl sx={{ m: 2, minWidth: 100 }}>
            <InputLabel id="demo-simple-select-helper-label">Title</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Title"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Mr</MenuItem>
              <MenuItem value={20}>Mrs</MenuItem>
              <MenuItem value={30}>Dr</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="By ticking this box I confirm that I have read and understand the Terms and Conditions"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I confirm that I have read and understand the Prudential Declaration"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
export default User_Info;
