// export interface UserSettings{
//     name?:string,
//     email:string;
//     password:string;
//     locations?:string,
//     username?:string,
//     policy?:boolean,
    
// }

export class User {
    public name?:string;
    public email?:string;
    public password?:string;
    public locations?:string;
    public username?:string;
    public policy?:boolean;


    constructor(email:string, password:string,name:string,username:string){
        this.name=name;
        this.email=email;
        this.password=password;
        // this.locations=locations;
        this.username=username;
        // this.policy=policy;
    }

}