import Title from "components/Title";
import React from "react";

function Product() {
  return (
    <section>
      <div className="container-wrapper">
        <div className="text-center">
          <Title className="text-black">Bongo cat features</Title>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-3 my-12">
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
