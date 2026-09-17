$(document).ready(function() {
    loadCookies();

    $('#newBtn').click(function() {
        const text = prompt('Enter a new TO DO:');
        if (text && text.trim() !== '') {
            createTodo(text.trim(), true);
        }
    });

    function createTodo(text, isNew = true) {
        const $div = $('<div></div>').text(text);

        $div.click(function() {
            if (confirm('Do you want to remove this TO DO?')) {
                $(this).remove();
                saveCookies();
            }
        });

        $('#ft_list').prepend($div);

        if (isNew) saveCookies();
    }

    function saveCookies() {
        const items = [];
        $('#ft_list div').each(function() {
            items.push($(this).text());
        });
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
});