// export interface Infor {
//     Name: string;
//     phone: number;
//     company: string;
//     invitation: string;
//     status: string;
//     created?: Date;
  
//     updated?:Date;
//   }
  
  export interface client{
    _id : any;
    password : any;
    invitation:string;
    phone:number;
    company:string;
    email:string;
    name:string;
    created_at?:number;
    updated_at?:number;
    __v?:number;
    is_deleted: boolean;
  }

  export interface campaign{
    client : any;
    created_at?: any,
    description: string,
    end_at: any,
    is_deleted: boolean,
    listId: number,
    name: string,
    status: string,
    updated_at: any,
    __v:number,
    _id: any
  }
  