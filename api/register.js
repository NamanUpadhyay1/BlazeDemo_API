const axios = require('axios')
const utils = require('../helpers/utils')
const registerUrl = 'https://api.demoblaze.com/signup'
const { expect } = require('chai')

class Register
{
    static async registerPostRequest(userName)
    {
        const payload = 
        {
            "username":userName,
            "password":"password123"
        }

        const response = await axios.post(registerUrl, payload)
        .then(async function (response)
        {
            await utils.statusCodeValidate(response, 200)
        })
    }
    static async invalidRegisterPostRequest(userName)
    {
        const payload = 
        {
            "username":userName
        }

        const response = await axios.post(registerUrl, payload)
        .then(async function (response)
        {
            console.log(JSON.stringify(response.data));
            await utils.statusCodeValidate(response, 400)
            const errorMsg = JSON.stringify(response.data)
            expect(errorMsg).to.contain('{"errorMessage":"Bad parameter, missing username or password"}')
        })
    }
}

module.exports = Register