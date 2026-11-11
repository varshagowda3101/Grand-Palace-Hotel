
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Grand Palace Hotel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/style.css">
    </head>
    <body>
        <nav>
            <h2>♛ Grand Palace</h2>
            <div>
                <a href="/">Home</a>
                <a href="/menu">Menu</a>
                <a href="/about">About</a>
            </div>
        </nav>

        <section class="hero">
            <div class="hero-content">
                <p class="gold">WELCOME TO LUXURY</p>
                <h1>Experience Royal<br>Comfort & Elegance</h1>
                <p>Where luxury meets unforgettable hospitality.</p>
                <a class="btn" href="/menu">Explore Our Menu →</a>
            </div>
        </section>

        <section class="welcome">
            <p class="gold">YOUR PERFECT GETAWAY</p>
            <h2>Welcome to Grand Palace</h2>
            <p>Discover elegant rooms, delicious cuisine and
            exceptional hospitality for every occasion.</p>
        </section>

        <section class="features">
            <div class="card">
                <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600" alt="Luxury hotel room">
                <h3>Luxury Rooms</h3>
                <p>Relax in style and comfort.</p>
            </div>
            <div class="card">
                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600" alt="Fine dining restaurant">
                <h3>Fine Dining</h3>
                <p>Enjoy delicious, memorable meals.</p>
            </div>
            <div class="card">
                <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600" alt="Hotel swimming pool">
                <h3>Premium Relaxation</h3>
                <p>Make every moment special.</p>
            </div>
        </section>

        <footer>© 2026 Grand Palace Hotel | Luxury With Care</footer>
    </body>
    </html>
    `);
});

app.get('/menu', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Our Menu | Grand Palace</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/style.css">
    </head>
    <body>
        <nav>
            <h2>♛ Grand Palace</h2>
            <div><a href="/">Home</a><a href="/menu">Menu</a><a href="/about">About</a></div>
        </nav>
        <section class="welcome">
            <p class="gold">TASTE THE DIFFERENCE</p>
            <h1>Our Special Menu</h1>
            <p>Fresh flavours, made with love.</p>
        </section>
        <section class="menu-list">
            <div class="dish"><h3>🍛 Indian Thali</h3><p>Traditional Indian meal</p><b>₹200</b></div>
            <div class="dish"><h3>🍕 Italian Pizza</h3><p>Cheesy and delicious</p><b>₹250</b></div>
            <div class="dish"><h3>🍝 Special Pasta</h3><p>Creamy Italian favourite</p><b>₹220</b></div>
            <div class="dish"><h3>🍨 Ice Cream</h3><p>A sweet ending</p><b>₹100</b></div>
        </section>
        <footer><a href="/">← Back to Home</a></footer>
    </body>
    </html>
    `);
});

app.get('/about', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>About Us | Grand Palace</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/style.css">
    </head>
    <body>
        <nav>
            <h2>♛ Grand Palace</h2>
            <div><a href="/">Home</a><a href="/menu">Menu</a><a href="/about">About</a></div>
        </nav>
        <section class="about">
            <p class="gold">OUR STORY</p>
            <h1>More Than Just a Stay</h1>
            <p>Grand Palace Hotel brings together comfort,
            elegance and warm hospitality. Our goal is to make
            every guest feel welcome and every visit memorable.</p>
            <a class="btn" href="/menu">Discover Our Menu</a>
        </section>
        <footer>© 2026 Grand Palace Hotel</footer>
    </body>
    </html>
    `);
});

app.listen(3000, () => {
    console.log('Hotel website: http://localhost:3000');
});
