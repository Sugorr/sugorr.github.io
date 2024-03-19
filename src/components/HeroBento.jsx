import { IoGameController } from "react-icons/io5";

export default function HeroBento (){
    return (
        <div className="flex justify-center items-center">
            <div className="group grid grid-rows-2 grid-cols-3 gap-5 py-32 px-64 mb-32 max-w-[1920px] max-h-[1080px] items-center h-full w-full relative">
                <div className="h-full w-full rounded-2xl py-20 px-10 bg-default-black col-span-2 bg-gradient-to-br from-default-orange/25 to-transparent">
                    <p className="font-bold text-4xl py-4">Game developers</p>
                    <p className=" font-normal text-xl py-2 w-1/2">Game developers craft worlds of fantasy, while web developers weave the fabric of our digital reality.</p>
                </div>
                <div className="h-full w-full rounded-xl py-20 px-10 bg-default-black col-span-1 bg-gradient-to-bl from-default-blue/25 to-transparent">
                    <p className="font-bold text-4xl py-4">Web developers</p>
                    <p className=" font-normal text-xl py-2">Game developers craft worlds of fantasy, while web developers weave the fabric of our digital reality.</p>
                </div>


                <div className="flex flex-col justify-evenly h-full w-full rounded-xl p-12 bg-default-black">
                    <IoGameController fontSize={"45px"}/>
                    <p className=" font-normal text-xl my-8">Game developers craft worlds of fantasy, while web developers weave the fabric of our digital reality.</p>
                    <button className="transition-all duration-200  font-normal text-lg w-1/2 outline outline-1 outline-default-orange hover:bg-default-orange hover:text-default-white rounded-lg py-2 my-8">See Works</button>
                </div>
                <div className="flex flex-col justify-evenly items-start h-full w-full rounded-xl p-12 bg-default-black">
                    <IoGameController fontSize={"45px"}/>
                    <p className=" font-normal text-xl my-8">Designing Dreams, Coding Realities, Painting Pixels</p>
                    <button className="transition-all duration-200  font-normal text-lg w-1/2 outline outline-1 outline-default-orange hover:bg-default-orange hover:text-default-white rounded-lg py-2 my-8">See Works</button>
                </div>
                <div className="flex flex-col justify-evenly h-full w-full rounded-xl p-12 bg-default-black">
                    <IoGameController fontSize={"45px"}/>
                    <p className=" font-normal text-xl my-8">Imagination Meets Innovation in the Digital Realm.</p>
                    <button className="transition-all duration-200  font-normal text-lg w-1/2 outline outline-1 outline-default-orange hover:bg-default-orange hover:text-default-white rounded-lg py-2 my-8">See Works</button>
                </div>
                <>
                    <div className='rounded-full -z-10 h-[640px] w-[640px] blur-max absolute top-96 left-[50vw] bg-default-orange/20'></div>
                    <div className='rounded-full -z-10 h-[640px] w-[640px] blur-max absolute top-64 left-[20vw] bg-default-blue/20'></div>
                </>

            </div>
        </div>
        
    );
}