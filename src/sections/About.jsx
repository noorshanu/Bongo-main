import Title from "components/Title";

function About() {
  return (
    <section className="container-wrapper grid lg:grid-cols-2 gap-10">
      <div>
        <img src="/images/about.png" className="w-full" alt="" />
      </div>

      <div>
        <Title className="lh-1_5 mb-3">
          WHAT IS <br />
          BARBIE{" "}
          <img
            src="/images/heart-pink.png"
            className="h-[1.2em] inline-block align-middle"
            alt=""
          />{" "}
          PEPE? 
        </Title>

        <p className="font-daughter text-xl font-medium ">
          Lets dive into the most exhilarating tale ever: BarbieLovePepe's ($PEPIE)
          whirlwind journey!  This ain't your regular story; it got meme
          adventures, a splash of sarcasm, a pinch of love, and you guessed it –
          a cryptocurrency twist!  A memetic love story between those iconic
          pink and green hearts!  BarbieLovePepe? Oh honey, she's armed with
          memes that could practically work magic and a charm that's so
          irresistible, it's like setting the whole Memeworld ablaze! 
        </p>
      </div>
    </section>
  );
}

export default About;
