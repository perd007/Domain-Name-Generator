let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

//genero los nombres de dominio
for(let i=0;i<pronoun.length;i++){
    for(let j=0;j<adj.length;j++){
        for(let k=0;k<noun.length;k++){
                console.log(pronoun[i]+noun[k]+".com");
        }
    }
}
