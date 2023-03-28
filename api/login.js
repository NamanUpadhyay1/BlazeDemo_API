const axios = require('axios')
const { expect } = require('chai')
const utils = require('../helpers/utils')
const loginUrl = 'https://api.demoblaze.com/login'

class Login 
{
    static async loginPostRequest()
    {
        const payload = 
        {
            "username":"namann",
            "password":"bmFtYW5u"
        }

        await axios.post(loginUrl, payload)
        .then(function async (response)
        {
            utils.statusCodeValidate(response, 200)
            console.log(response.data)
        })
    }

    static async failLoginPostRequest()
    {
        const payload = 
        {
            "username":"namann",            
        }

        await axios.post(loginUrl, payload)
        .then(async function  (response)
        {
            await utils.statusCodeValidate(response, 400)
            console.log((response.data))
            const errorMsg = JSON.stringify(response.data)
            expect(errorMsg).to.contain('{"errorMessage":"Bad parameter, missing username"}')
        })
    }
}
module.exports = Login