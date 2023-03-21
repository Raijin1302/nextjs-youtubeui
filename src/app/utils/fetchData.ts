const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    part: "snippet,id",
    regionCode: "US",
    maxResults: "50",
    order: "date",
  },
  headers: {
    "X-RapidAPI-Key": `${process.env.API_KEY}`,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
const fetchData = async (url: string) => {
  const res = await fetch(`${BASE_URL}/${url}`, options);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data;
};
export default fetchData;
