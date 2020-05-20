const openlibra = new Openlibra();
const interfaz = new Interfaz();

document.getElementById('buscarBtn').addEventListener('click', (ev) => {
	ev.preventDefault();
	//recupero los valores cargados en los campos
	const buscarTitulo = document.getElementById('titulo').value;
	const buscarAutor = document.getElementById('autor').value;
	const categoria = document.getElementById('listado-categorias');
	const categoriaSelect = categoria.options[categoria.selectedIndex].value;
	if (buscarTitulo === '' && buscarAutor === ''){
		interfaz.mostrarMensajes('Por favor ingresa al menos un criterio de búsqueda', 'alert bg-danger text-center mt-4')
	}else{
		openlibra.obtenerLibros(buscarTitulo, buscarAutor, categoriaSelect)
			.then(respuesta => {
				const spinner = document.querySelector('.contenido-spinner');
				spinner.style.display = 'block';
				setTimeout(()=> {
					spinner.style.display = 'none';
					if(respuesta.respuesta.length > 0){
						interfaz.mostrarLibros(respuesta.respuesta);
					}else{
						interfaz.mostrarMensajes('Tu búsqueda no arrojó resultados, por favor intenta nuevamente', 'alert alert-warning text-center mt-4');
					}
				}, 3000);
				
			})
	}
})