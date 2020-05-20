class Interfaz{
	constructor(){
		this.init();
		this.listado = document.getElementById('resultado-libros');
	}
	init(){
		this.imprimirCategorias();
	}
	imprimirCategorias(){
		openlibra.obtenerCategorias()
			.then(categorias => {
				const catg = categorias.categorias;
				const select = document.getElementById('listado-categorias');
				// for (const [key, value] of Object.entries(catg) ){
				catg.forEach(value => {
					const option = document.createElement('option');
					option.value = value.category_id;
					option.appendChild(document.createTextNode(value.name));
					select.appendChild(option);
				})
			})
	}
	mostrarMensajes(mensaje, clases){
		const div = document.createElement('div');
		div.className = clases;
		div.appendChild(document.createTextNode(mensaje));
		const divMensaje = document.querySelector('#buscador');
		divMensaje.appendChild(div);
		setTimeout(() => {
			this.limpiarMensaje();
		}, 3000);
	}
	limpiarMensaje(){
		const alert = document.querySelector('.alert');
		if(alert){
			alert.remove();
		}
	}
	mostrarLibros(libros){
		const limpiaResultado = this.listado;
		if(limpiaResultado){
			limpiaResultado.innerHTML = '';
		}
		const listaLibros = libros;
		listaLibros.forEach(libro => {
			this.listado.innerHTML += `
				<div class="col-md-4 mb-4">
					<div class="card">
						<img class="img-fluid mb-2" src="${libro.cover}">
						<div class="card-body">
							<h5 class="card-title text-center">${libro.title}</h5>
							<p class="card-text">${libro.content_short}</p>
							<a href="${libro.url_download}" target="_blank" class="btn btn-primary">Descargar libro</a>
						</div>
					</div>
				</div>
			`
		})
	}
/* 	mostrarSpinner(){
		const spinner = document.querySelector('.contenido-spinner');
		spinner.style.display = 'block';
		setTimeout(()=> {
			spinner.style.display = 'none';
		}, 3000);
	} */
}