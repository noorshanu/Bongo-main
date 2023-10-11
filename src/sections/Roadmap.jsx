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
      <img src="images/purple.png" alt="" className=" absolute -top-[50%] right-0 -z-10 h-[600px]"  />
    

      <div className="container-wrapper mb-14">
        <Title className="text-center mb-10 pt-8">OUR ROAD MAP</Title>

        <img src="/images/roadmap.png" className="w-full" alt="" />

        <div className="flex justify-between flex-col sm:flex-row gap-5">
          <div className="bg-[#e9ecfa] py-5 px-5 text-center rounded-md w-[100%] h-[250px]">
            
            <div>
              <h1 className="font-dream text-black">Phase 1</h1>
              </div></div> 

              <div className="bg-[#ffeeb9] py-5 px-5 text-center rounded-md w-[100%] h-[250px]">
            
            <div>
              <h1 className="font-dream text-black">Phase 2</h1>
              </div></div> 
              <div className="bg-[#fbcbe6] py-5 px-5 text-center rounded-md w-[100%] h-[250px]">
            
            <div>
              <h1 className="font-dream text-black">Phase 3</h1>
              </div></div> 

        </div>
      </div>
    </section>
  );
}

export default Roadmap;
