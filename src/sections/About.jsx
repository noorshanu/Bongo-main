import Title from "components/Title";

function About() {
  return (
    <section className=" relative">
      <div>
        <img src="images/bg-rain.png" alt="" className=" absolute -top-[25%] -z-1" />
      </div>
      <div className="container-wrapper text-center block relative z-10">
        <div>
          <Title className="lh-1_5 mb-3 uppercase">WHAT IS BONGO CAT?</Title>

          <p className="font-daughter text-xl font-medium ">
            Meet Bongo Cat: the next meme sensation in the wild world of crypto.
            Think you've seen it all with Shiba, Baby Doge, and our dear froggy
            friend Pepe? Think again. Here comes a feline with rhythm, ambition,
            and a dream to join the meme coin hall of fame. Why should dogs and
            frogs have all the fun? Introducing Bongo Cat ($BONGO) – a token
            that's purring its way to the top of the meme food chain. Missed the
            Doge train? Froze before grabbing some Pepe? Don't let history
            repeat itself. Jump onto the $BONGO bandwagon and let’s make crypto
            history... or at least some really good memes.
          </p>
        </div>

        <div className=" mx-auto text-center my-10">
          <img src="images/about-img.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
