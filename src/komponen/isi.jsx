import Pria from "/agus/pria.jpg";
import Wanita from "/agus/wanita.jpg";
import ShinyText from "../reactbits/ShinyText/ShinyText";
import Particles from "../reactbits/Particles/Particles";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Isi = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="isi"
      className="bg-gradient-to-b from-black via-slate-900 to-black text-white py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={400}
          particleSpread={10}
          speed={0.05}
          particleBaseSize={30}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="container mx-auto px-5 md:px-12 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2
            className="font-head font-bold text-2xl md:text-4xl mb-8"
            data-aos="fade-up"
          >
            Assalamu'alaikum Wr. Wb.
          </h2>
          <div data-aos="fade-up" data-aos-delay="400">
            <ShinyText
              text="Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
            menyelenggarakan acara pernikahan kami. Merupakan suatu kehormatan
            dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir
            untuk memberikan doa restu."
              disabled={false}
              speed={3}
              className="text-[11px] md:text-lg max-w-2xl mb-8 font-utama"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-20 md:gap-36 items-center text-center">
          <div
            className="flex flex-col items-center ml-0 md:ml-auto"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mb-6 border-4 border-yellow-600">
              <img
                src={Pria}
                alt="Groom"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 className="font-head text-2xl mb-2">Agus Putra</h3>
            <p className="text-gray-300 text-[11px] font-utama">
              Putra dari Bapak Satirah dan Ibu Saupiah
            </p>
            <p className="text-gray-300 text-[11px] font-utama">
              Alamat Karang Sari Kelurahan Suryawangi Kecamatan Labuhan Haji
            </p>
          </div>

          <div
            className="flex flex-col items-center mr-0 md:mr-auto"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mb-6 border-4 border-yellow-600">
              <img
                src={Wanita}
                alt="Bride"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 className="font-head text-2xl mb-2">Mardiana Rosita S.pd</h3>
            <p className="text-gray-300 text-[11px] font-utama">
              Putri dari Bapak Amri Rosadi dan Ibu Marni
            </p>
            <p className="text-gray-300 text-[11px] font-utama">
              Alamat Lingkok Dudu Kelurahan Suryawangi Kecamatan Labuhan Haji
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Isi;
