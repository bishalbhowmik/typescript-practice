type Fresher ={
    name: string
}

type JuniorEngineer ={
    
    age:number,
    experience:string
}

const newEngineer : Fresher | JuniorEngineer ={
    name: 'Joy',
    age:23,
    experience: '6 Month',

}


console.log(newEngineer);


type SeniorEngineer=JuniorEngineer & {
    title:string,
    
}

const newEngineer2 : SeniorEngineer ={
    age:45,
    experience:'10 year',
    title: 'Software '
}

console.log(newEngineer2);
