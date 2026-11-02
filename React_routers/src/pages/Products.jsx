import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Products = () => {
  return (
    <div>
      <h1>Products Page</h1>

      <div>
      <Link to="/products/men">Men</Link>
      <Link to="/products/women">Women</Link>
      <Link to="/products/kids">Kids</Link>
      </div>

      <Outlet />

    </div>
  )
}

export default Products
