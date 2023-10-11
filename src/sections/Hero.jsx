function Hero() {
  return (
    <section className="relative z-10 overflow-hidden">
      <img
        src="/images/house.png"
        className="absolute top-0 left-0 w-full h-full object-fill object-center -z-10"
        alt=""
      />

      <div className="container-wrapper lg:h-screen flex flex-col items-center justify-center pt-6 pb-12 lg:pt-0 lg:pb-0 lg:drop-shadow-[0_0_10rem_white]">
        <img src="images/cloud1.png" alt="" className="x1 absolute top-[5%] sm:top-[20%] left-0 w-auto h-[50px] sm:h-[120px] z-50" />
        <img src="images/star.png" alt="" className=" absolute top-[46%] left-[10%] w-auto h-[120px] hidden sm:block" />
        <img src="images/cloud2.png" alt="" className=" absolute top-[40%] right-0 w-auto h-[120px] hidden sm:block" />
        <img
          src="/images/hero-img.png"
          className="w-full lg:w-[55%] lg:h-[60%] object-contain"
          alt=""
        />
        <div className="   flex flex-col sm:flex-row justify-center gap-6">
          <div className=" relative">
            <img
              src="/images/btn-pink.png"
              className= "w-[150px] sm:w-[220px] h-auto mx-auto sm:mx-0"
              alt=""
            />
            <h1 className=" absolute top-[32%] left-[26%] sm:left-[30%] -right[50%] font-bold text-base sm:text-xl">
              PINKSALE
            </h1>
          </div>
          <div className="relative">
            <img
              src="/images/btn-sky.png"
              className=" w-[150px] sm:w-[220px] h-auto mx-auto sm:mx-0"
              alt=""
            />
            <h1 className=" absolute top-[32%] left-[13%] sm:left-[22%] -right[50%] font-bold text-base sm:text-xl">
              COMMUNITY
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
