import Image from "next/image"
import fetchData from "@/lib/fetchData"

export default async function Home() {
  const data = await fetchData(
    `search?part=snippet&q=us&regionCode=VN&maxResults=50&order=date`
  )

  // const { items } = data

  return (
    <div className="grid 2xl:grid-cols-5 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 w-full h-auto   ">
      {data?.items.map((video: any) => (
        <div key={video?.id?.videoId} className="flex flex-col gap-4 p-4 ">
          <Image
            src={video?.snippet?.thumbnails?.high?.url}
            alt="thumbnailUrl"
            height={200}
            width={600}
            className="rounded-md"
          />
          <div className="flex mt-3 gap-2 justify-center ">
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
                <h3 className="font-medium text-slate-900 dark:text-slate-100">
                  {video?.snippet?.title}
                </h3>
              </div>
              <div className="flex flex-col text-sm text-zinc-400">
                <a href="">{video?.snippet?.channelTitle}</a>
                <p>{video?.snippet?.publishTime}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
