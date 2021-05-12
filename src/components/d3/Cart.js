import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const Cart = ({ items, changeQty }) => {
    const classes = useStyles();

    let total = 0;

    const list = items.map(orderItem => {
        total += orderItem.product.price * orderItem.qty;

        return (
            <Grid container key={orderItem.product.pno}>
                <Grid item xs={6}>
                    <h4 >{orderItem.product.name} -- {orderItem.qty}</h4>
                    <h5>{orderItem.product.name}</h5>
                </Grid>
                <Grid item xs={6}>
                    <div>
                    <Button size='small' variant="contained" color="primary" onClick={() => changeQty(orderItem.product.pno, 1)}>plus</Button>
                    <Button size='small' variant="contained" color="secondary" onClick={() => changeQty(orderItem.product.pno, -1)}>minus</Button>
                    
                    </div>
                </Grid>

            </Grid>
        )
    })



    return (

        <div>
            <h3>Cart</h3>
            {list}
            <h5>{total}</h5>
        </div>

    );
}

export default Cart;