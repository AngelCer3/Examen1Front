const determinar = (datos) => {
    if (typeof(datos) === 'object' & !Array.isArray(datos)) {
      console.log("soy un objeto")

  } else if (Array.isArray(datos)) {
      console.log("Soy un arreglo")
      datos.map((item)=> {
        console.log(item)
      })
  } else {
    console.log(`Soy otro tipo de dato: ${datos}`);
  }
};

determinar();
