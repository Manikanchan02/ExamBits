import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  candidateName:{
      background: 'blue',
      padding: theme.spacing(3),
      fontSize: '20px',
      color: 'white',
  },
  fullMarks:{
    background: 'grey',
    padding: theme.spacing(2),
    fontSize: '20px',
    color: 'black',
  },
  marksObtained:{
    background: 'grey',
    padding: theme.spacing(2),
    fontSize: '20px',
    color: 'black',
  },
  correctAnswer:{
    background: 'green',
    padding: theme.spacing(1),
    fontSize: '20px',
    color: 'white',
  },
  wrongAnswer:{
    background: 'red',
    padding: theme.spacing(1),
    fontSize: '20px',
    color: 'white',
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} className={classes.candidateName}>Candidate's Name</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} className={classes.fullMarks}>Full Marks</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} className={classes.marksObtained}>Marks Obtained</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} className={classes.correctAnswer}>Correct Answer</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} className={classes.wrongAnswer}>Wrong Answer</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

