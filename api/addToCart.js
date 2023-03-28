const axios = require('axios')
const { expect } = require('chai')
const utils = require('../helpers/utils')
const addToCartUrl = 'https://api.demoblaze.com/addtocart'


class AddToCart
{
    static async phoneAddToCartPostRequest()
    {
        const payload = 
        {
            "id":"0faacd9f-0848-ab8d-a4fb-423d728cff1e",
            "cookie":"bmFtYW5uMTY4MDE1NA==",
            "prod_id":1,
            "flag":true
        }

        await axios.post(addToCartUrl, payload)
        .then(async function (response)
        {
            await utils.statusCodeValidate(response, 200)
        })
    }

    static async laptopAddToCartPostRequest()
    {
        const payload =
        {
            "id":"721286fa-59c6-e2ba-f5a6-7c9e87e299e7",
            "cookie":"bmFtYW5uMTY4MDU5NQ==",
            "prod_id":8,
            "flag":true
        }

        await axios.post(addToCartUrl, payload)
        .then(async function (response)
        {
            await utils.statusCodeValidate(response, 200)
        })
    }
    static async monitorAddToCartPostRequest()
    {
        const payload = 
        {
            "id":"a968d0ee-5dc3-13b2-2f8b-2340abb8151b",
            "cookie":"bmFtYW5uMTY4MDU5NQ==",
            "prod_id":10,
            "flag":true
        }

        await axios.post(addToCartUrl, payload)
        .then(async function (response)
        {
            await utils.statusCodeValidate(response, 200)
        })
    }
}
module.exports = AddToCart