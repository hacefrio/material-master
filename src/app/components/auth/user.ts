export interface UserI {
    email:string ;
    password:string;
}

export interface UserRegisterI {
    email:string ;
    firstName:string;
    lastName:string;
    age:number;
    password:string;
}
export interface UserResponseI extends UserI {
    message: string;
    token: string;
}