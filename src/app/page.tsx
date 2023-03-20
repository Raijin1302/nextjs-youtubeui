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

const fetchData = async () => {
  const res = await fetch(
    `${process.env.BASE_URL}/search?part=snippet&q=New&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${process.env.API_KEY}`,
      },
    }
  );

  const data = await res.json();

  return data.items;
};

export default async function Home() {
  const data = await fetchData();

  return (
    <div className="flex flex-col gap-3 flex-1 w-full flex-wrap lg:flex-row sm:pl-24 md:pl-32 pl-8 sm:justify-start justify-center ">
      {data.map((video: any, index: any) => (
        <div
          key={video?.id?.videoId}
          className="flex flex-col gap-3 w-[300px] p-4 "
        >
          <Image
            src={video?.snippet?.thumbnails?.high?.url}
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
                className="rounded-full object-center "
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
                  <span>{video?.snippet?.publishedAt}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
