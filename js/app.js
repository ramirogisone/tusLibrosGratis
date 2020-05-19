const openlibra = new Openlibra();
const interfaz = new Interfaz();

document.getElementById('buscarBtn').addEventListener('click', (ev) => {
	ev.preventDefault();
	//recupero los valores cargados en los campos
	const buscar = document.getElementById('libro').value;
	const categoria = document.getElementById('listado-categorias');
	const categoriaSelect = categoria.options[categoria.selectedIndex].value;
	if (buscar === '' || categoriaSelect === ''){
		interfaz.mostrarMensajes('Por favor ingresa un criterio de búsqueda', 'alert bg-danger text-center mt-4')
	}else{
		openlibra.obtenerLibros(buscar, categoriaSelect)
			.then(respuesta => {
				console.log(respuesta);
			})
	}
})