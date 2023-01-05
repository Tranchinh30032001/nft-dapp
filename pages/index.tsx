import { useMetamask, useDisconnect, useAddress } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  const connectWithMetamask  = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect()
  return (
    <div>
      <Head>
        <title>Dapp NFT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col lg:grid lg:grid-cols-6 h-screen" >
          {/* left */}
          <div className="flex flex-col items-center justify-center col-span-2 bg-gradient-to-br from-cyan-800 to-rose-500 max-w-full p-5" >
            <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-md " >
              <img src="https://links.papareact.com/8sg" className="w-32 lg:w-44 flex-shrink-0 rounded-md" alt="" />
            </div>
            <div className="text-white text-center mt-3" >
              <h2>HELLO TVC</h2>
              <p>I'm TVC and i'm a web developer</p>
            </div>
          </div>
          {/* right */}
          <div className="col-span-4 p-4 lg:p-10 " >
            <div className="flex items-center justify-between border-b-2 p-2">
                <h2>The <span className="font-bold " >TVC PUNCK</span> NFT Market Place </h2>
                <button className="bg-gray-300 px-5 py-2 rounded-full cursor-pointer font-medium " >Sign Out</button>
            </div>
            <div className="flex flex-col items-center justify-center mt-4 " >
              <h2 className="text-red-600 font-bold text-center " >{!address ? "" : `You are logged in with ${address.slice(0,6)} ... ${address.slice(-4)}`}</h2>
              <div className="w-[300px] lg:w-[400px] mt-8" >
                <img src="https://links.papareact.com/bdy" className="w-full h-full object-cover" alt="" />
              </div>
              <h1 className="font-extrabold text-2xl text-center my-5 lg:my-12" >The collections TVC is the best in the world</h1>
              <button onClick={connectWithMetamask} className="w-full bg-gray-500 text-white py-3 rounded-full mt-[50px]" >Sign to mint</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
