import { useEffect } from "react";

function Por() {
  useEffect(() => {
    window.location.href = "https://www.profitableratecpm.com/by95jjgt?key=2be2749143b06739e949ada5b604c1c4";
  }, []);
  // const handleClick = () => {
  //   // const img = new Image();
  //   // img.src = 'https://www.profitableratecpm.com/by95jjgt?key=2be2749143b06739e949ada5b604c1c4';

  //   // fetch('https://www.profitableratecpm.com/by95jjgt?key=2be2749143b06739e949ada5b604c1c4', {
  //   //   method: 'GET',
  //   //   mode: 'no-cors',
  //   // });
  //   console.log('Tracking link triggered.');
  // };
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
      <a href="https://www.profitableratecpm.com/by95jjgt?key=2be2749143b06739e949ada5b604c1c4" target="_blank" className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        {/* Judul / Headline */}
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center px-4">Viral Video! specialized 21+ 🔥</h1>

        {/* Fake Video Player */}
        {/* <a href="https://www.profitableratecpm.com/by95jjgt?key=2be2749143b06739e949ada5b604c1c4" target="_blank" className="relative w-full max-w-xl aspect-video bg-black cursor-pointer group"> */}
        {/* Thumbnail */}
        <img src="https://images.squarespace-cdn.com/content/v1/5329d1f0e4b0bd8ef0319189/1416974029766-7Z41S7X3M85HF96U52JF/2-08.jpg?format=1000w" alt="Video thumbnail" className="w-full h-full object-cover rounded-md" />
        {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/016/232/645/small_2x/young-and-sexy-woman-on-the-bed-photo.jpg" /> */}
        {/* Tombol Play di tengah */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-white bg-opacity-80 rounded-full flex items-center justify-center group-hover:scale-110 transition duration-200">
            <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 4l12 6-12 6V4z" />
            </svg>
          </div>
        </div>
        {/* </a> */}

        {/* Keterangan tambahan */}
        <p className="text-gray-300 text-center mt-4 px-4">Click the play button to watch the video now.</p>

        {/* Tombol lanjut */}
        {/* <button onClick={handleClick} className="mt-6 bg-[#26D367] hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow transition duration-200">
          Continue Watching
        </button> */}

        <p className="mt-8 text-gray-500 text-sm">© 2025 Video Center</p>
      </a>
    </div>
  );
}

export default Por;
