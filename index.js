function hilights(strings, ...values) {
  let str = "";
  strings.forEach((e, index) => {
    str += `${e} <span class="hilight">${values[index] || ""}</span>`;
  });
  return str;
}

const name = "Jasurbek";
const age = 19;
const data = hilights`Hi my name  is ${name} and I'm ${age} years old!`;

document.body.innerHTML = data;
