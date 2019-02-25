//Objeto global
window.WorldBank = {
  dataCountries: (data, countries) => { //Función para extraer la data por país. 
    let dataByCountries = data[countries].indicators //Obtener los objetos por país.
    return dataByCountries;
  },
  percentAndYear: (data, matchYear) => { // Función para integrar al select los indicadores educativos.
    let newData = {} //Crear objeto vacío para agregar la condición de búsqueda por palabra: educación.
    data.forEach(objeto => { //Recorre el objeto-data.
      if (objeto.indicatorName === matchYear) { //Entra al objeto, busca el indicador por nombre y extrae la coincidencia.
        newData = objeto.data //Incorpora a newData el nuevo objeto filtrado.
        return newData
      }
    });
    return newData
  },
  sortPercentAndYear: (objOrder, sortValue) => {
    let newArrResultYear = []; // var vacía para almacenar nuevo array que estaba en un obj
    for (let key in objOrder) { //iterar sus llaves en el obj
      newArrResultYear.push([key, objOrder[key]]); //relleno el array
    }
    if (sortValue === "upward") { //inf que da el select sortvalue
      newArrResultYear.sort((a, b) => a[1] - b[1]); //compara elementos a[1] y b[1] ascendente por primera posicion.
    } else if (sortValue === "falling") { //lo mismo para elementos descendentes.
      newArrResultYear.sort((a, b) => (b[1] - a[1])); //compara elementos b[1] y a[1]
    }
    return newArrResultYear // regresa el nuevo array con ele asc y desc
  }
};
