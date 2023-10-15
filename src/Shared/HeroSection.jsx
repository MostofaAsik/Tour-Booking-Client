import SubTitle from "./SubTitle";
import worldimage from '../assets/images/world.png'
import hero1 from '../assets/images/hero-img01.jpg'
import hero2 from '../assets/images/hero-img02.jpg'


const HeroSection = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row md:w-full px-6 mt-2">
            <div className="md:w-1/2 ">
                <div className="flex gap-1">
                    <SubTitle SubTitle={'Know Before You Go'} />
                    <img src={worldimage} alt="world image" className="w-10" />
                </div>
                <h1 className="text-3xl md:text-4xl">Traveling opens the door <br />to creating <span className="text-orange-500">memories </span>
                </h1>
                <p className="mt-4 text-justify  px-3">
                    Traveling is a transformative experience. It broadens our horizons, exposes us to new cultures, and creates lasting memories. It&apos;s a journey of self-discovery and personal growth. Travel is not just a luxury; it&apos;s an investment in ourselves. It&apos;s a passport to personal growth, learning, and understanding. So, embrace the opportunities to explore, and may your journeys be filled with adventure and enlightenment.
                </p>
            </div>
            <div className="md:w-1/2 px-2 mb-2 md:mb-0 ">
                <div className="flex overflow-hidden w-full gap-1 relative">
                    <img className="w-1/2 md:w-full  h-[350px] rounded-md " src={hero1} alt="" />
                    <img className="w-1/2 md:w-full h-[350px] rounded-md mt-12 " src={hero2} alt="" />

                </div>
            </div>
        </div>
    );
};

export default HeroSection;