import { ethers } from 'ethers';
import React, { useState } from 'react'

const FileUpload = ({contract, account}) => {
    const [file, setFile] = useState();
    const provider = new ethers.BrowserProvider(window.ethereum);
    // console.log(file);


    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("file", file);
            const metadata = JSON.stringify({
                name: file.name,
            });
            formData.append("pinataMetadata", metadata);
      
            const options = JSON.stringify({
                cidVersion: 0,
            });
            formData.append("pinataOptions", options);
      
            const res = await fetch(
                "https://api.pinata.cloud/pinning/pinFileToIPFS",
                {
                    method: "POST",
                    headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI1ZWFiNzEzNy01ODQ3LTQwMjktYTJkNy05ZThiNzJmNTI2MDAiLCJlbWFpbCI6InNhbmpheXByYWphcGF0aTY4MTQ5QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI5Y2JiY2Q0MTNhMDI4NTVjZDEyZSIsInNjb3BlZEtleVNlY3JldCI6IjE5YzcxNDJjYWQwMjYxZmRiOTdjYjM5ZjhlMGY3YWJmM2JhYjBlMzdjOGRiNTI2MjkzNjBjYzhlNTBjZTg2MTAiLCJpYXQiOjE3MDgzNDAwNzd9.FmByvCI1VG78nEU-bXUMaRV4Gb4zMAD_ojg2uOvJsJA`,
                    },
                    body: formData,
                },
            );
            const resData = await res.json();
            // console.log("pinata res--> ",resData);
            const image = `https://harlequin-negative-hedgehog-66.mypinata.cloud/ipfs/${resData.IpfsHash}`
            await contract.add(account, image)
            alert("image uploaded successfully")
        } catch (error) {
            console.log(error);
        }
    } 
    return (
        <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center', margin:'10px' }}>

            <div style={{width:'60%', border:'0.5px solid #cbd5e1', padding:'10px', borderRadius:'5px'}}>
                <form>
                    <label>
                        Select File
                    </label>
                    <input style={{cursor:'pointer'}} type='file' disabled={!account} onChange={(event)=>{setFile(event.target.files[0])}} />
                    <button style={{background:'#0ea5e9', padding:'8px', border:'0px', borderRadius:'4px', color:"white", cursor:'pointer'}} onClick={handleSubmit}>Upload</button>
                </form>
            </div>
        </div>
    )
}

export default FileUpload