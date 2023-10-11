import Title from "components/Title";

function Tokenomics() {
  return (
    <section className="container-wrapper bg-[#deedfe] rounded-2xl py-10 sm:py-14 px-4 sm:px-10 relative z-10">
      <Title className="text-black mb-10 text-center" data-aos="fade-up"
     data-aos-offset="300" data-aos-duration="1500" 
     data-aos-easing="ease-in-sine">Tokenomics</Title>

      <div className="grid sm:grid-cols-2 gap-10 items-center">
        <img src="/images/tokenomics-left.png" className="w-full" alt=""  data-aos="fade-right"
     data-aos-offset="300" data-aos-duration="1500" 
     data-aos-easing="ease-in-sine"/>
        <div className="" data-aos="fade-left"
     data-aos-offset="300" data-aos-duration="1500" 
     data-aos-easing="ease-in-sine">
          <div className="bg-[#dbffc6] my-5 py-5 px-3 rounded-md white-shadow text-center">
            <p>TEAM TOKENS = 0%</p>
            </div> 
            <div className="bg-[#e9cdff] my-5 py-5 px-3 rounded-md white-shadow text-center">
              <p className=" uppercase">Marketing tokens = 0%</p>
            </div>

            <div className="bg-[#ffcbdf] my-5 py-5 px-3 rounded-md white-shadow text-center">
              <p className=" uppercase">stealth Launch 100%</p>

            </div>

        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
