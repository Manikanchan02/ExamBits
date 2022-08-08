import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 170,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Section</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Informationtechnology"}>A</MenuItem>
          <MenuItem value={"a"}>B</MenuItem>
          <MenuItem value={"b"}>C</MenuItem>
          <MenuItem value={"c"}>D</MenuItem>
          <MenuItem value={"d"}>E</MenuItem>
          
        </Select>
      </FormControl>
      
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Class</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"one"}>1</MenuItem>
          <MenuItem value={"two"}>2</MenuItem>
          <MenuItem value={"three"}>3</MenuItem>
          <MenuItem value={"four"}>4</MenuItem>
          <MenuItem value={"five"}>5</MenuItem>
          <MenuItem value={"six"}>6</MenuItem>
          <MenuItem value={"seven"}>7</MenuItem>
          <MenuItem value={"eight"}>8</MenuItem>
          <MenuItem value={"nine"}>9</MenuItem>
          <MenuItem value={"ten"}>10</MenuItem>
        </Select>
      </FormControl>

     
     
    </div>
  );

}