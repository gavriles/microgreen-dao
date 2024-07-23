# Microgreens DAO MVP

A minimal viable product (MVP) for the Microgreens DAO project using Telegram bot, Node.js, MongoDB, and the TON blockchain.

## Features
- User registration and authorization
- Virtual garden management
- Planting and selling microgreens
- Referral system
- Integration with TON blockchain for tokenization and smart contracts

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- TONClient

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/gavriles/microgreens-dao-mvp.git
    ```
2. Install dependencies:
    ```sh
    cd microgreens-dao-mvp
    npm install
    ```
3. Create a `.env` file with your Telegram bot token and MongoDB connection string:
    ```env
    BOT_TOKEN=your_telegram_bot_token
    MONGO_URI=your_mongodb_connection_string
    ```
4. Start the server:
    ```sh
    node index.js
    ```

## Usage
- `/start` - Register and authorize
- `/my_garden` - View your garden
- `/plant` - Plant microgreens
- `/sell` - List microgreens for sale
- `/refer` - Generate a referral link

## License
This project is licensed under the MIT License.
