    // interface creating
   export  interface Iuser{
        id:string;
        role:"Student";
        password:string;
        name:{
            firstName:string,
            middleName?:string,
            lastName:string

        };
        dateOfBirth?:string;
        gender:"male" | "Female";
        email?:string;
        contactNo:string;
        Emergency:string;
        address:string;
        permanentAddress:string

    }
