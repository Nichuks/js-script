
console.log("Numbers from 11 to 20:");
for (let i = 11; i <= 20; i++) {
    console.log(i);
}

console.log("Numbers from 20 to 11:");
for (let i = 20; i >= 11; i--) {
    console.log(i);
}


let friends = ["Kristers", "Sandis", "Līga", "Agata", "Braiens"];


console.log("First friend:", friends[0]);
console.log("Third friend:", friends[2]);


let friendsCount = friends.length;


console.log("Draugi");
for (let i = 0; i < friendsCount; i++) {
    console.log(`${i + 1}. ${friends[i]}`);
}
