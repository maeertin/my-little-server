My Little Server
=====================

### Start the server

```
$ node index.js
```

### Request from client

```
fetch('[ip]:[port]', {
	method  : 'post',
	headers : {
		Accept         : 'application/json',
		'Content-Type' : 'application/json'
	},
	body : JSON.stringify(data)
})
```
