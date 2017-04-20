// ---------------------------------------------
// Server

var http = require('http')
var port = 8080

var server = http.createServer(function(request, response) {
	// Set CORS headers
	response.setHeader('Access-Control-Allow-Origin', '*')
	response.setHeader('Access-Control-Request-Method', '*')
	response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE')
	response.setHeader('Access-Control-Allow-Headers', 'content-type')

	if (request.method === 'OPTIONS') {
		response.writeHead(200)
		response.end()

		return
	}

	var body = []

	request.on('error', function(err) {
		console.error(err)
	}).on('data', function(chunk) {
		body.push(chunk)
	}).on('end', function() {
		body = Buffer.concat(body).toString()
		// At this point, we have the headers, method, url and body, and can now
		// do whatever we need to in order to respond to this request.

		// console.log('request headers', request.headers)
		console.log('request method', request.method)
		console.log('request url', request.url)
		console.log('request body', body)
		console.log('\n')

		response.writeHead(200)
		response.end()
	})
})

server.listen(port)
console.info('==> 🌎 Listening on port %s.', port)

// ---------------------------------------------
// Client

/*
fetch('http://192.168.1.126:port', {
	method  : 'post',
	headers : {
		Accept         : 'application/json',
		'Content-Type' : 'application/json'
	},
	body : JSON.stringify(data)
})
*/
