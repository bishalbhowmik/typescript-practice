type PersonInfo = {
    name:string;
    age: number;
    isEmployee: boolean;
    jobTitle?: string
}


const person5:PersonInfo ={
    name: "Ashik",
    age:24,
    isEmployee:true,
    jobTitle: 'Junor Software Engineer'
}

const person6:PersonInfo ={
    name:'Abdul',
    age:30,
    isEmployee:false
}

console.log(person5);


type Married = boolean;

const isMarried:Married = false;

console.log(isMarried);

type Name= string;

const employeeName:Name = 'Sagor';

console.log(employeeName);


const calculate= (
    number1:number,
    number2:number,
    operation: (x:number,y:number)=>number
    )=>{
        return operation(number1,number2);
    }

const sum= calculate(10,20,(x,y)=>x+y);


console.log(sum);

type Opt = (a:number,b:number)=>number


const calculate2 =(n1:number,n2:number, opera: Opt)=>{
    return opera(n1,n2);
}

const sub = calculate2(40,30,(a,b)=>a-b)

console.log(sub);

