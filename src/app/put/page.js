import Image from "next/image";
import img2 from '/public/14fa588180435416490e55f4a3bc10be 1.svg';
import img3 from '/public/Rectangle 10.svg';



function Put(){
    return(
        <main>
             <div className="flex flex-row justify-between bg-[#40B59F]">
             <div>
                <Image src={img2} alt="logo" />
             </div>
                 <div className="flex items-center space-x-3 mr-16 font-bold">
            <button className="bg-[#FFFFFF] rounded-full px-6 py-1 ">Login</button>
            <button className="bg-[#000000] text-[#ffff] rounded-full px-6 py-1">Sign up</button>
             </div>
             </div>


             <div className="flex flex-row justify-center items-center text-center space-x-20 p-10 bg-[#F3F2F2]">
                    <div className="flex flex-col">
                        <div className="font-bold pb-2 text-xl">Input</div>
                        <Image src={img3} alt="logo" className="w-96"/>
                        <button className="bg-[#40B59F] text-[#ffff] py-2 rounded-full mt-5 font-bold">Upload</button>
                    </div>

                    <div className="flex flex-col">
                        <div className="font-bold pb-2 text-xl">Output</div>
                        <Image src={img3} alt="logo" className="w-96" />
                        <button className="bg-[#40B59F] text-[#ffff] py-2 rounded-full mt-5 font-bold">Status</button>
                    </div>
             </div>

        </main>
    );
}


export default Put;