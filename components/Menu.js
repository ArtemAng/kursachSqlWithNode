import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from './Table'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button';
import AddTrain from './adds/addTrain';
import AddCity from './adds/addCity';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import { route } from 'next/dist/next-server/server/router';
import AddRoute from './adds/AddRoute';
import AddClient from './adds/addClient'
import AddTicket from './adds/addTicket';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  groupButtons: {
    marginLeft: '77%'
  }
}));

function ScrollableTabsButtonAuto({ cities, trains, clients, routes, tickets }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Города" {...a11yProps(0)} />
          <Tab label="Поезда" {...a11yProps(1)} />
          <Tab label="Маршруты" {...a11yProps(2)} />
          <Tab label="Билеты" {...a11yProps(3)} />
          <Tab label="Покупатели" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Table columns={['Имя города']} rows={cities.map(i => ({ cityName: i.cityName }))} />
        <AddCity />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Table columns={Object.keys(trains[0])} rows={trains} />
        <AddTrain />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Table columns={Object.keys(routes[0])} rows={routes} />
        <AddRoute />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Table columns={Object.keys(tickets[0])} rows={tickets} />
        <AddTicket />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Table columns={Object.keys(clients[0])} rows={clients} />
        <AddClient />
      </TabPanel>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cities: state.cities,
    trains: state.trains,
    clients: state.clients,
    tickets: state.tickets,
    routes: state.routes
  }
}

const mapDispatchToProps = (dispatch) => {
  const { onAddTrain } = bindActionCreators(actions, dispatch)
  console.log(onAddTrain);
  return {
    onAddTrain: (payload) => onAddTrain(payload)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScrollableTabsButtonAuto)