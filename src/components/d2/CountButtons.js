import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const CountButtons = ({fn}) => {
    const classes = useStyles();

    return (  
        <div>
            <Button variant="contained" onClick={() => fn(-1000000)}>Default</Button>
            <Button variant="contained" color="primary" onClick={() => fn(1)}>plus</Button>
            <Button variant="contained" color="secondary" onClick={() => fn(-1)}>minus</Button>
        </div>
    );
}
 
export default CountButtons;