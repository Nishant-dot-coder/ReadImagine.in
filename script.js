
function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// cube
document.addEventListener('DOMContentLoaded', () => {
    const row1 = document.getElementById('row-1');
    const row2 = document.getElementById('row-2');

    const textsRow1 = ['S', 'C', 'H', 'O', 'L', 'A', 'R'];
    const textsRow2 = ['S', 'T', 'U', 'F', 'F', 'S'];

    const createCube = (text) => {
        const cube = document.createElement('div');
        cube.classList.add('cube');

        const faces = ['front', 'back', 'left', 'right', 'top', 'bottom'];
        faces.forEach(faceClass => {
            const face = document.createElement('div');
            face.classList.add('face', faceClass);
            face.textContent = text;
            cube.appendChild(face);
        });

        return cube;
    };

    textsRow1.forEach(text => {
        row1.appendChild(createCube(text));
    });

    textsRow2.forEach(text => {
        row2.appendChild(createCube(text));
    });

    document.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX / window.innerWidth - 0.5;
        const mouseY = event.clientY / window.innerHeight - 0.5;
        const cubes = document.querySelectorAll('.cube');

        cubes.forEach(cube => {
            const cubeX = mouseY * 360;
            const cubeY = mouseX * 360;
            cube.style.transform = `rotateX(${cubeX}deg) rotateY(${cubeY}deg)`;
        });
    });
});

// sphere
const sphere = document.querySelector('.sphere');

document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    sphere.style.transform = `rotateX(${y * 180}deg) rotateY(${x * 180}deg)`;
});

// colourful cursor

document.addEventListener('mousemove',function(s){
    let body=document.querySelector('body');
    let circle=document.createElement('span');
    let x=s.offsetX;
    let y=s.offsetY;
    circle.style.left= x+"px";
    circle.style.top=y+"px";
    let size=Math.random()*100;
    circle.style.width=30 +size +"px";
    circle.style.height=30 +size +"px";
    body.appendChild(circle);
    setTimeout(function(){
        circle.remove();
    },1800)

})

// GAME
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
// for toggleButton
document.addEventListener('DOMContentLoaded', function() {
    const mainDiv = document.getElementById('main-div');
    const toggleButton = document.getElementById('toggle-button');
    let isExpanded = false;

    toggleButton.addEventListener('click', function() {
        if (!isExpanded) {
            mainDiv.classList.remove('collapsed');
            mainDiv.classList.add('expanded');
            toggleButton.disabled = true; 
            isExpanded = true;
        }
    });
});
