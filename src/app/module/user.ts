export class User{
    id:number;
    username:string;
    name:string;
    email:string;
    phone:string;
    aadhar:string;
    address:string;
    password:string;
    
    }
    export class SavingAcco{
        sid:number;
        accountNo:string;
        totalAmount:string;
        accountType:string;
    }
    export class PrimaryAcco{
        pid:number;
        accountNo:string;
        totalAmount:string;
        accountType:string;
    }

    export class WithdrolReq{
        wid:number
        userId:string;
		username:string;
		withdrol_amount :string;
		accountNo :string;
		status :number;
    }

    export class DipositReq{
        did:number
        userId:string;
		username:string;
		dipositAmount :string;
		accountNo :string;
		status :number;
    }
    export class CheckBookReq{
        cid:number;
    userId :string;
	username :string;
	accountNo :string;
	description:string;
	status:number;
    }
    export class TransferReq{
         tid:number;
         receiverAccountNo:string;
         senderAccountNo:string;
         transferAmount: string;
         status:number;
    }
