/*************************************************************/
/*         Validation form for Solo Leveling Page Index.html */
/*         Author: Jorge Bech Castillo                       */
/*         version: 1.0                                      */
/*         comment: project for Leguajes de Marcas - 1DAM    */
/*************************************************************/
    // Función para validar el formulario antes de enviarlo
    function validateForm() {
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var subject = document.getElementById('subject').value.trim();
        var message = document.getElementById('message').value.trim();
        var emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        // Validación de campos vacíos y formato de correo electrónico
        var isValid = true;
        if (name === '') {
            document.getElementById('name').classList.add('is-invalid');
            isValid = false;
        } else {
            document.getElementById('name').classList.remove('is-invalid');
        }
        if (email === '' || !emailRegex.test(email)) {
            document.getElementById('email').classList.add('is-invalid');
            isValid = false;
        } else {
            document.getElementById('email').classList.remove('is-invalid');
        }
        if (subject === '') {
            document.getElementById('subject').classList.add('is-invalid');
            isValid = false;
        } else {
            document.getElementById('subject').classList.remove('is-invalid');
        }
        if (message === '') {
            document.getElementById('message').classList.add('is-invalid');
            isValid = false;
        } else {
            document.getElementById('message').classList.remove('is-invalid');
        }

        return isValid;
    }

    // Agregar evento al botón de enviar para validar el formulario antes de enviarlo
    document.getElementById('send-button').addEventListener('click', function(event) {
        if (!validateForm()) {
            event.preventDefault(); // Evita que el formulario se envíe si no es válido
        }
    });

