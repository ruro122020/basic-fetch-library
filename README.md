# Vite+React CRUD Async Fetch Library

This is a library with CRUD async functions to use with vite+react apps when communicating with the flask-postgresql-template found [here](https://github.com/ruro122020/flask-postgresql-template-local). 

These async functions use the Fetch API. In the send and alter methods the body is passed into the body poperty:JSON.stringify(body). Only send the object with the data you want to store or update, not an object with the method, headers, and body properties in them. 

### Installation 
```
npm install basic-fetch-library
```

### Usage

To import any of these methods, use the following syntax:

```
import { retrieve } from 'basic-fetch-library'
```


### Async Functions
*URL: Is the URL that your API is using\
*body: Is an object that should only contain the data you want to post or update and nothing else. 

1. retrieve(url)
2. send(url, body)
3. alter(url, body)
4. remove(url)

### Error Handling
Return a dict with an "error" property and whatever error code you want to use. Example:

```
{"error":"Not found"}, 400
```

The functions are setup to access the "error" property when an error occurs in the request. 