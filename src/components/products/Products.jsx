import React from "react";
import { Grid } from '@material-ui/core'

import Product from "./Product/Product";

import useStyles from './styles'

// const products = [
//     {id: 1, name: 'Shoes', description: 'Running shoes.', price:'$5', image:'https://hips.hearstapps.com/hmg-prod/images/mens-running-shoes-1650311162.jpg'},
//     {id: 2, name: 'Macbook', description: 'Apple macbook', price:'$6', image:'https://5.imimg.com/data5/SELLER/Default/2021/7/KG/PL/ZG/77832050/apple-mackbook-air-250x250.jpg'},
// ]

const Products = ({products, onAddToCart}) => {
    const classes = useStyles()
    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product)=>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart = {onAddToCart}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}
 export default Products