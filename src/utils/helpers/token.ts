import {
    authAccessToken,
    authRefreshToken,
  } from "../constants/common";
  import Cookies from "js-cookie";

export const getAccessToken = (): string | null => {
    const accessToken = Cookies.get(authAccessToken);
    return accessToken ? accessToken : null;
  };
  
  export const getRefreshToken = () => {
    const refreshToken = Cookies.get(authRefreshToken);
    return refreshToken ? refreshToken : null;
  };