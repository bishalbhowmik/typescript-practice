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

console.log(person5);