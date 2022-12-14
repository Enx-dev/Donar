import { createContext, useContext, useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { abi } from "./constants/contractMetadata.json";
const contractAddress: string = "0x578A42E65EA6F8cca77940f79734c1da2868BBF7";
import { ethers } from "ethers";

type IDonar = {
  Metaconnect: () => void;
  connected: any;
  donate: () => void;
};

interface Campaigns{
   CampaignImage:string
   CampaignName:string
   Country:string
   Goal:string
   Raised:string
   percent:string
   typeOfCare:string
}

const DonarContext = createContext<IDonar>({
  Metaconnect() {
    return;
  },
  donate() {
    return;
  },
  connected: null,
});

const DonarProvider = ({ children }: React.PropsWithChildren) => {
  const [connected, setConnected] = useState(null);
  async function Metaconnect() {
    const provider = await detectEthereumProvider();

    if (provider) {
      console.log(provider);
      startApp(provider);
    } else {
      console.log("Please install MetaMask!");
    }
    function startApp(provider: any) {
      if (provider !== window.ethereum) {
        console.error("Do you have multiple wallets installed?");
      }
    }
    window.ethereum
      .request({ method: "eth_accounts" })
      .then(handleAccountsChanged)
      .catch((err: any) => {
        console.error(err);
      });
    window.ethereum.on("accountsChanged", handleAccountsChanged);
    function handleAccountsChanged(accounts: any) {
      if (accounts.length === 0) {
        console.log("Please connect to MetaMask.");
      } else if (accounts[0] !== connected) {
        setConnected(accounts[0]);
      }
    }
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then(handleAccountsChanged)
      .catch((err: any) => {
        if (err.code === 4001) {
          console.log("Please accept.");
        } else {
          console.error(err);
        }
      });
  }

  async function donate() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const transactionResponse = await contract.donate(
        "0x96a8B06597F0473DB023FEDEe9CA9295cdA9c9c8", //but the address should be a dynamic one
        {
          value: ethers.utils.parseUnits("10", "wei"),
        }
      );
      console.log("Done!!");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <DonarContext.Provider value={{ Metaconnect, connected, donate }}>
      {children}
    </DonarContext.Provider>
  );
};

const useDonar = () => {
  return useContext(DonarContext);
};

export { DonarProvider, useDonar };
