# Test Teknis PT. Ukur Kreasi Nusantara

## Requirement

- Node **(v16.15.0)**
- NPM **(v8.5.5)**
- Docker **(v20.10.17)**

## Usage
Install dependencies and Run

```
npm install & npm start
```

Run database

```bash
docker compose up -d
```

## API Spec

## Login

### Post /login

Request Body

```json
{
    "username": "root",
    "password": "root"
}
```

Response Body

```json
{
    "message": "login success",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJvb3QiLCJpYXQiOjE2Njc5NDE3MTYsImV4cCI6MTY2Nzk0NTMxNn0.Ck3rZ_xdUVJq7pngw52gab3P95lH2KsZljPwI6dlF1E"
    }
}
```
## Members

### Get /
Request Header
```
Authorization: Bearer <token>
```

Response Body

```json
{
    "message": "success create and filtering member data",
    "data": [
        {
            "_id": "61513409910e67390ff53890",
            "name": "Tameka",
            "balance": "6728",
            "transportation": "bus",
            "createdAt": "2022-11-08T20:57:34.425Z",
            "updatedAt": "2022-11-08T20:57:34.425Z"
        },
        {
            "_id": "61513409802beedbe9956ded",
            "name": "Crosby",
            "balance": "3647",
            "transportation": "train",
            "createdAt": "2022-11-08T20:57:34.425Z",
            "updatedAt": "2022-11-08T20:57:34.425Z"
        },
        {
            "_id": "61513409fc036c74e866d348",
            "name": "Jocelyn",
            "balance": "4610",
            "transportation": "train",
            "createdAt": "2022-11-08T20:57:34.425Z",
            "updatedAt": "2022-11-08T20:57:34.425Z"
        },
        {
            "_id": "615134098cf9ce80fcc58be7",
            "name": "Mcmahon",
            "balance": "9386",
            "transportation": "train",
            "createdAt": "2022-11-08T20:57:34.425Z",
            "updatedAt": "2022-11-08T20:57:34.425Z"
        }
    ]
}
```