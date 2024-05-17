// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

const array = [1, 2, 3];

const randomArray = (array) => {
  const numRamdom = Math.floor(Math.random() * array.length);
  console.log(array[numRamdom]);
};
randomArray(array);
const threeNumbers = [3, 6, 9];

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

  const threeNumberMedia = (array) => {
    const addition = array[0] + array[1] + array[2];
    console.log(`La suma de todos los numeros es ${addition}`);
    const media = (array[0] + array[1] + array[2]) / array.length;
    console.log(`La media de todos los numeros es ${media}`);

    const max = Math.max(array[0], array[1], array[2]);
    const min = Math.min(array[0], array[1], array[2]);
    console.log(`El mayor es ${max} y el menor es ${min}`);
  };
  threeNumberMedia(threeNumbers);
};
threeNumberMedia(threeNumbers);

const fiveNumbers = (array) => {
  const numRamdom = Math.floor(Math.random() * 11);
  if (array.includes(numRamdom)) {
    console.log(
      `El array contiene ${numRamdom} y su posición ${array.indexOf(numRamdom)}`
    );
  } else console.log(`El número no está`);
};
fiveNumbers([1, 3, 6, 7, 8]);

const ghostNumbers = (array) => {
  array.push(Math.floor(Math.random() * 101));
  array.push(Math.floor(Math.random() * 101));
  array.push(Math.floor(Math.random() * 101));
  console.log(array);
};
ghostNumbers([]);

const evenAndOdd = (array) => {
  const arrayEven = [];
  const arrayOdd = [];
  const numbRandom = Math.floor(Math.random() * 10 + 1);

  const firstResult = array[0] * numbRandom;
  const secondResult = array[1] * numbRandom;
  const thirdResult = array[2] * numbRandom;
  const fourthResult = array[3] * numbRandom;
  const fivethResult = array[4] * numbRandom;

  if (firstResult % 2 === 0) {
    arrayEven.push(firstResult);
  } else {
    arrayOdd.push(firstResult);
  }
  if (secondResult % 2 === 0) {
    arrayEven.push(secondResult);
  } else {
    arrayOdd.push(secondResult);
  }
  if (thirdResult % 2 === 0) {
    arrayEven.push(thirdResult);
  } else {
    arrayOdd.push(thirdResult);
  }
  if (fourthResult % 2 === 0) {
    arrayEven.push(fourthResult);
  } else {
    arrayOdd.push(fourthResult);
  }
  if (fivethResult % 2 === 0) {
    arrayEven.push(fivethResult);
  } else {
    arrayOdd.push(fivethResult);
  }
  console.log(array);
  console.log(arrayEven);
  console.log(arrayOdd);
};

evenAndOdd([1, 2, 3, 4, 5]);
//Dados dos arrays de 3 valores cada uno, haz una función que junte los dos arrays en uno solo

const joinArrys = (array1, array2) => {
  const newArray = [];
  newArray.push(
    array1[0],
    array1[1],
    array1[2],
    array2[0],
    array2[1],
    array2[2]
  );
  console.log(newArray);
};
joinArrys([1, 2, 3], [4, 5, 6]);

const numbersGreaterThanZero = (numbers) => {
  if (numbers[0] > 0 && numbers[1] > 0 && numbers[2] > 0 && numbers[3] > 0) {
    console.log(`Todos los números son mayores a 0`);
  } else console.log(`Hay números negativos`);
};
numbersGreaterThanZero([1, 2, 3, 4]);

const numbersToString = (numbers) => {
  const newArray = [];
  newArray.push(String(numbers[0]), String(numbers[1]), String(numbers[2]));
  console.log(newArray);
};
numbersToString([1, 2, 3]);

const duplicateNumbers = (numbers) => {
  const newArray = [];
  newArray.push(
    numbers[0],
    numbers[0],
    numbers[1],
    numbers[1],
    numbers[2],
    numbers[2]
  );
  console.log(newArray);
};
duplicateNumbers([1, 2, 3]);

const onlyEven = (numbers) => {
  const newArray = [];
  if (numbers[0] % 2 === 0) {
    newArray.push(numbers[0]);
  }
  if (numbers[1] % 2 === 0) {
    newArray.push(numbers[1]);
  }
  if (numbers[2] % 2 === 0) {
    newArray.push(numbers[2]);
  }
  console.log(newArray);
};
onlyEven([10, 25, 14]);

const onlyInitials = (names) => {
  const newArray = [];
  const firstInitial = names[0].charAt(0);
  const secondInitial = names[1].charAt(0);
  const thirdInitial = names[2].charAt(0);
  newArray.push(firstInitial, secondInitial, thirdInitial);
  console.log(newArray);
};
onlyInitials(["Carlos", "Ana", "Luis"]);

const dniLetter = (dni) => {
  const letters = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];

  const position = dni % 23;
  console.log(position);

  console.log(dni + letters[position]);
};

dniLetter(53733256);
