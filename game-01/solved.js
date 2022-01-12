function subset(set, sum) {
  let res = null;
  for (i = 0; i < set.length; i++) {
    setSlice = set.slice(i + 1);
    setSlice.map((num) =>
      set[i] + num === sum && !res ? (res = [set[i], num]) : null
    );
    if (res) break;
  }
  res
    ? console.log(`El array resultante es: ${res}`)
    : console.log(`Ninguna combinación suma ${sum}`);
}

subset([2, 5, 8, 14, 0], 10);
