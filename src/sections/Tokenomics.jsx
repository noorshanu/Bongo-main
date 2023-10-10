import Title from "components/Title";

function Tokenomics() {
  return (
    <section className="container-wrapper bg-secondary rounded-2xl py-10 sm:py-14 px-4 sm:px-10">
      <Title className="text-primary mb-10 text-center">Tokenomics</Title>

      <div className="grid sm:grid-cols-2 gap-10 items-center">
        <img src="/images/tokenomics-left.png" className="w-full" alt="" />
        <img src="/images/tokenomics-right.png" className="w-full" alt="" />
      </div>
    </section>
  );
}

export default Tokenomics;
