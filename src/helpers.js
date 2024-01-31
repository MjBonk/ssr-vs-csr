export const imageUrlToBase64 = async (url) => {
  const image = await fetch({ url: url, method: "GET", encoding: null }),
    img = await image.arrayBuffer(),
    imgBuffer = Buffer.from(img),
    imgBase64 = imgBuffer.toString("base64"),
    imgDataUrl = "data:image/png;base64," + imgBase64;

  return imgDataUrl;
};

// Contains a helper function for pre-loading an image from its URL. 
// This allows the SSR app to download the image on the server, 
// then include it as part of the HTML code that it passes to the browser for an "instant load" effect.
