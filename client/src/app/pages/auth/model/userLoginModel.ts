export interface userLogin{
    email : string;
    password : string;
}

export interface AuthResponse {
    success:boolean,
        email:string,
        token:string
  }