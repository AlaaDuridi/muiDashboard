export interface User {
    userId: string ;
    email: string;
    phoneNumber?: string|undefined;
    [key: string]: string | undefined;

  }