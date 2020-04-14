console.log("test");

fetch('https://nominatim.openstreetmap.org/reverse?format=json&lat=-31.4215852&lon=-64.496266&zoom=10')
.then( res => {
	console.log('res: ',res);
});