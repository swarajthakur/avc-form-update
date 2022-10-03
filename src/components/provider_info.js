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
  FormHelperText
} from "@mui/material";

function Provider_Info(props) {

    const setProvider = (e) => {
        props.plan["pension_fund_id"] = parseInt(e.target.value)
        props.setPlan(props.plan)
        console.log(props.plan)
    }

  return (
    <Box>
      <Typography>Select your pension provider</Typography>
      <FormControl sx={{ m: 2, minWidth: 120 }}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Clerical Medical"
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Prudential"
          />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label="Standard Life"
          />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ m: 2, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">
          Pension Fund
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="pension_fund_id"
          label="Pension Fund"
          value={props.plan.pension_fund_id}
          onChange={(e) => setProvider(e)}
        >
          <MenuItem value={0}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Gwynedd Pension Fund</MenuItem>
          <MenuItem value={31}>London Pensions Fund</MenuItem>
          <MenuItem value={30}>Global Index Pensions Fund</MenuItem>
        </Select>
        <FormHelperText>Select one pension fund from the list</FormHelperText>
        <TextField
          sx={{ mt: 2 }}
          id="retirement_age"
          label="Age you plan to retire"
          type="number"
          onChange={(e) => props.setPlan(e)}
          value={props.plan.retirement_age}
          // InputLabelProps={{
          //   shrink: true
          // }}
        />
      </FormControl>
    </Box>
  );
}
export default Provider_Info;
