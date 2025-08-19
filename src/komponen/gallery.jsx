import Stack from "../reactbits/Stack/Stack";

const Gallery = () => {
  const images = [
    { id: 1, img: "/agus/1.jpg" },
    { id: 2, img: "/agus/2.jpg" },
    { id: 3, img: "/agus/3.jpg" },
    { id: 4, img: "/agus/4.jpg" },
    { id: 5, img: "/agus/5.jpg" },
    { id: 6, img: "/agus/6.jpg" },
    { id: 7, img: "/agus/7.jpg" },
    { id: 8, img: "/agus/8.jpg" },
  ];

  return (
    <section
      id="gallery"
      className="py-44 bg-gradient-to-t from-gray-50 to-stone-100 overflow-hidden"
    >
      <div className="container flex flex-col items-center justify-center px-4">
        {/* taruh gallery disini */}
        <Stack
          randomRotation={true}
          sensitivity={180}
          sendToBackOnClick={false}
          cardDimensions={{ width: 500, height: 500 }}
          cardsData={images}
        />
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
