import React, { useEffect, useState } from 'react'

const FileList = ({contract, account, provider}) => {
    
    const [files, setFiles] = useState([]);
    useEffect(() => {
        const getFiles = async()=>{
            if(contract){
                let myfiles = await contract.display(account);
                if (myfiles) {
                    setFiles(myfiles);
                }
            }
        }
        getFiles();
       
    }, [account, contract])
    
    return (
        <div style={{width:'100%'}}>
            <h2>Here is your file list:</h2>
            <div style={{width:'90%'}}>
                <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center'}}>
                    {
                        files.map((file, index)=>(
                            <div key={index} style={{width: '300px', height:"200px", margin:'5px'}}>
                                <img src={file} alt='image' style={{width:"100%"}} />
                            </div>
                        ))
                    }
                     
                </div>

            </div>
        </div>
    )
}

export default FileList