import Image from "next/image";
import img2 from '/public/Group 19.svg';
import Link from 'next/link';

function Dash(){
    return(
        <main>
             <div className="flex flex-row items-center justify-center bg-[#fffff] border-b-1 shadow-md hover:shadow-lg shadow-slate-300 w-full md:flex justify-between">
                 <div className="flex items-center justify-center">
                    <Image src={img2} alt="logo" className="flex flex-col items-center justify-center mr-10 pt-1 w-72 ml-24 sm:flex items-center justify-center w-80" />
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
    );
}
export default Dash;