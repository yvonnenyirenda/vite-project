// recoil/atoms.js
import { atom } from "recoil";

export const userDetailsAtom = atom({
  key: "userDetails", // Unique key for this atom
  default: {
    userId: null,

    token: null,
  }, // Default value (empty user object)
});

export const isAuthenticatedAtom = atom({
  key: "isAuthenticated", // Unique key for authentication status
  default: false, // Default value: not authenticated
});
