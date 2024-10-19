function uploadMaterial() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (file) {
        const materialsList = document.getElementById('materialsList');
        const listItem = document.createElement('div');
        listItem.textContent = `Загружен файл: ${file.name}`;
        materialsList.appendChild(listItem);
    } else {
        alert('Выберите файл для загрузки.');
    }
}

function submitQuiz() {
    alert('Тест отправлен! Ответы будут проверены автоматически.');
}
