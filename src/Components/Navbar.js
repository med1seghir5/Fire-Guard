import Image from "next/image";
import img2 from '/public/Group 19.svg';
import img3 from '/public/arrow-circle-left-light.svg';
import img4 from '/public/question-circle-light.svg';
import Link from 'next/link';


function Navbar(){
    return(
        <main>
             <div className="flex flex-row items-center justify-center bg-[#fffff] border-b-1 shadow-md hover:shadow-lg shadow-slate-300 w-full md:flex justify-between">
                 <div className="flex items-center justify-center">
                    <Link href="/"><Image src={img4} alt="logo" className="flex flex-col items-center justify-center pt-1 ml-5 sm:flex items-center justify-center sm:hidden" /></Link>
                    <Link href="/about"><Image src={img3} alt="logo" className="flex flex-col items-center justify-center pt-1 ml-6 sm:flex items-center justify-center sm:hidden" /></Link>
                    <Link href="/"><Image src={img2} alt="logo" className="flex flex-col items-center justify-center pt-1 w-80 ml-20 sm:flex items-center justify-center w-80" /></Link>
                 </div>

                <div className="flex flex-row items-center justify-between space-x-10 pr-28 font-bold hidden md:block">
                    <Link href="/"><button >Home</button></Link>
                    <Link href="/"><button>FAQ</button></Link>
                    <Link href="/about"><button>About</button></Link>
                </div>

                    <div className="flex items-center space-x-3 mr-16 font-bold">
                    <Link href='/login'><button className="bg-[#FFFFFF] border-2 border-black rounded-full px-6 py-1 hidden md:block">Login</button></Link>
                        <Link href='/register'><button className="bg-[#000000] text-[#ffff] rounded-full px-6 py-1 hidden md:block">Try for free</button></Link>
                    </div>
                    </div>
        </main>
    )
    
}


export default Navbar;