document.addEventListener('DOMContentLoaded', () => {
    const tg = window.Telegram.WebApp;
    const userInfo = document.getElementById('user-info');
    const greeting = document.getElementById('greeting');
    const startBtn = document.getElementById('start-btn');
    const garden = document.getElementById('garden');
    const plantBtn = document.getElementById('plant-btn');
    const sellBtn = document.getElementById('sell-btn');
    const plants = document.getElementById('plants');

    // Initialize Telegram WebApp
    tg.ready();

    // Display user information
    greeting.innerText = `Hello, ${tg.initDataUnsafe.user.first_name}!`;

    // Event listener for start button
    startBtn.addEventListener('click', () => {
        userInfo.classList.add('hidden');
        garden.classList.remove('hidden');
    });

    // Event listener for plant button
    plantBtn.addEventListener('click', () => {
        const newPlant = document.createElement('li');
        newPlant.innerText = 'Microgreens';
        plants.appendChild(newPlant);
        tg.sendData(JSON.stringify({ action: 'plant', plant: 'microgreens' }));
    });

    // Event listener for sell button
    sellBtn.addEventListener('click', () => {
        if (plants.children.length > 0) {
            plants.removeChild(plants.lastChild);
            tg.sendData(JSON.stringify({ action: 'sell', plant: 'microgreens' }));
        } else {
            alert('No microgreens to sell!');
        }
    });
});
