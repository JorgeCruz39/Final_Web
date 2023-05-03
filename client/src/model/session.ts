/*  B"H
*/
import type { ObjectId } from "mongodb";
import { computed, reactive } from "vue";
import { useRouter } from "vue-router";
import * as myFetch from "./myFetch";
import type { Workout } from "./Workouts";
import * as users from "./users";
import type { DataEnvelope, DataListEnvelope } from "./myFetch";

const session = reactive({
    user: null as User | null,
    isLoading: false,
    messages: [] as {
        msg: string,
        type: "success" | "danger" | "warning" | "info",
    }[],
    redirectUrl: null as string | null,
})

export interface User {
    _id?: string
    id?: number;
    name: string;
    email?: string;
    photo?: string;
    password?: string;
    isAdmin?: boolean;
    workouts: Workout[];
    token?: string;
}

export function useSession() {
    return session;
}

export function api(url: string, data?: any, method?: string, headers?: any) {
    session.isLoading = true;

    if(session.user?.token){
        headers = {
            "Authorization": `Bearer ${session.user.token}`,
            ...headers,
        }
    }

    return myFetch.api(url, data, method, headers)
        .catch(err => {
            console.error({err});
            session.messages.push({
                msg: err.message  ?? JSON.stringify(err),
                type: "danger",
            })
        })
        .finally(() => {
            session.isLoading = false;
        })
}

export function useLogin() {
    const router = useRouter();

    return async function() {
        const response = await api("users/login", {
            "email": "john@doe.com",
            "password": "123456"
        });

        session.user = response.data.user;
        if(!session.user) {
            addMessage("User not found", "warning");
            return;
        }
        session.user.token = response.data.token;

        router.push(session.redirectUrl ?? "/");
        session.redirectUrl = null;
    }
}

export const totalWeight = computed(() =>  session.user?.workouts.reduce((total, workout) => total + workout.weight, 0));

export async function loginWithServer(email: string, password: string): Promise<User> {
      
    
    const person = await api('users/login', {email, password}, 'POST');

    session.user = person.data.user;

    if(session.user) {
    const router = useRouter();
    session.user.token = person.data.token;
    addMessage("Login Success", "success");
    router.push('/');
    }

    return person.data.user;
    

    

}

//get the user's workouts from session
export function useWorkout() {
    return session.user?.workouts;
}

//function to add a workout to the user 

export function addWorkout(workout: string, weight: number) {
    if(workout !== "" && weight > 0)
   { session.user?.workouts.push({workout, weight});}
}



export function loginWithUser(user: User) {
    session.user = user;
}

export function useLogout() {
    const router = useRouter();
    
    return function(){
        console.log({router});
        session.user = null;

        router.push("/login");
    }
}

export function addMessage(msg: string, type: "success" | "danger" | "warning" | "info") {
    console.log({msg, type});
    session.messages.push({
        msg,
        type,
    })
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

export const recentWorkie = computed(() => session.user?.workouts[session.user?.workouts.length - 1]);


export function updateUser(user: User): Promise<DataEnvelope<User>> {

    return api(`users/`, user, 'PUT')

}

export function deleteMessage(index: number) {
    session.messages.splice(index, 1);
}