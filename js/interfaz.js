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
}