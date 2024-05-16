// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

const array = [1, 2, 3];

const randomArray = array => {
  const numRamdom = Math.floor(Math.random() * array.length);
  console.log(array[numRamdom]);
};
randomArray(array);

const threeNumbers = [3, 6, 9];

const threeNumberMedia = array => {
  const addition = array[0] + array[1] + array[2];
  console.log(`La suma de todos los numeros es ${addition}`);
  const media = (array[0] + array[1] + array[2]) / array.length;
  console.log(`La media de todos los numeros es ${media}`);

  const max = Math.max(array[0], array[1], array[2]);
  const min = Math.min(array[0], array[1], array[2]);
  console.log(`El mayor es ${max} y el menor es ${min}`);
};

threeNumberMedia(threeNumbers);

const fiveNumbers = array => {
  const numRamdom = Math.floor(Math.random() * 11);
  if (array.includes(numRamdom)) {
    console.log(`El array contiene ${numRamdom} y su posición ${array.indexOf(numRamdom)}`);
  } else console.log(`El número no está`);
};
fiveNumbers([1, 3, 6, 7, 8]);

const ghostNumbers = array => {
  array.push(Math.floor(Math.random() * 101));
  array.push(Math.floor(Math.random() * 101));
  array.push(Math.floor(Math.random() * 101));
  console.log(array);
};
ghostNumbers([]);

const evenAndOdd = array => {
  const arrayEven = [];
  const arrayOdd = [];
  const numbRandom = Math.floor(Math.random() * 10 + 1);
  if ((array[0] * numbRandom) % 2 == 0) {
    arrayEven.push(array[0]);
  }
};
