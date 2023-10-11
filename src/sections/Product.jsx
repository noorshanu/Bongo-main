import Title from "components/Title";
import React from "react";

function Product() {
  return (
    <section>
      <div className="container-wrapper">
        <div className="text-center">
          <Title className="text-black">Bongo cat features</Title>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-3 my-12 relative z-10">
          <div>
            <img src="images/cream.png" alt="" className=" -top-[120%] absolute -left-[40%] -z-10 w-auto h-[800px]" />
          </div>

          <img src="images/1.png" alt=""  className="h-[200px]" />
          <img src="images/2.png" alt="" className="h-[200px]" />
          <img src="images/3.png" alt=""  className="h-[200px]"/>
          <img src="images/4.png" alt=""  className="h-[200px]"/>
         
      </div>
      <div className="relative flex justify-center ml-0 sm:ml-14">
            <img
              src="/images/btn-green.png"
              className="w-[220px] h-auto"
              alt=""
            />
            <h1 className=" absolute top-[32%] left-[46%]  font-bold text-xl">BUY NOW</h1>
            </div>
      </div>
    </section>
  );
}

export default Product;
