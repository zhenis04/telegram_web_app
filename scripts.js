function uploadMaterial() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (file) {
        const materialsList = document.getElementById('materialsList');
        const listItem = document.createElement('div');
        listItem.textContent = `File Uploaded: ${file.name}`;
        materialsList.appendChild(listItem);
    } else {
        alert('Choose a file to upload');
    }
}

function submitQuiz() {
    alert('JAVA test submitted!  Answers will be checcked automatically.');
}

function submitPythonQuiz() {
    alert('Python test submitted! Answers will be checcked automatically.');
}
function submitQuiz(formId) {
    alert('Test submitted! Answers will be checcked automatically.');
    const form = document.getElementById(formId);
    form.reset();
}
