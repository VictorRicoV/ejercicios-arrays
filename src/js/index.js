// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

const array = [1, 2, 3, 4, 5];

const randomArray = (array) => {
  const numRamdom = Math.floor(Math.random() * 5);
  console.log(array[numRamdom]);
};
randomArray(array);

const threeNumber = [1, 5, 7];

const higherAndLess = (numbers) => {
  if (
    arrayAddition[0] > arrayAddition[1] &&
    arrayAddition[0] > arrayAddition[2]
  ) {
    console.log(`El número mayor es ${arrayAddition}`);
  }
};

const threeNumberMedia = (arrayAddition) => {
  const addition = arrayAddition[0] + arrayAddition[1] + arrayAddition[2];
  const media = (arrayAddition[0] + arrayAddition[1] + arrayAddition[2]) / 3;
  if (
    arrayAddition[0] > arrayAddition[1] &&
    arrayAddition[0] > arrayAddition[2]
  ) {
    console.log(`El número mayor es ${arrayAddition}`);
  }

  console.log(`La suma de todos los numeros es ${addition}`);
  console.log(`La media de todos los numeros es ${media}`);
};

threeNumberMedia(threeNumber);
