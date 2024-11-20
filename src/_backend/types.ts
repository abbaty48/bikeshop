export interface IUser {
    id: string;
    email: string;
    name: string;
    shopping?: {
        carts?: ICart[],
        orders?: ICart[],
        pendings?: ICart[]
    }
}

export interface ISession {
    user: IUser;
    date: Date;
}

export interface IProduct {
    id: string;
    name: string;
    image: string;
    price: number;
    description: string;
    kind: 'bike' | 'accessory',
}

export interface ICart {
    id: string;
    item: IProduct;
    unitPrice: number;
    subPrice: number;
    quantity: number;
}

export type TDatabase = {
    users: IUser[];
    products: IProduct[];
}
