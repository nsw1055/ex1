import { Grid } from "@material-ui/core";
import { useState } from "react";
import ExLayout from "../d2/ExLayout";
import Cart from "./Cart";
import ProductList from "./ProductList";

const Kiosk = () => {

    const [orderItems, setOrderItems ] = useState([])



    const products = [
        
        {pno:1, name:'연필', price:500},
        {pno:2, name:'샤프', price:1500},
        {pno:3, name:'볼펜', price:2500},
        {pno:4, name:'지우개', price:3500},
        {pno:5, name:'필통', price:4500},
        {pno:6, name:'물감', price:5500},
    ]

    const addCart = (p) => {

        const checkArr = orderItems.filter(ele => ele.product.pno == p.pno)
        
        if(checkArr.length > 0){
            checkArr[0].qty += 1
        }else{
            orderItems.push({product:p, qty:1})
        }

        //console.log(product)
        
        console.log(orderItems)
        setOrderItems(orderItems.slice(0))
    }
    const changeQty = (pno, num)=>{
        console.log(pno, num)
        const checkArr = orderItems.filter(ele => ele.product.pno == pno)
        checkArr[0].qty += num
        setOrderItems(orderItems.slice(0))
    }

    return (
        <ExLayout>
            <Grid container>
                <Grid item xs={8}>
                    <ProductList products = {products} addCart = {addCart}></ProductList>
                </Grid>
                <Grid item xs={4}>
                    <Cart items = {orderItems} changeQty = {changeQty}></Cart>
                </Grid>

            </Grid>
        </ExLayout>
    );
}

export default Kiosk;