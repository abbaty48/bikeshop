import { http, HttpResponse } from 'msw'
import { db } from '../db';
import { IUser } from '../types';

/*
    POST  /session - login user
    DELETE /session - logout user
    GET /session - get the current login users
*/
export const userHandlers = [
    /* GET /users - get users or a user with an id */
    http.get('/api/users?id', ({ params }) => {
        let payload = null
        if (params.id) {
            payload = db().get('users').find(u => u.id === params.id)
        } else {
            payload = db().get('users')
        }
        return HttpResponse.json(payload)
    }),
    /* POST /users - add a new user */
    http.post('/api/users', ({ request }) => {
        db().post('users', (users) => [...users, request.body as IUser])
        return HttpResponse.redirect('/', 200)
    }),
    /* DELETE /session - logout the current login users */
    http.delete('/api/session', () => {
        sessionStorage.removeItem('u_session')
        return HttpResponse.redirect('/', 200)
    })
]
