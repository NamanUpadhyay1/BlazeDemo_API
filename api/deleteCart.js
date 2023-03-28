const axios = require('axios')
const { expect } = require('chai')
const utils = require('../helpers/utils')
const viewCartUrl = 'https://api.demoblaze.com/deletecart'


class DeleteCart
{
    static async deleteItemFromCart()
    {
        const payload =
        {
            "cookie":"namann"
        }

        await axios.post(viewCartUrl, payload)
        .then(async function (response)
        {
            await utils.statusCodeValidate(response, 200)
            console.log(response.data + '_____________')
        })
    }
}
module.exports = DeleteCart