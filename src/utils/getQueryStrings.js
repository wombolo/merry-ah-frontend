const getQueryStrings = (url) => {
  const queryStringObj = {};
  if (!url) {
    return {};
  }
  if (url.indexOf('?') < 0) {
    return {};
  }
  const getParams = url.split('?')[1].split('&');
  getParams.forEach((element) => {
    const [key, value] = element.split('=');
    queryStringObj[key] = value;
  });
  return queryStringObj;
};

export default getQueryStrings;
