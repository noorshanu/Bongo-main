import Title from "components/Title";

const Grid = ({ direction = "left" }) => {
  return (
    <div
      className={`absolute top-0 w-1/2 h-full -z-20 pointer-events-none select-none ${
        direction === "right" ? "right-0" : "left-0"
      }`}
    >
      <div
        className={`absolute top-0 ${
          direction === "right" ? "right-[-2px]" : "left-[-2px]"
        } w-full h-full opacity-50 z-10`}
        style={{
          backgroundImage:
            "linear-gradient(white 2px, transparent 2px),linear-gradient(90deg, white 2px, transparent 2px)",
          backgroundSize: "3rem 3rem",
        }}
      ></div>

      <div
        className={`absolute z-20 w-full h-full top-0 left-0 from-transparent to-primary ${
          direction === "right" ? "bg-gradient-to-l" : "bg-gradient-to-r"
        }`}
      ></div>
    </div>
  );
};

function Roadmap() {
  return (
    <section className="relative z-10 ">
      <img
        src="images/purple.png"
        alt=""
        className=" absolute -top-[50%] right-0 -z-10 h-[600px] hidden sm:block"
      />

      <div className="container-wrapper mb-14">
        <Title className="text-center mb-10 pt-8">OUR ROAD MAP</Title>

        {/* <img src="/images/roadmap.png" className="w-full" alt="" /> */}

        <div className="flex justify-between flex-col sm:flex-row gap-5">
          <div className="bg-[#e9ecfa] py-5 px-5  rounded-md w-[100%] h-full">
            <div>
            <h1 className="font-dream text-black text-center  text-lg mb-1">Phase 1</h1>
              <h1 className="font-dream text-black  text-lg mb-2">
                The Bongo Beat Begins
              </h1>
            </div>
            <p className=" text-base font-popins font-normal lh-1_7">• Drum up the Bongo Cat concept.</p>
            <p  className=" text-base font-popins font-normal lh-1_7">• Compose the  symphony.</p>
            <p  className=" text-base font-popins font-normal lh-1_7">• Design purr-fect website & branding.</p>
            <p  className=" text-base font-popins font-normal lh-1_7">• Mint the $BONGO token.</p>
   
          </div>

          <div className="bg-[#ffeeb9] py-5 px-5  rounded-md w-[100%] h-full">
          <div>
            <h1 className="font-dream text-black text-center  text-lg mb-1">Phase 2</h1>
              <h1 className="font-dream text-black  text-lg mb-2">
               The Bongo Band Assembles
              </h1>
            </div>
            <p className=" text-base font-popins font-normal lh-1_7">• Gather our cat community.</p>
        
            <p  className=" text-base font-popins font-normal lh-1_7">• Amplify the Bongo beat with massive marketing.</p>
            <p  className=" text-base font-popins font-normal lh-1_7">• Debut on Raydium.</p>
            <p  className=" text-base font-popins font-normal lh-1_7">• Unveil the Bongo Cat Music Platform.</p>

          </div>
          <div className="bg-[#fbcbe6] py-5 px-5  rounded-md w-[100%] h-full">
          <div>
          <h1 className="font-dream text-black text-center  text-lg mb-1">Phase 3</h1>
              <h1 className="font-dream text-black text-center text-lg mb-2">
              Bongo's Worldwide Tour
              </h1>
            </div>
            <p className=" text-base font-popins font-normal lh-1_7">• Secure our first CEX gig.</p>
            <p  className=" text-base font-popins font-normal lh-1_7">• Boost the beats to attract more fans.</p>
            <p  className=" text-base font-popins font-normal lh-1_7">• Design purr-fect website & branding.</p>
            <p  className=" text-base font-popins font-normal lh-1_7">• Open Bongo Staking & Farming stage.</p>
            <p  className=" text-base font-popins font-normal lh-1_7">• Share ad revenue—because every cat loves treats!</p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
