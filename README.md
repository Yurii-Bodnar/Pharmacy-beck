# Pharmacy-beck
Документація
Base Url: https://paharmacy-beck-d4ecebd44ae2.herokuapp.com/

Get all product:
Method GET
/all-goods
Responses:
Code:200
[_id:65ea0147db4a1c84c167426d, Pharmacy3i:Array({5}),
_id:65ea0147db4a1c84c167426e,Pharmacy24h:Array({5})
_id:65ea0147db4a1c84c167426b,Pharmacy:Array({5}),
_id:65ea0147db4a1c84c167426c,Drugs24:Array({5})
]

Post user order
Mhetod POST
/user-data/order
Responses:
Code:200
Request body:
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  order: {
    type: Array,
    require: true,
  },
Response: 
 message: "Successfully, your order will be fulfilled in the near future",
