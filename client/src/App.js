import './App.css';
import upload from "./artifacts/contracts/Uplaod.sol/Upload.json"
import { ethers } from "ethers";
import {useState, useEffect} from 'react';
import FileUpload from './component/FileUpload';
import FileList from './component/FileList';
function App() {

    const[account, setAccount] = useState();
    const[contract, setContract] = useState();
    const[provider, setProvider] = useState();
    const[openModel, setOpenModel] = useState();
    // console.log(upload.abi);
    useEffect(() => {
      // console.log(myProvider);
      const loadProvider = async()=>{
        const provider = new ethers.BrowserProvider(window.ethereum);
        if(provider){
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });       
          await provider.send("eth_requestAccounts", [])
          const signer =  await provider.getSigner();
          let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
          const contract = new ethers.Contract(contractAddress, upload.abi, signer)
          console.log("my cc",contract);
          setContract(contract);
          setProvider(provider);
          setAccount(signer.address)
     
        }else{
          console.log("MetaMask not installed; using read-only defaults")
        }
      }
      loadProvider();
    }, [])
    


    return (
        <div className="App">
          <h1>Google Drive 3.0</h1>
          <h2>Account: {account ? account: "connect your metamask account...!"}</h2>
          <FileUpload contract={contract} account={account} provider={provider} />
          {/* <FileList contract={contract} account={account} provider={provider} /> */}
        </div>
    );
}

export default App;
