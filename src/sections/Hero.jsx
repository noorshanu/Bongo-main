function Hero() {
  return (
    <section className="relative z-10 overflow-hidden">
      <img
        src="/images/house.png"
        className="absolute top-0 left-0 w-full h-full object-cover object-top -z-10"
        alt=""
      />

      <div className="container-wrapper lg:h-screen flex flex-col items-center justify-center pt-6 pb-12 lg:pt-0 lg:pb-0 lg:drop-shadow-[0_0_10rem_white]">
        <img
          src="/images/hero-img.png"
          className="w-full lg:w-[70%] lg:h-[70%] object-contain"
          alt=""
        />
          <div className="   flex flex-col sm:flex-row justify-center gap-6">
            <div>
            <img
              src="/images/btn-pink.png"
              className="w-[300px]"
              alt=""
            />
            </div>
            <div>
            <img
              src="/images/btn-pink.png"
              className="w-[300px]"
              alt=""
            />
            </div>
           
          
          </div>
      </div>
  
      {/* <img
        src="/images/pink-wave.svg"
        className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 w-full scale-x-[1.1]"
        alt=""
      /> */}
    </section>
  );
}

export default Hero;
