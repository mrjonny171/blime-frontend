const Landing = () => {
  return (
    <div
      id="Overview"
      className="bg-white dark:bg-gray-900"
    >
      <div className="text-gray-800 grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className=" mr-auto lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-gray-200">
            Mastering the Art of Digital Trading & Gaming Experiences.
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl dark:text-gray-200 text-justify">
            Introducing our Counter-Strike: Global Offensive (CSGO) trading bot - your ultimate
            solution for effortless and profitable arbitrage trading. This tool simplifies the
            trading complexities, allowing you to maximize gains and enhance your gaming experience.
          </p>
        </div>
        <div className="ml-10 hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="./landing.png"
            width="350px"
            alt="Landing Page Robot"
          />
        </div>
      </div>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl pb-8 mx-auto lg:pb-16">
          <div className="flex gap-8 items-center justify-between">
            <a
              href="https://csgoempire.com/"
              target="_blank"
            >
              <img
                src="./csgoempire-logo.png"
                width="150px"
              />
            </a>
            <a
              href="https://buff.163.com/"
              target="_blank"
            >
              <img
                src="./buff-logo.png"
                width="300px"
              />
            </a>
            <a
              href="https://buff.market/"
              target="_blank"
            >
              <img
                src="./buff-market-logo.png"
                width="150px"
              />
            </a>
            <a
              href="https://waxpeer.com/"
              target="_blank"
            >
              <img
                src="./waxpeer-logo.png"
                width="150px"
              />
            </a>
            <a
              href="https://skinport.com/"
              target="_blank"
            >
              <img
                src="./skinport-logo.png"
                width="150px"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
