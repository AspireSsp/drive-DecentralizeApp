import './App.css';
import upload from "./artifacts/contracts/Uplaod.sol/Upload.json"
import { ethers } from "ethers";
import {useState, useEffect} from 'react';
import FileUpload from './component/FileUpload';
import FileList from './component/FileList';
import NavBar from './component/NavBar';
function App() {

    const[account, setAccount] = useState();
    const[contract, setContract] = useState();
    const[provider, setProvider] = useState();
    const[openModel, setOpenModel] = useState();
    // console.log(upload.abi);
    useEffect(() => {
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
          let contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
          const contract = new ethers.Contract(contractAddress, upload.abi, signer)
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
          <NavBar account={account} />
          <FileUpload contract={contract} account={account} provider={provider} />
          <FileList contract={contract} account={account} provider={provider} />
        </div>
    );
}

export default App;
