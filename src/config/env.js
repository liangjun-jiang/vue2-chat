//获取图片地址
const imgurl =  'https://picsum.photos/200/300/?random'//'http://localhost/files/images/';
let baseUrl;

if (process.env.NODE_ENV == 'development') {
	baseUrl = 'http://40.74.248.150:8003' //'http://localhost:8003' //
}else{
	baseUrl = 'http://40.74.248.150:8003'//'https://flight-bot-backend.azurewebsites.net/'
}
export {
	baseUrl,
	imgurl 
}
