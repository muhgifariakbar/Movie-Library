# Movie-Library

# How do I get set up?

0. fill all .env as template
1. npm i
2. npx sequelize-cli db:create
3. npx sequelize-cli db:migrate
4. npx sequelize-cli db:seed:all

# How do I run the test?

0. fill all .env as template
1. npm i 
2. npx sequelize-cli db:create --env test
3. npx sequelize-cli db:migrate --env test
4. npx sequelize-cli db:seed:all --env test

# How do I start?

1. npm start

# How to access endpoint

Except GET, all end point required authentication. To create authentication :

1. hit POST /login
   Request:

- body:

```json
{
  "email": "admin@mail.com",
  "password": "12345"
}
```

2. go to headers and insert `access_token` as the headers with the token that was generated with POST/login


# EndPoint
List of available endpoints:

- `POST /author`
- `POST /movie`
- `POST /actor`
- `POST /login`
- `GET /auhor`
- `GET /movie`
- `GET /actor`
- `PUT /auhor/id`
- `PUT /movie/id`
- `PUT /actor/id`
- `DELETE /auhor/id`
- `DELETE /movie/id`
- `DELETE /actor/id`

````
# 1. POST /author

Request:

- body:

```json
{
  "name": "string",
  "movieId": "number"
}
````

# 2. POST /movie

Request:

- body:

```json
{
  "name": "string",
  "year": "number",
  "genre": "string"
}
```

# 3. POST /actor

Request:

- body:

```json
{
  "name": "string",
  "movieId": "number"
}
```

# 4. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```
