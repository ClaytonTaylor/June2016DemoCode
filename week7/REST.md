# REST: (RE)presentational (S)tate (T)ransfer
> A super duper interview topic!!!!!!!!!!!!!!

REST is not a new tool, it is a software architecture for creating `scalable` resources to deliver to the users and clients connecting to your apps.

### Concepts

1. REST is not a specific technology/tool/library or a standardized proto.
2. The MOST basic concept is the idea of a `Resource`
3. Any information from the web can be considered resources. [Collection, Singleton, Image].
4. Resources can be collections: `/api/users`
5. They can also be Singletons: `/api/users/{user_id}` (parameterized routes)
6. REST APIs ALWAYS RETURN **`JSON`**.

### Statelessness

1. Servers do not keep track of clients from one request to the next.
2. Clients must, therefore, supply all of the necessary info to complete the request.

### METHODS / VERBS

#### POST (`app.post`)

1. `POST` routes are NOT **idempotent**, each request may modify server state (i.e. or update a database).
2. typically used for creating new resources.

#### GET (`app.get`)

1. `GET` routes should be safe; they don't modify server state.
2. typically used to receive a resource(s) (data).

#### PUT (`app.put`)

1. `PUT` routes should be **idempotent**
2. typically used to create a new resource or update one.

#### DELETE (`app.delete`)

1. `DELETE` routes should **idempotent**, sending duplicate requests would only affect the server state once.
2. typically used to delete a resource.

### Responses
RESTful APIs send really meaningful response codes.

- `200` Success [ All the things are good :) ]
- `204` No content
- `304` Not modified (check network tab, your css and js file often send these) [cached]
- `400` Bad Request
- `404` Not Found [ that sh*t ain't found ]
- `500` Server side error [ All the things are bad :( ]

## Example APIs

| VERB      | NOUN                |
|-----------|---------------------|
| `POST`    | `/api/v2/users`     |
| `GET`     | `/api/v2/users/69`  |
| `PUT`     | `/api/v2/users/169` |
| `DELETE`  | `/api/v2/users/690` |

The URLs for APIs that you build are expected to contain NOUNS in their endpoints (paths) and NOT VERBS.

## CRUD

- Create (POST)
- Read (GET)
- Update (PUT)
- DELETE (DELETE)

## Scenarios

- view the current account balance for someone's account
`GET :: /api/v200/account/balance/123`
`GET :: /api/v200/account/balance # user was logged in`

- view all transactions
`GET :: /api/v200/account/transactions`

- view a specific transaction
`GET :: /api/v200/account/transactions/123`

- adding a new credit card
`POST :: /api/v200/account/card`

- changing your home address
`PUT :: /api/v200/account/321`

- make a deposit
`POST|PUT :: /api/v200/account/dump`

- delete an expired card
`DELETE :: /api/v200/account/card/42`

## To use or not use REST...

- Use REST to make resource on your servers available to clients (exposing your API, hosting a consumable API).
- Not all HTTP verbs make sense for every resource. Only use the ones that you need.

### Case Study: Dropbox
1. `/delta` is a route that returned some data, is idempotent, used to be a `GET` request.
2. Querying `/delta` became too complex, exceeding the limitations, switching the verb/method to `POST`.
3. `REPORT` **HTTP** verb/method, similar to `GET`, would have been more **RESTful** (very obscure).
4. `POST` is less **RESTful** in this context, but it is easier for developers to get handle on.

That's all folks.
