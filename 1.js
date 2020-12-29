const sumMultiplesOfThreeAndFive = (limit) => {
  const multiplesOfThreeAndFive = [];

  for (let i = 1; i < limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiplesOfThreeAndFive.push(i);
    }
  }

  return multiplesOfThreeAndFive.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumMultiplesOfThreeAndFive(1000));
