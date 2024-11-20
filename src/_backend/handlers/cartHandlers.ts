import { http, HttpResponse } from 'msw'
import { IUser } from '../types'
import { db } from '../db'

/*
    POST  /cart - login user
    DELETE /cart - logout user
    GET /cart - get the current login users
*/
export const cartHandlers = [
    /* GET /cart - get all the carts of the current authenticated users */
    http.get('/api/:userId/carts', ({ }) => {
        const user = sessionStorage.getItem('u_session')
        if (!user) { return HttpResponse.json({ error: 'Not Authorized' }, { status: 401 }) }
        else {
            const carts = db().get('users').find(user => user.email === '')?.shopping?.carts;
            return HttpResponse.json(carts, { status: carts ? 200 : 404 })
        }
    }),
    /* PUT /carts/:id - add a cart by id of the current authenticated user */
    http.put('/api/:userId/carts/:id/:action', ({ params: { id, userId, action }, request: { body } }) => {
        let carts = db().get('users').find(user => user.email === userId)?.shopping?.carts;
        const product = db().get('products').find(p => p.id === id)
        if (carts && product) {
            switch (action) {
                case 'add': { carts.push({ id: product.id, item: product, quantity: 1, subPrice: product.price * 1, unitPrice: product.price }) } return HttpResponse.json({ status: 201, statusText: 'added' });
                case 'remove': { carts = carts.filter(c => c.id !== product.id) } return HttpResponse.json(true, { status: 202, statusText: 'removed' });
                case 'update': { carts = carts.map(cart => cart.id === id ? { ...cart, ...body } : cart) } return HttpResponse.json(true, { status: 201, statusText: 'updated' })
            }
        }
        return HttpResponse.json({ status: 301 })
    }),
    /* DELETE /carts/id - remove a cart by id of the current authenticated user. */
    http.delete('/api/:userId/carts/:id', ({ params }) => {
        const user = sessionStorage.getItem('u_session')
        if (!user) { return HttpResponse.json({ error: 'Not Authorized' }, { status: 401 }) }
        else {
            // const carts = db().get('users').find(user => user.email === '')?.shopping?.carts?.filter(cart => cart.id !== params.id);
            return HttpResponse.json(null, { status: 201 })
        }
    })
]
