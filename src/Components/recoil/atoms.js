// webserver\src\recoil\atoms.js
import { atom } from "recoil";

function localStorageEffect(key) {
  return ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };
}

export const userDetailsAtom = atom({
  key: "userDetailsAtom",
  default: {
    id: "",
    username: "",
    firstName: "",
    lastName: "",
    mobile: "",
    address: "",
    email: "",
    profile: "",
    token: "",
  },
  effects_UNSTABLE: [localStorageEffect("userDetailsAtom")],
});

export const isAuthenticatedAtom = atom({
  key: "isAuthenticatedAtom",
  default: false,
  effects_UNSTABLE: [localStorageEffect("isAuthenticatedAtom")],
});
