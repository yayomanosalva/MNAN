# MNAN
MNAN(Mysql - Nest - Angular - Node) with OpenId and Keycloak



Launch Front End Angular

```bash
cd client && npm install && ng serve
```



Launch Back End Node Nest Js

```bash
cd server-node && npm install && npm run start:dev
```



#### Postman

------

post	http://localhost:3000/api/productos/

Body-raw-json

```json
{
    "Producto": "pantalon-sxa",
    "Valor": 45000
}
```



#### Header: 

value:	application/json

key:	Content-Type