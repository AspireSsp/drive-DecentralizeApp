import React from 'react'

const NavBar = ({account}) => {
  return (
    <div style={{width:'100%', background:'#e2e8f0',  display:'flex', justifyContent:'center', alignItems:'center',}}>
        <div style={{width:"90%", height:'60px', background:'#e2e8f0',  display:'flex', justifyContent:'space-between', alignItems:'center', }}>
            <div>
                <h1>Google Drive 3.0</h1>
            </div>
            <div style={{ height:'40px', display:'flex',background:"#0ea5e9",borderRadius:'12px', padding:'3px' }}>
                <div style={{width:"40px",  height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <img style={{width:'100%', borderRadius:'50%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU' />
                </div>
                <div style={{ height:'100%', display:'flex', justifyContent:'center', alignItems:'center', marginLeft:"8px", marginRight:'8px'}}>
                   {account}
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar