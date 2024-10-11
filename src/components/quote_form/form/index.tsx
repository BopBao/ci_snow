/// REACT ///
import { useState } from "react";
/// REDUX ///
import { useAppDispatch } from "api/hooks";
import { useAppSelector } from "api/hooks";
/// ACTIONS ///
import { submit } from "api/actions";
/// MUI ///
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export interface FormFields {
  name?: string,
  phone?: string,
  email?: string,
  address?: string,
  postal?: string,
  contact_type?: string,
  request_description?: string,
  how_hear?: string
}

interface FormFieldError {
  name?: boolean,
  phone?: boolean,
  email?: boolean,
  address?: boolean
}

export default function Form() {
  const dispatch = useAppDispatch();
  const [fields, setFields] = useState<FormFields>({ contact_type: "Phone" });
  const [errors, setErrors] = useState<FormFieldError>({});
  const { submitting } = useAppSelector(state => state.form);
  const { submit_complete } = useAppSelector(state => state.form);
  const { error } = useAppSelector(state => state.form);

  const verifyForm = () => {
    let err: FormFieldError = {};

    if (!fields?.name || fields.name === "") {
      err.name = true;
    }

    if (!fields?.phone || fields.phone === "") {
      err.phone = true;
    }

    if (!fields?.email || fields.email === "") {
      err.email = true;
    }

    if (!fields?.address || fields.address === "") {
      err.address = true;
    }

    if (err.name || err.phone || err.email || err.address) {
      setErrors(err);
      return;
    }

    dispatch(submit(fields));
  }

  return (
    <Stack sx={{ width: "1200px", backgroundColor: "#fff", padding: "40px", borderRadius: "5px", marginTop: "25px", marginBottom: "25px" }} spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Name"
          fullWidth
          error={errors?.name}
          helperText={errors?.name ? "Please enter your name" : ""}
          onChange={e => { setFields({ ...fields, name: e.target.value }); setErrors({ ...errors, name: false }) }}
        />
        <TextField
          fullWidth
          label="Phone"
          error={errors?.phone}
          helperText={errors?.phone ? "Please enter your phone number" : ""}
          onChange={e => { setFields({ ...fields, phone: e.target.value }); setErrors({ ...errors, phone: false }) }}
        />
        <TextField
          fullWidth
          label="Email"
          error={errors?.email}
          helperText={errors?.email ? "Please enter your email" : ""}
          onChange={e => { setFields({ ...fields, email: e.target.value }); setErrors({ ...errors, email: false }) }}
        />
      </Stack>
      <TextField
        fullWidth
        label="Street Address"
        error={errors?.address}
        helperText={errors?.address ? "Please enter your address" : ""}
        onChange={e => { setFields({ ...fields, address: e.target.value }); setErrors({ ...errors, address: false }) }}
      />
      <TextField
        defaultValue="Phone"
        select
        label="How Should We Contact You?"
        onChange={e => setFields({ ...fields, contact_type: e.target.value })}
      >
        <MenuItem key="P" value="Phone">
          Phone
        </MenuItem>
        <MenuItem key="E" value="Email">
          Email
        </MenuItem>
      </TextField>
      <TextField
        label="Property Info - Hazards? - Special Requests?"
        multiline
        minRows={6}
        onChange={e => setFields({ ...fields, request_description: e.target.value })}
      />
      {
        submitting ?
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress size={35} />
          </div> :
          submit_complete ?
            <Typography variant="h6">
              Thank you for taking the time to reach out, we will contact you soon!
            </Typography> :
            error !== "" ?
              <Typography variant="h6" color="error">
                Sorry! There was an error with your form please contact us at customerservice@capitalirrigation.com or call us at 780-989-3987.
              </Typography> :
              <Button onClick={verifyForm}>
                Submit
              </Button>
      }
    </Stack>
  )
}
