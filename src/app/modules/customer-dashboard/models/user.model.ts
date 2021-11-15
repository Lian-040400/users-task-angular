export class User {
    id!:number;
    age!: number;
    firstName!: string;
    lastName!: string;
    date!: Date;
    email!: string;
    
    constructor(data: any) {
        this.id=data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.date = new Date(data.date);
        this.email = data.email;
        this.age = new Date().getFullYear() - this.date.getFullYear(); 
    }
}