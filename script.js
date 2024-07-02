
const buttons = document.querySelectorAll('.button1');
buttons.forEach(button => {
            button.addEventListener('click', function() {
                window.location.href = 'contact.html'; 
            });
        });