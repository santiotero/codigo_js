console.log("test");

let urlApi = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=-31.4215852&lon=-64.496266&zoom=10';

let h = new Headers();
h.append('Accept','aplication/json');

let req = new Request(urlApi, {
	method: 'GET',
	headers: h,
	mode: 'cors'
});

fetch(req)
.then( res => {
	
	if(res.ok){
		return res.json();
	}else{
		console.log( 'res: error' );
	}

})
.then( json => {
	console.log( json.name );
});