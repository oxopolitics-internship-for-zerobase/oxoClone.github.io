//# JSON
function fetchJsonToArray(rawJson) {
  const array = [];
  const jsonData = rawJson.data;
  for (const key in jsonData) {
    jsonData[key] = { ...jsonData[key], id: key };
    array.push(jsonData[key]);
  }

  return array;
}

export default fetchJsonToArray;
