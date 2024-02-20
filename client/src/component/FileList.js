import React, { useEffect, useState } from 'react'

const FileList = ({contract, account, provider}) => {
    
    const [files, setFiles] = useState([]);
    useEffect(() => {
        const getFiles = async()=>{
            const myfiles = await contract.display(account);
            if (myfiles) {
                const fileArr = myfiles.split(',');
                setFiles(fileArr);
            }
        }
        getFiles();
        setFiles([
            "https://harlequin-negative-hedgehog-66.mypinata.cloud/ipfs/QmZMvecKjkt84GzU7juxD9kPXeTRbBTJ53zbdmBqtpG142",
            "https://harlequin-negative-hedgehog-66.mypinata.cloud/ipfs/QmZMvecKjkt84GzU7juxD9kPXeTRbBTJ53zbdmBqtpG142",
            "https://harlequin-negative-hedgehog-66.mypinata.cloud/ipfs/QmZMvecKjkt84GzU7juxD9kPXeTRbBTJ53zbdmBqtpG142",
            "https://harlequin-negative-hedgehog-66.mypinata.cloud/ipfs/QmZMvecKjkt84GzU7juxD9kPXeTRbBTJ53zbdmBqtpG142",
            "https://harlequin-negative-hedgehog-66.mypinata.cloud/ipfs/QmZMvecKjkt84GzU7juxD9kPXeTRbBTJ53zbdmBqtpG142",
        ])
    }, [])
    
    return (
        <div>
            <h2>Here is your file list:</h2>
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                {
                    files.map((file, index)=>(
                        <div key={index} style={{width: '300px', height:"200px"}}>
                            <img src={file} alt='image' style={{width:"100%"}} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FileList