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

export function getUser(id: number): Promise<DataEnvelope<User>> {

    return api(`users/${id}`)

}

export function createUser(user: User): Promise<DataEnvelope<User>> {

    return api('users/', user, 'POST')
}

export function deleteUser(id: number): Promise<void> {
    
    return api(`users/${id}`, undefined, 'DELETE')

}

export function updateUser(user: User): Promise<DataEnvelope<User>> {

    return api(`users/`, user, 'PUT')

}