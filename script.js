function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function generateNumber() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;

    if (!input1 || !input2) {
        alert("Please enter both strings.");
        return;
    }

    // Check if either input is "Nishant"
    if (input1 === "Nishant" || input2 === "Nishant" || input1 === "nishant" || input2 === "nishant") {
        document.getElementById('result').innerText = "Love Percentage: 100";
        return;
    }

    const combinedString = input1 + input2;
    let hash = 0;

    for (let i = 0; i < combinedString.length; i++) {
        hash = combinedString.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash; // Convert to 32bit integer
    }

    const number = Math.abs(hash) % 20 + 80; // Generate number between 80 and 99
    document.getElementById('result').innerText = `Love Percentage: ${number}`;
}

function tossCoin() {
    const coin = document.getElementById('coin');
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    coin.style.transform = 'rotateY(180deg)';
    setTimeout(() => {
        coin.innerText = result;
        coin.style.transform = 'rotateY(0deg)';
    },300 );
}

