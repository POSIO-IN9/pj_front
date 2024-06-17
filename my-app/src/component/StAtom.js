import { atom } from "recoil";
export const isLogin = atom({
    key : "isLogin",
    default : false
});
export const username = atom({
    key : "username",
    default : null
})