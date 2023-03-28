const axios = require('axios')
const { expect } = require('chai')
const utils = require('../helpers/utils')
const viewCartUrl = 'https://api.demoblaze.com/viewcart'

class ViewCart
{
    static async viewCartPostRequest()
    {
        const payload = 
        {
            "cookie":"bmFtYW5uMTY4MDE1NA==",
            "flag":true
        }

        await axios.post(viewCartUrl, payload)
        .then(async function (response)
        {
            await utils.statusCodeValidate(response, 200)
            console.log(JSON.stringify(response.data))
        })
    }
}
module.exports = ViewCart