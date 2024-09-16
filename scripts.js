/* General styles */
body {
    font-family: 'Lora', serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.header {
    background-image: url('your-background-image.jpg');
    background-size: cover;
    text-align: center;
    padding: 50px 0;
    color: #5c7457;
}

.top-bar {
    background-color: #c0a892;
    padding: 10px;
    text-align: center;
    font-family: 'Raleway', sans-serif;
}

.header-content h1 {
    font-family: 'Playfair Display', serif;
    font-size: 48px;
}

.header-content p {
    font-family: 'Lora', serif;
    font-size: 24px;
}

.welcome-section, .planning-section, .gallery-section {
    padding: 50px 10%;
}

.welcome-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.welcome-image img {
    max-width: 400px;
    border-radius: 10px;
}

.welcome-text h2, .planning-text h2 {
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    color: #5c7457;
}

button {
    background-color: #5c7457;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #3d5441;
}

.planning-section {
    background-color: #f4f4f4;
    text-align: center;
}

.gallery-section {
    display: flex;
    justify-content: space-around;
    background-color: #f4f4f4;
}

.footer {
    background-color: #5c7457;
    color: white;
    text-align: center;
    padding: 20px 0;
    font-size: 14px;
}

/* Animations */
.header-logo {
    animation: fadeIn 3s ease-in-out;
}

.get-to-know-btn {
    animation: slideInLeft 1.5s ease-in-out;
}

.view-offerings-btn {
    animation: slideInRight 1.5s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideInLeft {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}

@keyframes slideInRight {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
}

        