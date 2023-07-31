
const friends =['ork','joy','ovi'];
const villFriends =['kajal','foyez'];

friends.push(...villFriends);

console.log(friends);

const multiply = (n1:number,n2:number):number => {
    const a= n1/n2;
    return a;
}

console.log(multiply(3,5));

const multiplyThree =(n1:number,n2:number,n3:number):void =>{
    const n = n1*n2*n3;
    const m = n3*n3;
    console.log(n);
    console.log(m);

}

multiplyThree(3,3,3);



const person:{
    name:string,
    age?:number,
    balance:number,
    addBalance (money:number):void
   
} = {
    name:'bishal',
    balance:50,
    addBalance(money:number) {
        console.log(`Current balance is ${this.balance+money}`);
    }
}

console.log(person.addBalance(30))

console.log(person)



// Literal types 

const person2:{
    title: string,
    name: string,
    age: number,
    isEmployee:boolean
}= {
    title:'Junior Developer',
    name:'Sadik',
    age: 25,
    isEmployee:true
}

person2.title ='Mid Level Developer';


function operation (n1:number, n2:number=30):number {
    return n1+n2;
}

//Default Value cannot declare in first parameter

console.log(operation(50)); 

