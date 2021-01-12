export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const passwordRegex = /^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])|(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^a-zA-Z0-9])|(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])).{10,}$/;
export const bigCharRegex = /[A-Z]/;
export const smallCharRegex = /[a-z]/;
export const specialCharOrDigitRegex = /(?=.*[\d$@.$!%*#?&])/;
export const stringOfNumbersRegex = /(^[0-9]*$)/;
export const shortRegonRegex = /^$|^\d{9}$/;
export const nipRegex = /^$|^\d{10}$/;
export const postalCodeRegex = /^$|^\d{2}-\d{3}$/;
