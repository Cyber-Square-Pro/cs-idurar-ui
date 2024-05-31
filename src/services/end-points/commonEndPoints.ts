import { CustomEndPoints } from "../../types/endpoints";
import { authTransform } from "../transforms/auth";
import { customTransform } from "../transforms/common";
 
export const commonMutations: CustomEndPoints = {
   
  login: {
    url: "/login",
    transformResponse: (res) => authTransform(res),
    method: "POST",
  },
};



export const commonQueries: CustomEndPoints = {
    profile: {
      url: "/profile",
      transformResponse: (res) => customTransform(res),
      method: "POST",
      tags: ["CART", "ORDER"],
    },
    countries: {
      url: "/country",
      transformResponse: (res) => customTransform(res),
      method: "POST",
    },
  };
