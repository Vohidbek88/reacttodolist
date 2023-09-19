import { useState } from 'react'
import './list-filter.css'


const ListFilter = ({filterHandler}) => {
    let buttons=[
        {
            id:1,
            title:'All',
        },
        {
            id:2,
            title:'Active'
        },
        {
            id:3,
            title:'Inactive'
        }
    ]
    const filteron=(title)=>{
      filterHandler(title)
    }
  return (
    <div className='d-flex m-auto w-50 justify-content-around my-3'>
      {
        buttons.map(item=>{
            return(
                <button className="btnfilter"  onClick={()=>filteron(item.title)} key={item.id}>{item.title}</button>
            )
        })
      }
    </div>
  )
}

export default ListFilter
