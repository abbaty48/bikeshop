import { http, HttpResponse } from 'msw'
import B1 from '@assets/images/store/b1.avif'
import B2 from '@assets/images/store/b2.avif'
import B3 from '@assets/images/store/b3.avif'
import B4 from '@assets/images/store/b4.avif'
import B5 from '@assets/images/store/b5.avif'
import B6 from '@assets/images/store/b6.avif'
import B7 from '@assets/images/store/b7.avif'
import B8 from '@assets/images/store/b8.avif'
import B9 from '@assets/images/store/b9.avif'
import B10 from '@assets/images/store/b10.avif'

const presentations = [
    { id: 1, feature: B1, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.' },
    { id: 2, feature: B2, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam qui eius dolores sit, at corporis suscipit architecto quos voluptates numquam a nostrum voluptatibus ea eligendi vitae dignissimos ipsam laudantium dolor!' },
    { id: 3, feature: B3, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quis recusandae ut sapiente fugiat? Quidem possimus tempore, asperiores, autem maiores culpa odit alias ipsa omnis, illum ipsum repudiandae debitis earum.' },
    { id: 4, feature: B4, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptate magnam eveniet architecto nulla fugit ex blanditiis, odit officiis cupiditate nemo sequi! Expedita eius sapiente impedit, vero minima quaerat consequatur.' },
    { id: 5, feature: B5, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita repudiandae eveniet similique? Sint quam cumque incidunt dignissimos enim dolore praesentium? Sint libero ea sunt soluta est quibusdam accusantium, commodi distinctio.' },
    { id: 6, feature: B6, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, reiciendis velit. Enim rerum id, odit quam quisquam ab repudiandae unde nihil est, ex libero? A voluptate harum cupiditate aut nobis!' },
    { id: 7, feature: B7, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum suscipit, perferendis est maiores quis porro adipisci architecto, necessitatibus enim voluptatem, provident repellat ipsum non voluptates impedit aperiam dolores laboriosam doloremque.' },
    { id: 8, feature: B8, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde quisquam magni ipsam, at praesentium minima dolores facere nihil tempora explicabo quo expedita quos veritatis. Aperiam sunt quae minus quisquam!' },
]

export const presentationHandlers = [
    http.get('/api/presentations/:cursor', async ({ params }) => {
        await new Promise(resolve => setTimeout(resolve, 500))
        return HttpResponse.json({
            presentation: presentations[Number(params.cursor ?? 0) % presentations.length],
            total: presentations.length,
        })
    }
    ),
    http.get('/api/presentations/:id', ({ params }) => HttpResponse.json(presentations.find(p => String(p.id) === params.id))),
]
