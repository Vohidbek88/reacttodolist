
import { useState } from 'react'
import './list-add.css'
const ListAdd = ({addItem}) => {
    const [seeinp,setSee]=useState(false)
    const [inp,setInp]=useState('')
    const addHandler=()=>{
      if(inp==0){
        alert("Input empty!!!")
      }else{

        const objt={
          id:Date.now(),
          title:inp,
          togglestatus:true
        }
        addItem(objt)
        setInp('')
        setSee(false)
      }
    }
  return (
    <div className='text-center'>
        <section className={`${seeinp ? 'd-block':'d-none'}`}>
            <input type="text" placeholder='Item add' className='addinp' value={inp} onInput={(e)=>setInp(e.target.value)}/>
            <button className='btnmain'  onClick={addHandler}>Add</button>
        </section>
      <button className="btnadd"  onClick={()=>setSee(!seeinp)}>{seeinp ? 'x':'+'}</button>
    </div>
  )
}

export default ListAdd
