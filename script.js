const obtenerValorInput = () => {
    let inputTexto = document.getElementById('input_personaje');
    let valor = inputTexto.value
    peticionApi(valor)
}


const peticionApi =(character) => {
const baseURL = 'https://rickandmortyapi.com/api/character/';
const endpoint = `?name=${character}`;
const url = `${baseURL}${endpoint}`;


axios
.get(url)
.then((res) => printData(res.data.results[0]))
.catch((err) => console.log(err));

}

const printData = (data) => {
    let respuesta = document.getElementById('show-info');
    //respuesta.style.display = 'block'; 
    respuesta.innerHTML = `
      <img src="${data.image}" alt="${data.name}">
      <label><h3>Nombre: ${data.name}</h3></label>
      <label><h3>Estado: ${data.status}</h3></label>
      <label><h3>Especie: ${data.species}</h3></label>
      <label><h3>Genero: ${data.gender}</h3></label>
      <label><h3>tipo: ${data.type}</h3></label>
    `;
  }


 