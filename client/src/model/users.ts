/*  B"H
*/

import type { DataEnvelope, DataListEnvelope } from "./myFetch";
import { api } from "./session";

export interface User {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    role: string;
    token: string;
    
}

export function getUsers(): Promise<DataListEnvelope<User>> {

    return api('users')

}

export function getProduct(_id: number): Promise<DataEnvelope<User>> {

    return api(`users/${_id}`)

}

export function createUser(user: User): Promise<DataEnvelope<User>> {
        return api('user', user)
}