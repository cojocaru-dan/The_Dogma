import * as fs from 'node:fs';
// 1 and 2
const convertBreeds = function(obj) {
  const breedsArr = [];

  for (const breed in obj) {
    for (const subBreed of obj[breed]) {
      breedsArr.push(`${subBreed} ${breed}`);
    }
    if (obj[breed].length === 0) {
      breedsArr.push(breed);
    }
  }

  let countId = 0;
  for (const breed of breedsArr) {
    const nameArr = breed.split(" ").map((nameOfbreed) => nameOfbreed[0].toUpperCase() + nameOfbreed.substr(1));
    const nameValue = nameArr.join(" ");
    const sub = nameArr.length > 1 ? nameArr[1] : false;

    breedsArr[countId] = {
      id: countId,
      name: nameValue,
      sub: sub
    }
    countId += 1;
  }

  return breedsArr;
};

const dataRead = (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const dogBreeds = JSON.parse(data);
  console.log(dogBreeds.breeds.springer);
  const arrayOfBreeds = convertBreeds(dogBreeds.breeds);
  console.log(arrayOfBreeds);
};

fs.readFile("data.json", "utf8", dataRead);

// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
  toExport = [
    { name: "dataRead", content: dataRead, type: "function" },
    { name: "convertBreeds", content: convertBreeds, type: "function" }
  ]

} catch (error) {
  toExport = { error: error.message }
}

export { toExport };