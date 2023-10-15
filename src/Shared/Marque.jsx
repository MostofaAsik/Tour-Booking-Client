import Marquee from "react-fast-marquee";


const Marque = () => {
    return (
        <div className="px-6 mt-2">
            <Marquee pauseOnHover='true' className="rounded-lg">
                <h1 className="bg-orange-500 p-2 text-2xl">Traveling opens the door
                    to creating memories</h1>
                <h2 className="bg-orange-500 p-2 text-2xl">
                    Traveling is a transformative experience. It broadens our horizons, exposes us to new cultures, and creates lasting memories. It&apos;s a journey of self-discovery and personal growth. Travel is not just a luxury; it&apos;s an investment in ourselves. It&apos;s a passport to personal growth, learning, and understanding. So, embrace the opportunities to explore, and may your journeys be filled with adventure and enlightenment.
                </h2>
            </Marquee>
        </div>
    );
};

export default Marque;