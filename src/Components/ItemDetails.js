import React from 'react'
import "./style.css"

export default function ItemDetails(props) {
  return (
    <>
    <div  className='d-flex justify-content-center align-item-center '>
     <div className='w-100  m-3 p-5 border border-dark bg-primary'>
        <dl className='adjustBox'>
            <dt className='Form-label'>Item Name</dt>
            <dd>
                <input type="text" className='form-control' id='txtitemname' />
            </dd>
            <dt className='Form-label'>Quantity</dt>
            <dd>
                <input type="password"className='form-control' id='txtQty' />
            </dd>
            <dt className='Form-label'>Unit Price</dt>
            <dd>
                <input type="Number"className='form-control' id='txtUnit' />
            </dd>
            <dt className='Form-label'>Date of Submission</dt>
            <dd>
                <input type="date"className='form-control' id='txtDate' />
            </dd>
        </dl>
     </div>
    </div>

    
    </>
  )
}
