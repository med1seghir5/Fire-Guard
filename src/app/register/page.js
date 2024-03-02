import Image from "next/image";
import img from "/public/undraw_sign_up_n6im (1) 1.svg";
import img2 from "/public/Group 19.svg";
import Link from 'next/link';
// import Navbar from "@/Components/Navbar";

function Register() {
  return (
    <main>
         <div className="flex flex-row items-center justify-center bg-[#fffff] border-b-1 shadow-md hover:shadow-lg shadow-slate-300 w-full md:flex justify-between">
                 <div className="flex items-center justify-center">
                 <Link href="/"><Image src={img2} alt="logo" className="flex flex-col items-center justify-center w-72 ml-16 sm:flex items-center justify-center w-80" /></Link>
                 </div>

                <div className="flex flex-row items-center justify-between mr-16 space-x-10 font-bold hidden md:block">
                    <Link href="/"><button>Home</button></Link>
                    <Link href="/"><button>FAQ</button></Link>
                    <Link href="/about"><button>About</button></Link>
                </div>

                    <div className="flex items-center space-x-3 mr-16 font-bold">
                    <Link href='/login'><button className="bg-[#FFFFFF] rounded-full border-2 border-black px-6 py-1 hidden md:block">Login</button></Link>
                        <Link href='/register'><button className="bg-[#000000] text-[#ffff] rounded-full px-6 py-1 hidden md:block">Try For Free</button></Link>
                    </div>
                    </div>

      <div className="flex flex-col items-center p-24 justify-between md:flex md:flex-row md:items-center md:p-24 md:justify-between">
        <div>
          <Image src={img} alt="logo" className="hidden md:block"/>
        </div>

        <div className="flex flex-col space-y-2 font-poppins">
          <div className="text-center font-bold text-5xl pb-10 md:text-center font-bold text-2xl pb-10">Join to Us</div>
          <div className="text-left font-bold">Your Name </div>
          <div>
            <label className="space-x-1 ">
              <input
                placeholder="Full Name"
                id="text"
                type="text"
                className="border-2 pl-3 border-[#CDCDD] bg-[#ffff] rounded-full w-96 py-2"
              />
            </label>
          </div>

          <div className="font-bold">Your Email Address</div>
          <div className="mt-3">
            <label className="space-x-1">
              <input
                placeholder="Your email"
                id="text"
                type="text"
                className="border-2 pl-3 border-[#CDCDCD] rounded-full bg-[#ffff] w-96 py-2"
              />
            </label>
          </div>

          <div className="font-bold">Your Password</div>
          <div className="mt-3">
            <label className="space-x-1">
              <input
                placeholder="Password"
                id="text"
                type="password"
                className="border-2 pl-3 border-[#CDCDCD] rounded-full bg-[#ffff] w-96 py-2"
              />
            </label>
          </div>

          <div className="space-y-2 pt-10">
            <div>
              <button className="font-bold rounded-full w-96 h-12 text-[#ffff] bg-[#40B59F] ">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;
