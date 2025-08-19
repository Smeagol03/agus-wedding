import { useMediaQuery } from "react-responsive";
import CircularGallery from "../reactbits/CircularGallery/CircularGallery";

const Gallery = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <section
      id="gallery"
      className="py-5 bg-gradient-to-t from-gray-50 to-stone-100"
    >
      <div className="container mx-auto px-4">
        {/* taruh gallery disini */}
        <div className="h-[400px] md:h-[500px] lg:h-[600px] relative">
          <CircularGallery
            bend={isDesktop ? 1 : 0}
            textColor="#ffffff"
            borderRadius={0.05}
          />
        </div>
        <div className="text-center mt-12">
          <a href="#countdown">
            <button className="text-black text-sm md:text-lg md:font-bold border-2 border-black px-4 py-1 md:px-8 md:py-3 rounded-full hover:text-black font-utama transition-colors duration-300 transform hover:scale-110">
              Menuju Acara
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
