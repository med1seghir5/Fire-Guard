import Image from "next/image";
import img2 from '/public/Group 19.svg';
import img3 from '/public/Rectangle 10.svg';
import Link from 'next/link';


function Put(){
    return(
        <main className="flex flex-col justify-center items-center">
            <div className="flex flex-row items-center justify-center bg-[#fffff] border-b-1 shadow-md hover:shadow-lg shadow-slate-300 w-full md:flex justify-between">
                 <div className="flex items-center justify-center">
                    <Link href="/"><Image src={img2} alt="logo" className="flex flex-col items-center justify-center w-72 ml-24 sm:flex items-center justify-center w-80" /></Link>
                 </div>

                <div className="flex-row items-center justify-between space-x-10 mr-20 font-bold max-sm:hidden md:block">
                    <Link href="/"><button>Home</button></Link>
                    <Link href="/"><button>FAQ</button></Link>
                    <Link href="/about"><button>About</button></Link>
                </div>
                    
                    <div className="flex items-center space-x-3 mr-16 font-bold">
                    <Link href='/login'><button className="bg-[#FFFFFF] rounded-full border-2 border-black px-6 py-1 hidden md:block">Login</button></Link>
                        <Link href='/register'><button className="bg-[#000000] text-[#ffff] rounded-full px-6 py-1 hidden md:block">Try For Free</button></Link>
                    </div>
                    </div>

                    <div className="text-center font-bold p-5">
                        Input
                        <Image src={img3} alt="logo" className="w-96"/>
                        <label><input type="file" /></label>
                        <button className="bg-[#40B59F] text-[#ffff] py-3 px-3 rounded-full mt-5 font-bold">Upload</button>
                    </div>


                    <div className="text-center font-bold p-10">
                        Output
                        <Image src={img3} alt="logo" className="w-96"/>
                        <button className="bg-[#40B59F] text-[#ffff] py-3 px-10 rounded-full mt-5 font-bold">Status</button>
                    </div>





                    

        </main>
    );
}


export default Put;