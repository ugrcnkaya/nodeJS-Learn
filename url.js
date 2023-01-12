const url = require('url');

const address = 'https://www.youtube.com/watch?v=zQRrXTSkvfw&t=231';

const parsedUrl = url.parse(address, true);

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);


