export default async function getGif() {
  try {
    const key = "qbVteMU0x15vSUNLLkKHYRWeJQkCwymH";
    const search = "honkai star rail";
    const encodedSearch = encodeURIComponent(search);
    const limit = 10;
    const url = `https://api.giphy.com/v1/stickers/search?api_key=${key}&q=${encodedSearch}&limit=${limit}`;

    const res = await fetch(url, { mode: "cors" });
    const data = await res.json();
    return data.data.map((gif) => ({
      url: gif.images.original.url,
      title: gif.title,
    }));
  } catch (error) {
    console.error("Fetch failed: ", error);
    return [];
  }
}
