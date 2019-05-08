import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Switch, Route, Redirect} from 'react-router-dom';
import Charts from './Charts';
import Static from './Static'
import Index from './Index';
import Dynamic from './Dynamic';
import HighChartd from './HighChartd';
import Home from './Home'
import BarComponent from './Chartapi';



const style ={
  Paper :{ padding :20, 
            marginTop : 60, 
            marginBottom:10, 
            marginLeft:10,
            marginRight:10 
          },
  // Button :{ font : 'Trocchi' }
}
const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
function ButtonAppBar(props) {
  
  
  // const { anchorEl } = this.state;
  const { classes } = props;
  return (
    <div className={classes.root}>
     
      <AppBar  style={{ background: '#3c3c3c'}} position= 'fixed' color="secondary" >
        <Toolbar variant="dense">
          <Typography variant="overline" color="inherit" className={classes.grow}>
          <Button color="inherit" href='/home' style = {style.Button} >React-Charts</Button>
                  
          </Typography>

          {/* <Button color="inherit"  href='/high'>HighCharts</Button> */}
          <Button color="inherit"  href='/static'>Static</Button>
          <Button color="inherit" href='/dynamic'>Dynamic</Button>
          <Button color="inherit" href = '/charts' >Charts</Button>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path='/charts' component={Index} />
        <Route exact path='/dynamic' component={Dynamic} />
        <Route exact path='/static' component={Static} />
        {/* <Route exact path='/high' component={HighChartd} /> */}
        <Route exact path='/home' component={Home}/>
        <Redirect from='/*' to='/home' />
      </Switch>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
