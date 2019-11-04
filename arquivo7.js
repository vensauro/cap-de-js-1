require('isomorphic-fetch');

const url = "https://www.jsonstore.io/6b54c9fcbf378230422f33138acff270ee510bd02cdf2d046b65305d7197a3b7"

async function main() {
  const rawResult = await fetch(url)
  const resultado = await rawResult.json()
  console.log(resultado)
}
main()
