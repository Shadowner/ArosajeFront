import { useUserStore } from '../store/UserStore';
import { getCookie } from '../util/cookie';
import { JWT_TYPE } from '../types/JWT/JWT_TYPE';
export default defineNuxtRouteMiddleware((to, from) => {
    const store = useUserStore();

    if (to.path.includes("/home") && !store.JWT) {
        return navigateTo("/login");
    }

    if (store.JWT && store.JWTPayload.type === JWT_TYPE.USER && to.path.includes("/register")) {
        return navigateTo("/home");
    }
})
