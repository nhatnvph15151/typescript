import  { User }  from "../types/user";

import instance from "./instance";

export const signup = (User: User) => {
    const url = `/signUp`;
    return instance.post(url, User);
}
export const signin = (User: User) => {
    const url = `/signin`;
    return instance.post(url, User);
}