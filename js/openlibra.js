class Openlibra{
	constructor(){
		// this.token_auth = 'UJ3KAT2XOUU6XJBLOZES';
		this.ordenar = 'date';
	}
	//metodos de la api
	async obtenerCategorias(){
		const url = `https://www.etnassoft.com/api/v1/get/?get_categories=all`;
		const urlObtenerCategorias = await fetch(url);
		const categorias = await urlObtenerCategorias.json();
		return{
			categorias
		}
	}
	async obtenerLibros(libro, categoria){
		console.log(libro, categoria);
		const respuestaLibro = await fetch(`https://www.etnassoft.com/api/v1/get/?category_id=${categoria}&book_title_index=${libro}`); 
		const respuesta = await respuestaLibro.json();
		return{
			respuesta
		}
	}
}