function Hero() {
  return (
    <section className="relative z-10 overflow-hidden">
      <img
        src="/images/house.png"
        className="absolute top-0 left-0 w-full h-full object-fill object-center -z-10"
        alt=""
      />

      <div className="container-wrapper lg:h-screen flex flex-col items-center justify-center pt-6 pb-12 lg:pt-0 lg:pb-0 lg:drop-shadow-[0_0_10rem_white]">
        <img src="images/cloud1.png" alt="" className="x1 absolute top-[5%] sm:top-[20%] left-0 w-auto h-[50px] sm:h-[160px]  " />
        <img src="images/star.png" alt="" className="floating  absolute top-[46%] left-[10%] w-auto h-[120px] hidden sm:block" />
        <img src="images/star.png" alt="" className="floating  absolute top-[46%] right-[10%] w-auto h-[120px] hidden sm:block" />
        <img src="images/cloud2.png" alt="" className="x2 absolute w-auto h-[170px] hidden sm:block" />
        <img src="images/cloud2.png" alt="" className="x4 absolute w-auto h-[150px] hidden sm:block" />
        <img src="images/cloud1.png" alt="" className="x3 absolute top-[5%] sm:top-[20%] left-0 w-auto h-[50px] sm:h-[170px]  " />
        <img
          src="/images/hero-img.png"
          className="w-full lg:w-[55%] lg:h-[60%] object-contain"
          data-aos="fade-up"
     data-aos-offset="300" data-aos-duration="1000" 
     data-aos-easing="ease-in-sine"
          alt=""
        />
        <div className="   flex  justify-center gap-6 mt-7 sm:mt-2">
          <div className=" relative">
            <img
              src="/images/btn-pink.png"
              className= "w-[120px] sm:w-[220px] h-auto mx-auto sm:mx-0"
              alt=""
              
            />
            <h1 className=" absolute top-[30%] sm:top-[32%] left-[23%] sm:left-[30%] -right[50%] font-bold text-sm sm:text-xl">
              Buy Now
            </h1>
          </div>
          <div className="flex items-center gap-5 justify-center lg:justify-end">
             <a href="/">
              <img src="TELEGRAM.png" alt="" className="w-auto h-[55px]" />
             </a>
         
             <a href="/">
              <img src="X.png" alt="" className="w-auto h-[55px]" />
             </a>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
