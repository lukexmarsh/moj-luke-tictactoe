export function Add(numbers: string) {
  if (numbers === "") return 0;
  const delimiter = numbers.split("//")[1][0];
  console.log(numbers.split("//")[1][0]);
  const numbersArray = numbers.split("//")[1].split(new RegExp(delimiter, "g"));
  console.log(numbersArray);
  let result = 0;
  for (let index = 0; index < numbersArray.length; index++) {
    const number = numbersArray[index];
    result += Number(number);
  }
  return result;
}
