
const getIcon = (url) => {

  const index = url.indexOf("/64x64/");

  const transformedURL = index !== -1 ? url.substring(index + 7) : url;

  return '/' + transformedURL;

};

console.log(getIcon("//cdn.weatherapi.com/weather/64x64/day/143.png"))


export default getIcon;
