import { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Input } from "@material-ui/core";

interface IFormInput {
  title: string;
  description: string;
  category: string;
  urlImage: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: "block",
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  })
);

export default function CreatePost(props: any) {
  const { control, handleSubmit } = useForm<IFormInput>();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const [category, setCategory] = React.useState<string>("");
  const [openSelect, setOpenSelect] = React.useState(false);

  const handleCloseSelect = () => {
    setOpenSelect(false);
  };

  const handleOpenSelect = () => {
    setOpenSelect(true);
  };

  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(event.target.value as string);
  };

  return (
    <div className="createPost">
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        className="buttonCreate"
      >
        <i className="ri-pencil-fill"></i>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create Post</DialogTitle>
        <DialogContent>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            rules={{ required: true, maxLength: 5 }}
            render={({ field }) => <Input {...field} />}
          />

          <TextField
            margin="dense"
            id="name"
            label="Description"
            type="text"
            fullWidth
          />
          <div>
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel id="demo-controlled-open-select-label">
                Category
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={openSelect}
                onClose={handleCloseSelect}
                onOpen={handleOpenSelect}
                value={category}
                onChange={handleChangeSelect}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Travel"}>Travel</MenuItem>
                <MenuItem value={"Lifestyle"}>Lifestyle</MenuItem>
                <MenuItem value={"Business"}>Business</MenuItem>
                <MenuItem value={"Food"}>Food</MenuItem>
                <MenuItem value={"Work"}>Work</MenuItem>
              </Select>
            </FormControl>
          </div>
          <TextField
            margin="dense"
            id="name"
            label="URL of the image"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
