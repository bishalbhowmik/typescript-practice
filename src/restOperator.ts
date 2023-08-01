

const friendList = (...friends:string[]):void =>{
    friends.forEach(friend=> console.log(friend));
}


friendList('Karim','Rahim','Abdul');