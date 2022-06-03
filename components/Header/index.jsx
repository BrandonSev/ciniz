import Image from "next/image";
import React, { useRef } from "react";
import { AiFillFire, AiFillPlayCircle } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
function Header({ movies }) {
  const progressBar = useRef();

  const move = () => {
    const width = 1;
    const autoPlayTime = 15000 / 100;
    const it = setInterval(() => {
      if (width >= 100) {
        clearInterval(it);
      } else {
        width++;
        progressBar.current.style.width = width + "%";
      }
    }, autoPlayTime);
  };

  return (
    <header className="relative min-h-[70vh]">
      <Swiper
        slidesPerView={1}
        modules={[EffectFade, Autoplay]}
        effect={"fade"}
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        noSwiping={false}
        allowTouchMove={false}
        onProgress={move}
      >
        {movies?.results?.map((movie) => (
          <SwiperSlide key={movie.id} className="absolute min-h-[75vh] w-full">
            <div className="absolute top-0 left-0 h-[75vh] min-w-full">
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                layout="fill"
                objectFit="cover"
                alt=""
                style={{
                  WebkitMaskImage: `linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)`,
                }}
              />
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 right-0">
              <div className="container mx-auto w-full">
                <div className="flex flex-col gap-8 max-w-sm">
                  <div>
                    <h2 className="text-3xl lg:text-5xl text-yellow-500 uppercase text-shadow">
                      {movie?.title || movie?.original_title}
                    </h2>
                    <p className="flex items-center gap-1 mt-2">
                      <AiFillFire
                        size={25}
                        color="#e25822"
                        stroke="yellow"
                        strokeWidth={55}
                      />
                      Tendances de la semaine
                    </p>
                  </div>
                  <p className="max-h-[9rem] overflow-hidden overflow-ellipsis">
                    {movie?.overview}
                  </p>
                  <div className="flex items-center gap-1 bg-orange-500 hover:bg-orange-500/70 max-w-fit py-2 px-3 rounded-md cursor-pointer hover:scale-105 transition">
                    <AiFillPlayCircle size={35} /> Play
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto">
            <div className="w-1/3 mx-auto h-1 relative bg-orange-500/50">
              <span
                ref={progressBar}
                className="block absolute top-0 bottom-0 left-0 transition bg-orange-500 h-1"
              ></span>
            </div>
          </div>
        </div>
      </Swiper>
    </header>
  );
}

export default Header;
