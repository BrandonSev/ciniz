import React, { useEffect, useRef, useState } from "react";

function MovieCard({ movie, className }) {
  const [percent, setPercent] = useState();
  const progressBar = useRef();
  const valuePercent = useRef();
  useEffect(() => {
    const progressValue = 0;
    if (movie?.vote_average) {
      const i = window.setInterval(function () {
        progressValue++;
        setPercent(progressValue);
        progressBar.current.style.background = `conic-gradient(rgb(249 115 22 / 1) ${
          progressValue * 3.6
        }deg, rgb(249 115 22 / .5) 0deg)`;
        if (progressValue === movie?.vote_average * 10) {
          clearInterval(i);
        }
      }, 10);
    }
  }, [movie]);

  return (
    <div className={`${className} transition-transform cursor-pointer`}>
      <div className="absolute left-0 right-0 z-20 bottom-4">
        <span className="p-2 bg-orange-500/75">ACTION</span>
        <div className="p-4">
          <h3
            className="text-lg uppercase font-bold overflow-hidden overflow-ellipsis text-orange-500 text-shadow"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
            }}
          >
            {movie?.title}
          </h3>
          <p
            className="overflow-ellipsis overflow-hidden lg:max-w-sm"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {movie?.overview}
          </p>
          <div className="flex items-center justify-between mt-4 min-w-full">
            <div className="flex items-center">
              Note:
              <div
                className="relative grid ml-2 place-items-center h-10 w-10 bg-orange-500 rounded-full before:content-[''] before:absolute before:h-[75%] before:w-[75%] before:rounded-full before:bg-white"
                ref={progressBar}
              >
                <div
                  className="relative text-xs font-bold text-black"
                  ref={valuePercent}
                >
                  {percent}
                </div>
              </div>
            </div>
            <button className="bg-orange-500 py-1 px-2 rounded-sm">
              En savoir plus
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .overlay::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: center / cover no-repeat
            url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path});
          mask-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0) 100%
          );
        }
      `}</style>
    </div>
  );
}

export default MovieCard;
