import React from "react";

const Header = () => {
  return (
    <div className=" h-[90vh] bg-[url(https://ik.imagekit.io/jjyo3gsee/FreeWellTech/HomePage/pexels-bradleyhook-123335.jpg?updatedAt=1744984537332)] bg-cover bg-center bg-no-repeat xl:px-[5%] px-[2%] relative -z-10">
      <div className="bg flex items-center justify-start w-full h-full z-50">
        <div className=" flex flex-col gap-6 z-20">
          <h1 className="font-bold text-xl text-white border-l-4 pl-2 border-secondary ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <h1 className="text-[42px] font-bold text-white">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className=" font-medium text-lg lg:w-[50%] text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            voluptatum consequuntur odio ducimus nemo eligendi mollitia
            necessitatibus, suscipit odit vero, esse cum maiores praesentium,
            natus ipsam ab enim et voluptate.
          </p>
          <div className=" mt-5">
            <button className=" bg-primary px-8 py-3 rounded-lg text-white hover:border-primary hover:bg-secondary z-50">
              Contact
            </button>
          </div>
        </div>
      </div>

      <img
        src="https://ik.imagekit.io/jjyo3gsee/FreeWellTech/HomePage/slider-shape-2.png"
        alt="slider"
        height={200}
        width={700}
        className=" absolute -top-5 right-0 overflow-hidden"
      />
      <img
        src="https://ik.imagekit.io/jjyo3gsee/FreeWellTech/HomePage/slider-shape-1.png?"
        alt="slider"
        className=" absolute top-10 right-[500px] "
      />
    </div>
  );
};

export default Header;
