const hammingDistance = function (a, b) {
  let distance = 0;

  if (a.length != b.length) {
    console.log("Strings of different length");
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) distance += 1;
  }

  return distance;
};
