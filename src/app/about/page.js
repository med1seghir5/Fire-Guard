import Image from "next/image";
import img2 from "/public/Group 19.svg";
import img5 from "/public/Instagram (2).svg";
import img6 from "/public/1280px-Facebook_Logo_(2019) 2.svg";
import img7 from "/public/discord-logo-discord-icon-transparent-free-png 1.svg";
import Link from 'next/link';

function About() {
    return (
      <main>
        <div className="flex flex-row items-center justify-center bg-[#fffff] border-b-1 shadow-md hover:shadow-lg shadow-slate-300 w-full md:flex justify-between">
          <div className="flex items-center justify-center">
            <Image src={img2} alt="logo" className="flex flex-col items-center justify-center w-72 ml-16 sm:flex items-center justify-center w-80" />
          </div>
  
          <div className="flex flex-row items-center justify-between space-x-10 font-bold md:mr-40 hidden md:block">
            <Link href="/"><button>Home</button></Link>
            <Link href="/"><button>FAQ</button></Link>
            <Link href="/about"><button>About</button></Link>
          </div>
  
          <div className="flex items-center space-x-3 mr-4 font-bold">
            <Link href='/login'><button className="bg-[#FFFFFF] border-2 border-black rounded-full px-4 py-1 hidden md:block">Login</button></Link>
            <Link href='/register'><button className="bg-[#000000] text-[#ffff] rounded-full px-4 py-1 hidden md:block">Sign up</button></Link>
          </div>
        </div>
  
        <div className="flex flex-col items-center justify-center text-center p-4 md:p-10">
          <div className="font-bold text-3xl md:text-4xl p-2">About Us</div>
          <div className="font-semibold text-sm md:text-base">Google Developer Student Clubs are university-based community groups for students interested in Google developer technologies.<br/> Students from all undergraduate or graduate programs with an interest in growing as a <br/>developer are welcome.</div>
        </div>
  
        <div className="text-center font-bold text-3xl md:text-4xl p-2">
          Teams
        </div>
  
        <div className="flex flex-col justify-center items-center font-semibold space-y-4 md:space-y-0 md:flex-row md:space-x-5">
  <div className="flex flex-col md:flex-row md:space-x-10">
    <div className="text-center">Achraf abdelouadoud Nessighaoui</div>
    <div className="text-center">Zakaria Abd Eldjalil Hadef</div>
    <div className="text-center">Abdelmalek Med Seghir</div>
  </div>

  <div className="flex flex-col md:flex-row md:space-x-10">
    <div className="text-center">Aya Lounis</div>
    <div className="text-center">Amina Bennamor</div>
  </div>
</div>

  
        <div className="flex flex-col justify-center items-center p-4 md:p-24">
          <div className="text-center font-bold text-xl md:text-2xl p-2">Follow Us</div>
  
          <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-10">
            <Image src={img7} alt="logo" className="w-16" />
            <div className="font-semibold text-slate-500"><a href="https://discord.gg/Ns3mPRPb">Discord</a></div>
            <Image src={img5} alt="logo" className="w-12" />
            <div className="font-semibold text-slate-500"><a href="https://www.instagram.com/gdsc.batna2?">Instagram</a></div>
            <Image src={img6} alt="logo" />
            <div className="font-semibold text-slate-500"><a href="https://www.facebook.com/GDSCBatna?mibextid=ZbWKwL">facebook</a></div>
          </div>
        </div>
      </main>
    );
  }
export default About;