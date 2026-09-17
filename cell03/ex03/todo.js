const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('newBtn');

loadCookies();

newBtn.addEventListener('click', function() {
    const text = prompt('Enter a new TO DO:');
    if (text && text.trim() !== '') {
        createTodo(text.trim(), true);
    }
});

function createTodo(text, isNew = true) {
    const div = document.createElement('div');
    div.textContent = text;

    div.addEventListener('click', function() {
        if (confirm('Do you want to remove this TO DO?')) {
            div.remove();
            saveCookies();
        }
    });

    ftList.prepend(div);

    if (isNew) {
        saveCookies();
    }
}

function saveCookies() {
    const items = [];
    const children = ftList.children;
    
    for (let i = 0; i < children.length; i++) {
        items.push(children[i].textContent);
    }
    
    document.cookie = "todo_list=" + encodeURIComponent(JSON.stringify(items)) + ";path=/;max-age=31536000";
}

function loadCookies() {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'todo_list' && value) {
            try {
                const items = JSON.parse(decodeURIComponent(value));
                for (let i = items.length - 1; i >= 0; i--) {
                    createTodo(items[i], false);
                }
            } catch (e) {
                console.error("Failed to parse cookie data", e);
            }
        }
    }
}