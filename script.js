let day = 1;
let money = 5000;
let health = 100;
let happiness = 50;

function updateUI() {
    document.getElementById('day').innerText = day;
    document.getElementById('money').innerText = money;
    document.getElementById('health').innerText = health;
    document.getElementById('happiness').innerText = happiness;
}

function work() {
    money += 5000;
    happiness -= 5;
    if (happiness < 0) happiness = 0;
    day++;
    document.getElementById('message').innerText = "You worked hard in Akwa and earned 5000 FCFA.";
    updateUI();
}

function rest() {
    if (money >= 2000) {
        money -= 2000;
        health += 10;
        if (health > 100) health = 100;
        day++;
        document.getElementById('message').innerText = "You rested at home. Health restored.";
    } else {
        document.getElementById('message').innerText = "You don't have enough money to rest!";
    }
    updateUI();
}

function explore() {
    if (money >= 5000) {
        money -= 5000;
        happiness += 10;
        if (happiness > 100) happiness = 100;
        day++;
        document.getElementById('message').innerText = "You explored Akwa and had a great time!";
    } else {
        document.getElementById('message').innerText = "You need 5000 FCFA to explore Akwa.";
    }
    updateUI();
}