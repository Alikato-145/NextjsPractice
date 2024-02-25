export default function Home() {
  return (
    <main className=" justify-center items-center mt-2 ">
      <video
        src={require("../app/bg_video.mp4")}
        autoPlay
        muted
        loop
        className=" fixed right-0 bottom-0 top-0  w-full h-full object-cover blur-sm "
      />
      <div className=" flex flex-col relative items-center justify-center ">
        <div
          id="Card"
          className=" flex mt-5 flex-col justify-center bg-opacity-80 bg-sky-300  w-11/12 h-[95vh] rounded-2xl"
        >
          <div id="spotify">
            <div className="inline-block">
              <iframe
                className=" flex rounded-xl ml-auto mr-auto mt-0"
                src="https://open.spotify.com/embed/track/0EcQcdcbQeVJn9fknj44Be?utm_source=generato"
                width="93%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
      
              <div className=" text-pink-500 font-bold  text-3xl mt-2">
                I like me better<br></br> when I'm with you
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
              <div className=" text-pink-500 font-bold  text-1xl mt-2">
                When you're weak, I want you to know that I always support you
                kub 
              </div>
            </div>
          </div>
        </div>
        <div id="Card" className=" flex mt-6 bg-slate-100 w-5/6 h-[70vh] ">
          asdsad
        </div>
      </div>
    </main>
  );
}
