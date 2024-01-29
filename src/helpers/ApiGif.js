 export const getGif= async(categori) => {
    /*STUm7S9CPPkHDyeWPyMj00f2hTXJBF5s*/
  const url =`https://api.giphy.com/v1/gifs/search?api_key=STUm7S9CPPkHDyeWPyMj00f2hTXJBF5s&q=${categori}&limit=10`
  const response = await fetch(url)
  const dataGif = await response.json()
  const gifs= dataGif?.data?.map((img)=>({
   id: img.id,
   title: img.title,
   url: img.images.downsized_medium.url

  }))
  return gifs
}