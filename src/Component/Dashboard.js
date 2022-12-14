import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    position: 'relative',
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },

  startButton: {
    position: 'absolute',
    right: 15,
    bottom: 15,
  },

  cardstyle: {
    position: 'relative',
  }
}));



export default function Dashboard() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Sign out</MenuItem>
    </Menu>
  );


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      {renderMenu}

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <b>Exam Portal</b><ChevronLeftIcon />
          </IconButton>

        </div>
        <Divider />
        <List>Home</List>
        <Divider />
        <List>Tests</List>
        <Divider />
        <List>Grade</List>
        <Divider />
        <List>Mentor</List>
        <Divider />
        <List>Support</List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>

                <Card className={classes.root} className={classes.cardstyle}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      JAVA BASIC TEST
                    </Typography>
                    <Typography className={classes.pos} >
                      JAVA
                      <br />
                      Marks: 30
                      <br />
                      Time: 30min
                      <br />
                      <Box pt={4}>
                      </Box>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <div>
                      <Button className={classes.startButton} variant="contained" color="primary">
                        START
                      </Button>
                    </div>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
            <Paper className={fixedHeightPaper}>

<Card className={classes.root} className={classes.cardstyle}>
  <CardContent>
    <Typography variant="h5" component="h2">
      DATA STRUCTURE BASIC TEST
    </Typography>
    <Typography className={classes.pos} >
      DATA STRUCTURE
      <br />
      Marks: 30
      <br />
      Time: 30min
      <br />
      <Box pt={4}>
      </Box>
    </Typography>
  </CardContent>
  <CardActions>
    <div>
      <Button className={classes.startButton} variant="contained" color="primary">
        START
      </Button>
    </div>
  </CardActions>
</Card>
</Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
            <Paper className={fixedHeightPaper}>

<Card className={classes.root} className={classes.cardstyle}>
  <CardContent>
    <Typography variant="h5" component="h2">
      PYTHON BASIC TEST
    </Typography>
    <Typography className={classes.pos} >
      PYTHON
      <br />
      Marks: 30
      <br />
      Time: 30min
      <br />
      <Box pt={4}>
      </Box>
    </Typography>
  </CardContent>
  <CardActions>
    <div>
      <Button className={classes.startButton} variant="contained" color="primary">
        START
      </Button>
    </div>
  </CardActions>
</Card>
</Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
            <Paper className={fixedHeightPaper}>

<Card className={classes.root} className={classes.cardstyle}>
  <CardContent>
    <Typography variant="h5" component="h2">
     C++ PROGRAMMING BASIC TEST
    </Typography>
    <Typography className={classes.pos} >
      C++
      <br />
      Marks: 30
      <br />
      Time: 30min
      <br />
      <Box pt={4}>
      </Box>
    </Typography>
  </CardContent>
  <CardActions>
    <div>
      <Button className={classes.startButton} variant="contained" color="primary">
        START
      </Button>
    </div>
  </CardActions>
</Card>
</Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
            <Paper className={fixedHeightPaper}>

<Card className={classes.root} className={classes.cardstyle}>
  <CardContent>
    <Typography variant="h5" component="h2">
      C PROGRAMING BASIC TEST
    </Typography>
    <Typography className={classes.pos} >
      C 
      <br />
      Marks: 30
      <br />
      Time: 30min
      <br />
      <Box pt={4}>
      </Box>
    </Typography>
  </CardContent>
  <CardActions>
    <div>
      <Button className={classes.startButton} variant="contained" color="primary">
        START
      </Button>
    </div>
  </CardActions>
</Card>
</Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
            <Paper className={fixedHeightPaper}>

<Card className={classes.root} className={classes.cardstyle}>
  <CardContent>
    <Typography variant="h5" component="h2">
      JAVASCRIPT BASIC TEST
    </Typography>
    <Typography className={classes.pos} >
      JAVASCRIPT
      <br />
      Marks: 30
      <br />
      Time: 30min
      <br />
      <Box pt={4}>
      </Box>
    </Typography>
  </CardContent>
  <CardActions>
    <div>
      <Button className={classes.startButton} variant="contained" color="primary">
        START
      </Button>
    </div>
  </CardActions>
</Card>
</Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}