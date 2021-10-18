export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=GSYjzQQhXYsljlnmgCtNguk58Xma0JIn`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      //! El signo de interrogacion ? es que si vienen las imagenes se utilicen
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
