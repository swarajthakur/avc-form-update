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
import { Container } from "@mui/material";

function Scheme_Info(props) {

    const setSchemeValue = (e) => {
        console.log(e.target)
        if(e.target.type == "number"){
            props.plan[e.target.id] = parseInt(e.target.value)
            // console.log(plan.total_avc_amount_requested)
        }
        else{
            props.plan[e.target.id] = e.target.value
        }
        props.setPlan(props.plan)
        console.log(props.plan)
    }

  return (
    <Box>
        {/* {console.log(props.plan)} */}
        <TextField
        sx={{ m: 1 }}
        id="total_avc_amount_requested"
        label="Monthly AVC Amount"
        value={props.plan.total_avc_amount_requested}
        type="number"
        onChange={(e) => setSchemeValue(e)}
        // value={props.plan.total_avc_amount_requested}
        // InputLabelProps={{
        //   shrink: true
        // }}
        />
        <TextField
        sx={{ m: 1 }}
        id="annual_salary"
        label="Annual Salary"
        type="number"
        value={props.plan.annual_salary}
        onChange={(e) => setSchemeValue(e)}
        // InputLabelProps={{
        //   shrink: true
        // }}
        />
        <TextField
        sx={{ m: 1 }}
        id="hours_per_week"
        label="Working hours per week"
        type="number"
        value={props.plan.hours_per_week}
        onChange={(e) => setSchemeValue(e)}
        // InputLabelProps={{
        //   shrink: true
        // }}
        />
    </Box>
  );
}
export default Scheme_Info;
