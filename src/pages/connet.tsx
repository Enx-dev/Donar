import Image from "next/image";
import React,{useContext} from "react";
import { useRouter } from 'next/router'
import metaMask from "../asset/metaMask.svg";
import walletConnet from "../asset/walletConnet.svg";
import {DonarContext,DonarProvider } from "../DonarBackend/Donar"
type Props = {};

const connet = (props: Props) => {
  const router = useRouter()
  async function connect() {
    if (typeof window.ethereum !== "undefined") {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" })
            console.log("connected !!!!")

        } catch (e) {
            console.log(e)
        }
   
    } else {
        console.log("metamask does not exist")
    }
   }

  // const connect = useContext(DonarContext)
  return (
    <section className="bg-gradient-to-tr App grid place-content-center p-6 lg:p-0  from-light-accent to-light-accent2">
      <div className="bg-light-accent4 min-w-[300px] max-w-5xl px-4 lg:px-0 py-10 lg:py-0 lg:p-20 space-y-8 rounded-xl min-h-max">        <div className="text-light-text text-center">
          <h1 className="text-4xl font-medium">Connect Wallet</h1>
          <p className="text-lg">Connect wallet to create your account</p>
        </div>
        <div className="space-y-8">
          <div className="connetButton " onClick={()=>{connect()}}>
            <Image src={metaMask} alt="metaMask" width={100} height={100} />
            <div className="text-light-text" >
              <p className="text-xl font-semibold" >Metamask</p>
              <p className="text-lg"> Connect your accout to Metamask wallet</p>
            </div>
          </div>
          <div className="connetButton">
            <Image
              src={walletConnet}
              alt="walletConnet"
              width={100}
              height={100}
            />
            <div className="text-light-text">
              <p className="text-xl font-semibold">Wallet Connet</p>
              <p className="text-lg">Scan with mobile device to connect</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default connet;
