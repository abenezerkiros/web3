import mintExampleAbi from "../mintExampleAbi.json";
import { ethers, BigNumber } from "ethers";
import { useEffect, useState} from "react";



function Mint() {

  const [accounts, setAccounts] = useState([]);
  async function connectAccounts(){
    if(window.ethereum){
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }

  useEffect(()=>{
    connectAccounts();
  },[]);

  const [mintAmount, setMintAmount] = useState(1);
  const [mintAddress, setMintAddress] = useState(1);

  async function handleMint(){
    if(window.ethereum){
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        mintAddress,
        mintExampleAbi.abi,
        signer
      );
      try{
        const response = await contract.mint(BigNumber.from(mintAmount))
        console.log("response: ", response)
      }catch(err){
        console.log("error: ", err)
      }
    }
  }
  return (
    <div classNameName="App">
     
      {accounts.length && (
   <div className="w-full max-w-xs">
   <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
         amount
       </label>
       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" onChange={e=> setMintAmount(e.target.value)}/>
     </div>
     <div className="mb-6">
       <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        address
       </label>
       <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" onChange={e=> setMintAddress(e.target.value)}/>
       
     </div>
     <div className="flex items-center justify-between">
       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleMint}>
         Mint
       </button>

     </div>
   </form>

 </div>
      )
   
      }

    </div>
  );
}

export default Mint;
