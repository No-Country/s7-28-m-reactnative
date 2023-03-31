# ALWAYS ALERT API
## Deploy
COMING SOON

# DOCUMENTACIÓN

## USUARIOS

### REGISTRO
**/users/register**

`method: POST`

BODY
```json
{
  "email": "test@test.com", //required
  "password": "123", //required
  "phoneNumber": "+54 9 111 111"
}
```
RESPONSE
```json
{
  "email": "test@test.com",
  "password": "$2a$10$2MGu6VMKUZ4niEnNl0iNAO2IAX7OL1tVBY5wbLmCdyP31Rs/Jbf6m",
  "phoneNumber": "+54 9 111 111",
  "profileImage": "placeholder.png"
  "contacts": [],
  "_id": "6426e76ece3bce4428a55378",
  "createdAt": "2023-03-31T14:00:14.817Z",
  "updatedAt": "2023-03-31T14:00:14.817Z"
}
```
### LOGIN
**/users/login**

`method: POST`

BODY
```json
{
  "email": "test@test.com", //required
  "password": "123", //required
}
```
RESPONSE
```json
{
  "token": "aca viene el token de JWT"
  "user": {
    "_id": "6426e76ece3bce4428a55378",
    "email": "test@test.com",
    "password": "$2a$10$2MGu6VMKUZ4niEnNl0iNAO2IAX7OL1tVBY5wbLmCdyP31Rs/Jbf6m",
    "phoneNumber": "+54 9 111 111",
    "contacts": [],
    "createdAt": "2023-03-31T14:00:14.817Z",
    "updatedAt": "2023-03-31T14:00:14.817Z"
  }
}
```

### TRAER TODOS LOS USUARIOS
**/users/all**

`method: GET`

`Authorization: Bearer token`

RESPONSE
```json
[
{
    "_id": "642348dc5e93cc00ffbcceff",
    "email": "a@a",
    "contacts": [
      "6423490e5e93cc00ffbccf0b",
      "642348f45e93cc00ffbccf02"
    ],
    "createdAt": "2023-03-28T20:06:52.204Z",
    "updatedAt": "2023-03-30T15:46:58.874Z"
  },
  {
    "_id": "642348f45e93cc00ffbccf02",
    "email": "b@b",
    "contacts": [],
    "createdAt": "2023-03-28T20:07:16.428Z",
    "updatedAt": "2023-03-28T20:07:16.428Z"
  }
]
```
## CONTACTOS (usuario logeado)
**/users/contacts**

`method: GET`

`Authorization: Bearer token`

RESPONSE
```json
[
  {
    "_id": "6423490e5e93cc00ffbccf0b",
    "email": "e@e"
  },
  {
    "_id": "642348f45e93cc00ffbccf02",
    "email": "b@b"
  }
]
```
## NUEVO CONTACTO
**/users/contacts**

`method: POST`

`Authorization: Bearer token`

BODY
```json
{
  "newContactId": "6425af3a2a55183be8a716a1"
}
```

RESPONSE
```json
{
  "_id": "642348dc5e93cc00ffbcceff",
  "email": "a@a",
  "password": "$2a$10$79xOvuxmK7.6XAQHSRsG.O8HB0DU.5dKhipGbPEFkNp0.I4mnrhxe",
  "contacts": [
    "6423490e5e93cc00ffbccf0b",
    "642348f45e93cc00ffbccf02",
    "6425af3a2a55183be8a716a1"
  ],
  "createdAt": "2023-03-28T20:06:52.204Z",
  "updatedAt": "2023-03-31T14:21:49.491Z"
}
```

## ELIMINAR CONTACTO
**/users/contacts**

`method: DELETE`

`Authorization: Bearer token`

BODY
```json
{
  "contactId": "6425af3a2a55183be8a716a1"
}
```

RESPONSE
```json
{
  "_id": "642348dc5e93cc00ffbcceff",
  "email": "a@a",
  "password": "$2a$10$79xOvuxmK7.6XAQHSRsG.O8HB0DU.5dKhipGbPEFkNp0.I4mnrhxe",
  "contacts": [
    "6423490e5e93cc00ffbccf0b",
    "642348f45e93cc00ffbccf02"
  ],
  "createdAt": "2023-03-28T20:06:52.204Z",
  "updatedAt": "2023-03-31T14:24:24.542Z"
}
```
