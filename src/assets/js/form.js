
(function() {
    let forms = document.querySelectorAll('.form');

    if (forms.length === 0) {
        return;
    }

    let serialize = function(form) {
        let items = form.querySelectorAll('input, select, textarea');
        let str = '';
        for (let i = 0; i < items.length; i += 1) {
            let item = items[i];
            let name = item.name;
            let value = item.value;
            let separator = i === 0 ? '' : '&';

            if (value) {
                str += separator + name + '=' + value;
            }
        }
        return str;
    };

    let formSend = function(form) {
        let data = serialize(form);
        let xhr = new XMLHttpRequest();
        let url = 'mail/mail.php';

        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');

        xhr.onload = function() {
            let activePopup = document.querySelector('.modal.show');

            if (activePopup) {
                activePopup.classList.remove('show');
            }

            if (xhr.response === 'success') {
                document.querySelector('.thanks-modal').classList.add('show');
            } else {
                document.querySelector('.fails-modal').classList.add('show');
            }

            form.reset();
        };

        xhr.send(data);
    };

    for (let i = 0; i < forms.length; i += 1) {
        forms[i].addEventListener('submit', function(e) {
            e.preventDefault();
            let form = e.currentTarget;
            formSend(form);
        });
    }
})();