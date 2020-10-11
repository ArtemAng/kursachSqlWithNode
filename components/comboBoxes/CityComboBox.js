import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions'
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function SimpleSelect({color, cities, onCitySwitch}) {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        onCitySwitch(event.target.value);
        setAge(event.target.value);
    };

    return (
        <FormControl className={classes.formControl} color = {color ? color: 'primary'}>
            <InputLabel id="demo-simple-select-label" >{'Город'}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
            >
                {cities.map(i => (<MenuItem value={i.cityName} key = {i.id }>{i.cityName}</MenuItem>))}
            </Select>
        </FormControl>
    )
}



export default SimpleSelect;