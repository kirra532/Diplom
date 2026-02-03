document.addEventListener("DOMContentLoaded", () => {
    console.log("Добро пожаловать в кафе 'Вкусняшка'!");

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
});
