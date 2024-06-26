import Title from "components/Title";

function About() {
  return (
    <section className=" relative">
      <div>
        <img src="images/bg-rain.png" alt="" className=" absolute -top-[25%] -z-1" />
      </div>
      <div className="container-wrapper text-center block relative z-10">
        <div>
          <Title className="lh-1_5 mb-3 uppercase" data-aos="fade-up"
     data-aos-offset="300" data-aos-duration="1500" 
     data-aos-easing="ease-in-sine">WHAT IS BONGO CAT?</Title>

          <p className="font-daughter text-base sm:text-xl font-medium " data-aos="fade-up"
     data-aos-offset="300" data-aos-duration="1500" 
     data-aos-easing="ease-in-sine">
           Meet Bongo Cat: the next meme sensation in the wild world of crypto. Think you've seen it all with Wif, Myro, and our dear froggy friend Pepe? Think again. Here comes a feline with rhythm, ambition, and a dream to join the meme coin hall of fame. Why should dogs and frogs have all the fun? Introducing Bongo Cat ($BONGO) – a token that's purring its way to the top of the meme food chain. Missed the $Wif train? Froze before grabbing some Pepe? Don't let history repeat itself. Jump onto the $BONGO bandwagon and let’s make crypto history... or at least some really good memes.
          </p>
        </div>

        <div className=" mx-auto text-center my-10 relative z-10">
          {/* <img src="images/about-img.png" alt=""  data-aos="fade-up"
     data-aos-offset="300" data-aos-duration="1500" 
     data-aos-easing="ease-in-sine"/> */}
     <div className=" rounded-sm relative mx-auto flex justify-center gap-10 items-center">
      <img src="images/star2.png" alt=""  className=" h-[150px] floating hidden sm:block"/>
     <video
        autoPlay
        loop
        muted
        playsInline // Add playsInline for iOS Safari
        className="  object-cover rounded-md border-2 sm:h-[400px]"
      >
        {/* Provide multiple video formats */}
        <source src="images/bg-main.mp4" type="video/mp4" />
        <source src="videos/bg-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <img src="images/star2.png" alt=""  className=" h-[150px] floating hidden sm:block"/>
     </div>
        </div>
          {/* <img src="images/sky.png" alt="" className=" absolute -top-[90%] -right-[40%] -z-10 h-[900px] "  /> */}
      </div>
   
    </section>
  );
}

export default About;
