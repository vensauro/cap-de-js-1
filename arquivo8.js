require('isomorphic-fetch');

const url = "https://www.jsonstore.io/6b54c9fcbf378230422f33138acff270ee510bd02cdf2d046b65305d7197a3b7"

let body = {
  mensagem: 'Você é incrivel por chegar aqui, i ❤ u',
  by: 'vensauro'
}

body = JSON.stringify(body)

const config = {
  method: 'POST',
  headers: {
    'Content-type': 'application/json'
  },
  body
}

async function main() {
  const resultado = await (await fetch(url, config)).json()
  console.log(resultado)
}
main()
