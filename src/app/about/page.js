import Image from "next/image";
import img2 from "/public/Group 19.svg";
import img5 from "/public/Instagram (2).svg";
import img6 from "/public/Behance.svg";
import img7 from "/public/discord-logo-discord-icon-transparent-free-png 1.svg";
import Link from 'next/link';

function About(){
    return(
        <main>
               <div className="flex flex-row items-center justify-center bg-[#fffff] border-b-1 shadow-md hover:shadow-lg shadow-slate-300 w-full md:flex justify-between">
                 <div className="flex items-center justify-center">
                    <Image src={img2} alt="logo" className="flex flex-col items-center justify-center w-72 ml-24 sm:flex items-center justify-center w-80" />
                 </div>

                <div className="flex flex-row items-center justify-between space-x-10 font-bold mr-28">
                    <Link href="/"><button>Home</button></Link>
                    <Link href="/"><button>FAQ</button></Link>
                    <Link href="/about"><button>About</button></Link>
                </div>

                    <div className="flex items-center space-x-3 mr-16 font-bold">
                    <Link href='/login'><button className="bg-[#FFFFFF] rounded-full px-6 py-1 hidden md:block">Login</button></Link>
                        <Link href='/register'><button className="bg-[#000000] text-[#ffff] rounded-full px-6 py-1 hidden md:block">Sign up</button></Link>
                    </div>
                </div>



                <div className="flex flex-col items-center justify-center text-center">
                    <div className="font-bold text-4xl p-4">About Us</div>
                    <div className="font-semibold">Google Developer Student Clubs are university-based community groups for <br/> students interested in Google developer technologies. Students from all <br/> undergraduate or graduate programs with an interest in growing as a developer <br/> are welcome.</div>
                </div>
                <div className="text-center font-bold text-4xl p-4">
                    Teams
                </div>
                <div className="flex flex-col justify-center items-center font-semibold">
                <div className="flex flex-row items-center justify-between space-x-16">
                    <div>Achraf abdelouadoud Nessighaoui</div>
                    <div>Zakaria Abd Eldjalil Hadef</div>
                    <div>Abdelmalek Med Seghir</div>
                  </div>

                  <div className="flex flex-row items-center justify-between space-x-16">
                    <div>Aya Lounis</div>
                    <div>Amina Bennamor</div>
                  </div> 
                </div>              

                <div className="flex flex-col justify-center items-center p-24">
                    <div className="text-center font-bold text-2xl">Follow Us</div>

                    <div className="flex flex-row">
                    <div>
                        <div><Image src={img5} alt="logo" className="w-10"/><div/>
                    </div>

                    <div>
                        <div><Image src={img5} alt="logo" className="w-10"/><div/>
                    </div>

                    <div>
                        <div><Image src={img5} alt="logo" className="w-10"/><div/>
                    </div>
                </div>
                </div>
                </div>
                </div>
                </div>
        </main>
    );
}

export default About;