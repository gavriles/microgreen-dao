<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini Green DAO</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <script src="app.js" defer></script>
</head>
<body>
    <div id="app">
        <h1>Welcome to Mini Green DAO</h1>
        <div id="user-info">
            <p id="greeting"></p>
            <button id="start-btn">Start</button>
        </div>
        <div id="garden" class="hidden">
            <h2>Your Garden</h2>
            <ul id="plants"></ul>
            <button id="plant-btn">Plant Microgreens</button>
            <button id="sell-btn">Sell Microgreens</button>
        </div>
    </div>
</body>
</html>
