import Navbar from './Navbar'
import DiagonalImage from './DiagonalImage'

const Hero = () => {
  return (
    <main className="relative h-screen w-full h-[100dvh] overflow-hidden bg-[#232d3b] font-sans text-white">
      <DiagonalImage />

      <div className="relative z-20 h-full">
        <Navbar />

        <section className="absolute left-[6.5%] top-[19%] flex max-w-[390px] flex-col px-0">
          <h1 className="whitespace-nowrap font-serif text-[clamp(2rem,4.2vw,4rem)] font-bold leading-[1.2]">
            Discover your<br />next Hike
          </h1>

          <p className="mt-4 font-serif text-[clamp(0.75rem,1.4vw,1rem)] font-normal uppercase leading-[1.3] tracking-wide">
            Discover your<br />next hike
          </p>

          <p className="mt-6 font-serif text-[clamp(0.7rem,1.1vw,0.9rem)] font-bold leading-[1.35]">
            Lorem ipsum dolor sit amet,<br />consectetur<br />adipiscing elit, sed do.
          </p>

          <button
            type="button"
            className="mt-7 w-fit rounded-full bg-[#6dffa0] px-7 py-3 text-sm font-bold text-[#232d3b] transition-transform hover:scale-105"
          >
            Explore Now
          </button>
        </section>
      </div>

      {/* A soft overlay keeps the right-hand image readable against the navy palette. */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[76%] bg-[#232d3b]/10 md:block" />
    </main>
  )
}

export default Hero
