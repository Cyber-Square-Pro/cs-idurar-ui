import Cookies from "js-cookie";
import { authAccessToken, authRefreshToken } from "../../utils/constants/common";
 
export const authTransform = (res : any) => {
    if(res.statusCode == 200){
        const { accessToken, refreshToken } = res.data.token;
        Cookies.set(authAccessToken, accessToken, { expires: 7 });
        Cookies.set(authRefreshToken, refreshToken, { expires: 7 });
    }
    return res;
};
