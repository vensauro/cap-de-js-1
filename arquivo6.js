const dadosEscondidos = [
  { user: "Name1", geo: { lat: '12', long: '13' } },
  { user: "Name2", geo: { lat: '12', long: '13' }, age: 2 },
  { user: "Name2", geo: { lat: '12', long: '13' } },
  { user: "Name3", geo: { lat: '12', long: '13' }, age: 4 }
];

function buscarDados() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(dadosEscondidos)
    }, 5000)
  })
} 

async function main() {
  try {
      const resultado = await buscarDados()
      const pessoa = resultado[0]
      console.log(pessoa)
  } catch(erro) {
      console.error(erro)
  }
}
main()
