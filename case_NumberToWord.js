const digit = 100;
console.log("The digit is: " + digit);

switch (digit) {
    case 1:
        console.log("Unit");
      break;
    case 10:
        console.log("Ten");
      break;
    case 100:
        console.log("Hundred");
      break;
    case 1000:
        console.log("Thousand");
      break;
    case 10,000:
        console.log("Ten Thousand");
      break;
    case 1,00,000:
        console.log("One lakh");
      break;
    default:
        console.log("Invalid Option");
      break;
  }