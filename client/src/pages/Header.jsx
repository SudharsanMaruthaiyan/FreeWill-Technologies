import React from "react";

const Header = () => {
  return (
    <div className=" h-[80vh] bg-secondary bg-opacity-30 xl:px-[5%] px-[2%]">
        <div className="flex items-center justify-start w-full h-full">
            <div className=" flex flex-col gap-6">
                <h1 className="font-bold text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <h1 className="text-[42px] font-bold">Lorem ipsum dolor sit amet.</h1>
                <p className=" font-medium text-lg lg:w-[50%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam voluptatum consequuntur odio ducimus nemo eligendi mollitia necessitatibus, suscipit odit vero, esse cum maiores praesentium, natus ipsam ab enim et voluptate.</p>
                <div className=" mt-5">
                    <button className=" bg-primary px-8 py-3 rounded-lg text-white">Contact</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Header;
