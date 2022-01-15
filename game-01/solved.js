function subset(set, sum) {
  let res = null;
  let s = new Set();
  for (let i = 0; i < set.length; ++i) {
    let temp = sum - set[i];
    if (s.has(temp)) {
      res = [temp, set[i]];
      break;
    }
    s.add(set[i]);
  }
  res
    ? console.log(`El array resultante es: ${res}`)
    : console.log(`Ninguna combinación suma ${sum}`);
}

subset([14, 5, 2, 13, 8], 10);
