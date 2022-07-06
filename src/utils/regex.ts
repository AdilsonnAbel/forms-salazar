export const regexEmail: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// export const regexText: RegExp = /^[a-zA-Z ]+$/ ;
// export const regexText: RegExp = /^\w+( \w+)*$/ ;
// export const regexText: RegExp = /^([a-zA-Z])+(\s)+[a-zA-Z]+$/ ;
export const regexFN: RegExp = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
export const regexLN: RegExp = /^([a-zA-Z])+( [a-zA-Z]+$)/;

// export const regexPassword : RegExp = /^((?=(.*[\d0-9\@\&#\$\?\%!\|(){}[\]]){2,})(?=(.*[a-zA-Z]){2,}).{8,})$/;
// export const regexPassword : RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
export const regexPassword : RegExp = /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;