# Pharmacy-beck

## Documentation

[Base Url](https://paharmacy-beck-d4ecebd44ae2.herokuapp.com/) : https://paharmacy-beck-d4ecebd44ae2.herokuapp.com/

### Get all products:

#### Method: GET

#### Endpoint:
/all-goods

#### Responses:
- **Code:** 200
- **Data:**
```json
[
  { "_id": "65ea0147db4a1c84c167426d", "Pharmacy3i": [{ "count": 5 }] },
  { "_id": "65ea0147db4a1c84c167426e", "Pharmacy24h": [{ "count": 5 }] },
  { "_id": "65ea0147db4a1c84c167426b", "Pharmacy": [{ "count": 5 }] },
  { "_id": "65ea0147db4a1c84c167426c", "Drugs24": [{ "count": 5 }] }
]
### Post user order

#### Method: POST

#### Endpoint:
/user-data/order

#### Request body:
```json
{
  "name": {
    "type": "String",
    "required": true
  },
  "email": {
    "type": "String",
    "required": true
  },
  "phone": {
    "type": "Number",
    "required": true
  },
  "address": {
    "type": "String",
    "required": true
  },
  "order": {
    "type": "Array",
    "require": true
  }
}
#### Response:

```json
{
  "message": "Successfully, your order will be fulfilled in the near future"
}
