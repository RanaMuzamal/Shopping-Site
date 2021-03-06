import React,{useState} from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Product from './Product/Product'

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    root: {
      flexGrow: 1,
    },
  }));
// Parameter of APi passed to fetch categories and products
export default function Products({products}) {
    const classes=useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container spacing={4} justify="center">
                {products.map((product)=>(
                    <Grid item key={product.id} xs={12} md={4} sm={6} lg={3} >
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}


