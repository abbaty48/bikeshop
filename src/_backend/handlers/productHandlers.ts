import { db } from '../db'
import { IProduct } from '../types';
import { http, HttpResponse } from 'msw'

async function queryProductsOrByPrice<TKind extends IProduct['kind']>(url: string, kind: TKind) {
    let products: IProduct[] = db().get('products').filter(p => p.kind === kind);
    let params = (new URL(url)).searchParams

    await new Promise(resolve => setTimeout(resolve, 1000))
    if (params.has('cursor')) {
        let cursor = Number(params.get('cursor')), limit = 8
        let startSlice = cursor * limit, endSlice = startSlice + limit
        products = db().get('products').filter(p => p.kind === kind).slice(startSlice, endSlice)
    }
    return params.has('price') ? HttpResponse.json(products.filter(b => b.price === +params.get('price')!)) :
        HttpResponse.json(products);
}

async function queryProduct(url: string, pathParams: Record<string, any>) {
    let products: IProduct[] = db().get('products').filter(p => p.kind === pathParams.kind);
    let params = (new URL(url)).searchParams;
    await new Promise(resolve => setTimeout(resolve, 1000));
    let cursor = Number(params.get('cursor')), limit = 8
    let startSlice = cursor * limit, endSlice = startSlice + limit;

    products = Array.from(params.entries()).map(([key, value]) => products.filter(p =>
        String(p[key as keyof IProduct]).match(new RegExp(value, 'ig'))
    )).flat().slice(startSlice, endSlice)
    return HttpResponse.json(products);
}

// NOTE: you could enhance this to support PUT,DELETE,POST
export const productHandlers = [
    /*
        GET /bikes - return all bikes
        GET /bikes?name /bikes?price /bikes?id
     */
    http.get('/api/bikes?cursor', ({ request }) => queryProductsOrByPrice(request.url, 'bike')),
    /*
        GET /accessories - return all bikes accessories
        GET /accessories - return all accessories with either id,price,name
    */
    http.get('/api/accessories', ({ request }) => queryProductsOrByPrice(request.url, 'accessory')),
    /*
        GET /api/products/search/:kind/:cursor - return result by product kind in a cursor
    */
    http.get('/api/products/search/:kind/:cursor', ({ request, params }) => queryProduct(request.url, params)),
]
