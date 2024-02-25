
export default function Home() {
  return (
    <main className=" flex-1 justify-center items-center mt-2">
      <video
        src={require("../app/bg_video.mp4")}
        autoPlay
        muted
        loop
        className=" fixed right-0 bottom-0 top-0  w-full h-full object-cover blur-sm "
      />
      <div className=" flex flex-col relative items-center justify-center xs:mt-10 sm:mt-2">
        <div
          id="Card"
          className=" flex flex-1 mt-5 flex-col justify-center bg-opacity-80 bg-sky-300  sm:w-2/6 xs:w-11/12 xs:h-[95vh] rounded-2xl"
        >
          <div id="spotify">
            <div className="inline-block">
              <iframe
                className=" flex rounded-xl ml-auto mr-auto mt-0 sm:w-[100%]"
                src="https://open.spotify.com/embed/track/0EcQcdcbQeVJn9fknj44Be?utm_source=generato"
                width="93%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
      
              <div className=" text-pink-500 font-bold  text-3xl mt-2 text-center">
                I like me better<br></br> when I&apos;m with you&#9829;
              </div>
              <div className=" justify-center flex mt-2">
              <video
                className="w-2/3 h-2/3"
                src={require("../app/main_video.mp4")}
                autoPlay
                muted
                loop
              />
              </div>
              <div className=" text-pink-500 font-bold  text-1xl mt-2 p-3 text-center">
                When you&apos;re weak, I want you to know that <br></br>I always support you
                kub &#9829;
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
