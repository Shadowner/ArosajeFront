import { defineStore } from "pinia";
import { USER_JWT } from '../types/JWT/USER_JWT';
import { REGISTERING_JWT } from '../types/JWT/REGISTERING_JWT';
import { VALIDATING_JWT } from "~/types/JWT/VALIDATING_JWT";
import { setNewCookie, eraseCookie, getCookie } from "~/util/cookie";
import { JWT_TYPE } from '../types/JWT/JWT_TYPE';


export const useUserStore = defineStore("user", () => {
    const JWT = ref('');
    const JWTPayload = computed<USER_JWT | REGISTERING_JWT | VALIDATING_JWT>(() => {
        if (JWT.value) {
            return parseJwt(JWT.value);
        }
        return null;
    });

    const isBotanist = computed<boolean>(() => {
        if (JWTPayload.value && JWTPayload.value.type === JWT_TYPE.USER) {
            return JWTPayload.value.roles.find(x => x.name === 'BOTANISTE') ? true : false;
        }
        return false;
    })

    const isAdmin = computed<boolean>(() => {
        if (JWTPayload.value && JWTPayload.value.type === JWT_TYPE.USER) {
            return JWTPayload.value.roles.find(x => x.name === 'ADMIN') ? true : false;
        }
        return false;
    })

    function update(newJWT: string) {
        console.log('updating jwt', newJWT)
        eraseCookie('jwt')
        JWT.value = newJWT;
        setNewCookie('jwt', JWT.value, 99);
    };

    function remove() {
        console.log('removing jwt', JWT.value)
        eraseCookie('jwt')
        JWT.value = '';
    };

    return {
        JWT,
        JWTPayload,
        update,
        remove,
        isBotanist,
        isAdmin
    };
})

function parseJwt(token: string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}