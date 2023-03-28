const date = new Date().getTime()
const userName = `naman${date}`

const register = require('../api/register')
const login = require('../api/login')
const addToCart = require('../api/addToCart')
const viewCart = require('../api/viewCart')
const deleteCart = require('../api/deleteCart')

describe('Verify the Registration POST api', async()=>
{
    it('Register with valid credentials', async()=>
    {
        await register.registerPostRequest(userName)
    })

    xit('Register with invalid credentials', async ()=>
    {
        await register.invalidRegisterPostRequest(userName)
    })
})

describe('Verify the Login POST api', async()=>
{
    it('Login with valid credentials', async()=>
    {
        await login.loginPostRequest()
    })

    xit('Fail Login with invalid credentials', async()=>
    {
        await login.failLoginPostRequest()
    })
})

describe('Verify the Add To Cart API', async()=>
{
    it('Add To Cart for Mobile Samsung galaxy s6', async()=>
    {
        await addToCart.phoneAddToCartPostRequest()
    })

    it('Add To Cart for Laptop Sony vaio i5', async()=>
    {
        await addToCart.laptopAddToCartPostRequest()
    })

    it('Add To Cart for Monitor Apple monitor 24', async()=>
    {
        await addToCart.monitorAddToCartPostRequest()
    })
})

describe('Verify the View Cart button API', async()=>
{
    it('View Cart should list all the items', async()=>
    {
        await viewCart.viewCartPostRequest()
    })
})

describe('Verify the Delete Cart button API', async()=>
{
    it('Delete should delete an item from cart', async()=>
    {
        await deleteCart.deleteItemFromCart()
    })
})