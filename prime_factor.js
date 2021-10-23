let prime_factors = new Array();

let num = 12;

for (let index = 2; index <= num; index++)
 {
  while (num % index == 0) 
  {
    prime_factors.push(index);
    num /= index;
  }
}

for (let values of prime_factors)
 {
  console.log(values);
}