const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  return kittens.concat(name);
}

function prependKitten(name) {
  return [name].concat(kittens);
}

function removeLastKitten() {
  var spliced = [...kittens];
  spliced.splice(kittens.length - 1, 1);
  return spliced;
}

function removeFirstKitten() {
  var sliced = [...kittens];
  sliced.slice(1);
  return sliced;
}

