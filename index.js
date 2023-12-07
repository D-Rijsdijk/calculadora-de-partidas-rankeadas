let victories = 85;
let defeats = 1;
let rank;
let balanceWins;

function calculateRank (){
    balanceWins = victories - defeats;

    if(balanceWins<=10){
        rank = "ferro";
    }else if (balanceWins>=11 && balanceWins<=20){
        rank = "bronze";
    }else if(balanceWins>=21 && balanceWins<=50){
        rank = "prata";
    }else if(balanceWins>=51 && balanceWins<=80){
        rank = "ouro";
    }else if(balanceWins>=81 && balanceWins<=90){
        rank = "diamante";
    }else if(balanceWins>=91 && balanceWins<=100){
        rank = "lendário";
    }else if(balanceWins>=101){
        rank = "imortal";
    }
}

calculateRank ()

console.log("O herói tem um aproveitamento de " +balanceWins+ " batalhas e está no nível de " +rank)