/*  B"H
*/

import type { DataEnvelope, DataListEnvelope } from "./myFetch";
import { api } from "./session";

export interface User {
    
}

export function getProducts(): Promise<DataListEnvelope<Product>> {

    return api('products')

}

export function getProduct(id: number): Promise<DataEnvelope<Product>> {

    return api(`products/${id}`)

}

export function createProduct(product: Product): Promise<DataEnvelope<Product>> {
        return api('products', product)
}