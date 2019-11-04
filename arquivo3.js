const dadosEscondidos = [
  { user: "Name1", geo: { lat: '12', long: '13' } },
  { user: "Name2", geo: { lat: '12', long: '13' }, age: 2 },
  { user: "Name2", geo: { lat: '12', long: '13' } },
  { user: "Name3", geo: { lat: '12', long: '13' }, age: 4 }
];

function buscarDados() {
  setTimeout(() => {
    return dadosEscondidos
  }, 5000)
}

const usuarios = buscarDados()
console.log(usuarios[0])
