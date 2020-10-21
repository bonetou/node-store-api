# Node Store Api

A Node API using `Express.js`, `MongoDB` with `Mongoose.js` and `MongoDB Atlas`.


## Instalation

```
# clone the repository
git clone https://github.com/bonetou/node-store-api

# install the project requirements
npm install dependencies

# run the server
node bin/server.js
```

## Testing the API

### GET REQUESTS
```
GET http://localhost:3000/
GET http://localhost:3000/products
GET http://localhost:3000/products/{slug}
GET http://localhost:3000/products/admin/{id}
GET http://localhost:3000/products/tags/{tag}
GET http://localhost:3000/customers
GET http://localhost:3000/orders
```

### POST REQUESTS

```
POST http://localhost:3000/products
Content-Type:application/json
{
   "title": title,
   "slug": slug,
   "description": description,
   "price": price,
   "active": true/false,
   "tags": [tags]
}

POST http://localhost:3000/customers
Content-Type:application/json
{
   "name": name,
   "email": email,
   "password": password
}

POST http://localhost:3000/orders
Content-Type:application/json
{
   "number": name,
   "customer": customerId,
   "createDate": createDate,
   "status": 'created'/'done',
   "items": [
      {
        "quantity": quantity,
        "price": price,
        "product": productId
      }
   ]
}

```
### PUT REQUESTS
```
PUT http://localhost:3000/products/{id}
Content-Type:application/json
{
   "title": title,
   "slug": slug,
   "description": description,
   "price": price,
   "active": true/false,
   "tags": [tags]
}
```

### DELETE REQUESTS
```
DELETE http://localhost:3000/products/{id}
```


