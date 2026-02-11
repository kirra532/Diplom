const loginForm = document.getElementById('login-form');
const message = document.getElementById('message');
const userInfo = document.getElementById('user-info');
const userNameSpan = document.getElementById('user-name');
const logoutButton = document.getElementById('logout-button');

// Простой объект пользователей для демонстрации
const users = {
    'admin': 'password123',  // Логин: admin, Пароль: password123
    'user': 'mypassword'      // Логин: user, Пароль: mypassword
};

// Обработка отправки формы для логина
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // предотвратить отправку формы

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Проверка логина и пароля
    if (users[username] && users[username] === password) {
        // Успешный вход
        message.textContent = 'Вы успешно вошли в систему!';
        userNameSpan.textContent = username;
        userInfo.style.display = 'block';
        loginForm.style.display = 'none';
    } else {
        // Неверный ввод
        message.textContent = 'Неверный логин или пароль. Попробуйте снова.';
    }
});

// Обработка выхода
logoutButton.addEventListener('click', () => {
    userInfo.style.display = 'none';
    loginForm.style.display = 'block';
    message.textContent = '';
});

// Обработка отправки формы отзыва
const reviewForm = document.getElementById('review-form');
const reviewsContainer = document.getElementById('reviews-container');

reviewForm.addEventListener('submit', (e) => {
    e.preventDefault(); // предотвратить отправку формы

    const reviewText = document.getElementById('review-text').value;
    
    // Создание нового элемента отзыва
    const newReview = document.createElement('p');
    newReview.textContent = `Вы: "${reviewText}"`;
    
    // Добавление нового отзыва в контейнер
    reviewsContainer.appendChild(newReview);
    
    // Очистка текстового поля
    document.getElementById('review-text').value = '';
});
