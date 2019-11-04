const dadosEscondidos = [
  { user: "Name1", geo: { lat: '12', long: '13' } },
  { user: "Name2", geo: { lat: '12', long: '13' }, age: 2 },
  { user: "Name2", geo: { lat: '12', long: '13' } },
  { user: "Name3", geo: { lat: '12', long: '13' }, age: 4 }
];

function buscarDados(callback) {
  setTimeout(() => {
      callback(dadosEscondidos)
  }, 5000)
}

buscarDados(usuarios => {
  console.log(usuarios[0]) 
})
