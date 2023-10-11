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
      </div>
    </section>
  );
}

export default Product;
