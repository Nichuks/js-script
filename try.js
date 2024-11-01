console.log("Number from 11 to 20")
for (let i = 11; i <= 20; i++) {
    console.log(i)
}

console.log("Number from 20 to 11")
for (let i = 20; i >= 11; i--) {
    console.log(i);
}


let friends = ["Kristers", "Sandis", "Braiens", "Alfa", "Ligma"]


console.log("First name:", friend[0] )
console.log("Third name:", friend[2])

let friendsCount = friends.lenght;

console.log("Draugi");
for( let i = 0; i < friendsCount; i++) {
    console.log(`${i + 1}. ${friends[i]}`);
}