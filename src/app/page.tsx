import Image from "next/image";
import { Inter } from "next/font/google";
import { feedVideos } from "./utils/data";
const inter = Inter({ subsets: ["latin"] });
// const fetchData = async () => {
//   const res = await fetch(
//     `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`,
//     { cache: "no-store" }
//   );

//   const data = await res.json();

//   return data;
// };
export default function Home() {
  return (
    <div className="flex flex-col gap-3 flex-1 py-0 lg:px-24 2xl:px-12 px-32 mt-3 md:mx-auto w-full flex-wrap lg:flex-row  ">
      {feedVideos.map((video) => (
        <div
          key={video.title}
          className="flex flex-col gap-3 2xl:w-[300px] lg:w-[400px] w-[600px] p-4 "
        >
          <Image
            src={video.thumbnailUrl}
            alt="thumbnailUrl"
            height={200}
            width={600}
          />
          <div className="flex mt-3 gap-2">
            <div>
              <Image
                src="https://pbs.twimg.com/profile_images/1322962670010527746/PABkD-G4_400x400.jpg"
                height={40}
                width={40}
                alt="user image"
                className="rounded-full object-contain "
              />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <div>
                <h3 className="font-semibold text-white">{video.title}</h3>
              </div>
              <div className="text-sm text-zinc-400">
                <a href="">{video.channelName}</a>
                <div className="flex gap-1">
                  <span>{video.viewCount}</span>
                  <span>.</span>
                  <span>{video.createdAt.toDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
