import React from 'react'
import Categories from './Categories'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import {Route,Routes } from 'react-router-dom'
import ProductList from "../pages/ProductList";
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import { ToastContainer } from "react-toastify";
import ProductAdd from '../pages/ProductAdd';


export default function Dashboard() {
  return (
    <div>
       <ToastContainer position="bottom-right"/>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Categories />
          </GridColumn>
          <GridColumn width={12}>
          <Routes>
          <Route exact path="/" component={ProductList} />
          <Route path="/" element={<ProductList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail/>} />
          <Route path="/cart" element={<CartDetail />} />
            <Route path="/products/add" component={ProductAdd} />
          </Routes>
          </GridColumn>
        </GridRow>
      </Grid>


    </div>
  )
}
