import Image from "next/image";
import img from "/public/Logo-01 1.svg";
import Link from 'next/link';

function FirstPage() {
    return (
      <main className="flex flex-col lg:flex-row items-center   justify-center p-8 lg:p-28  lg:space-x-16">
        <div className="flex justify-center items-center ">
          <Image src={img} alt="logo" className="w-72 lg:w-96" />
        </div>
  
        <div className="flex flex-col space-y-5 text-center md:text-start">
          <div className="font-bold text-4xl lg:text-6xl text-[#287668]">
            Welcome to <br /> FireGuard
          </div>
          <div className="font-bold text-xl lg:text-2xl">
            Your Intelligent Fire Detection Solution!
          </div>
          <div className="font-poppins">
            At FireGuard, we leverage current artificial intelligence <br /> generation to offer a quick and reliable solution for fire <br /> detection in pics.<br />
            Our advanced AI algorithms are carefully trained to <br /> recognize unique fire-related images, ensuring <br /> accurate and efficient results.
          </div>
          <div className="flex justify-center items-center space-x-5">
          <Link href='/login'><button className="font-bold bg-[#40B59F] text-[#ffff] rounded-full border-2 px-6 py-1 block md:hidden mr-3">Login</button></Link>
          <Link href='/register'><button className="font-bold bg-[#fffff] text-[#0000000] border-2 border-[#40B59F] rounded-full px-6 py-0 block md:hidden">Register</button></Link>
          </div>
        </div>
      </main>
    );
  }
  
export default FirstPage;