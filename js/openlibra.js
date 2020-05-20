class Openlibra{
	constructor(){
		this.ordenar = 'a_z';
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
	async obtenerLibros(titulo, autor, categoria){
		const respuestaLibro = await fetch(`https://www.etnassoft.com/api/v1/get/?category_id=${categoria}&book_title_index=${titulo}&book_author=${autor}`); 
		const respuesta = await respuestaLibro.json();
		return{
			respuesta
		}
	}
}