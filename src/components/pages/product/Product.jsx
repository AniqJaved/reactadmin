import React from 'react'
import './product.scss'
import {Link} from 'react-router-dom'
import Chart from '../../chart/Chart'
import {productData} from '../../dummydata'

export default function Product() {
  return (
    <>
    <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to='/newProduct'>
                <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} title="Sales Performance" dataKey="Sales"/>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://images.unsplash.com/photo-1606741965429-8d76ff50bb2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className='productShowImg' />
                    <span className="productName">Apple Airpods</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">sales:</span>
                        <span className="productInfoValue">5123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">active:</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock</span>
                        <span className="productInfoValue">no</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <div className="productForm">
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input type="text" placeholder='Apple Airpods' />
                    <label>In stock</label>
                    <select name="inStock" id="idStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="productFormRight"></div>
            </div>
        </div>
    </div>
    </>
  )
}
