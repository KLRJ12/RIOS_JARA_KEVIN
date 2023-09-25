document.addEventListener('DOMContentLoaded', function () {
    const userForm = document.getElementById('userForm');
    const userList = document.getElementById('userList');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const RUCInput = document.getElementById('RUC');
    const addUserBtn = document.getElementById('addUserBtn');

    let isEditMode = false;
    let currentUserBox = null;

    userForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const enteredName = nameInput.value;
        const enteredEmail = emailInput.value;
        const enteredRUC = RUCInput.value;

        if (enteredName && enteredEmail) {
            if (isEditMode) {
                currentUserBox.querySelector('p:nth-child(1)').textContent = `Nombre: ${enteredName}`;
                currentUserBox.querySelector('p:nth-child(2)').textContent = `RUC: ${enteredRUC}`;
                currentUserBox.querySelector('p:nth-child(3)').textContent = `Correo Electrónico: ${enteredEmail}`;
                addUserBtn.textContent = 'Añadir Usuario'; // Cambia el texto del botón
                isEditMode = false;
            } else {
                const userBox = document.createElement('div');
                userBox.classList.add('user-box');
                userBox.innerHTML = `
                    <p><strong>Nombre:</strong> ${enteredName}</p>
                    <p><strong>RUC:</strong> ${enteredRUC}</p>
                    <p><strong>Correo Electrónico:</strong> ${enteredEmail}</p>
                    <button class="delete-btn">Eliminar</button>
                    <button class="edit-btn">Modificar</button>
                `;
                userList.appendChild(userBox);
                
                const deleteBtn = userBox.querySelector('.delete-btn');
                const editBtn = userBox.querySelector('.edit-btn');

                deleteBtn.addEventListener('click', function () {
                    userList.removeChild(userBox);
                });

                editBtn.addEventListener('click', function () {
                    nameInput.value = enteredName;
                    RUCInput.value = enteredRUC;
                    emailInput.value = enteredEmail;
                    addUserBtn.textContent = 'Guardar Cambios'; // cambia de nombre al btn
                    isEditMode = true;
                    currentUserBox = userBox;
                });

                // limpia el form
                nameInput.value = '';
                emailInput.value = '';
                RUCInput.value = '';
            }
        }
    });
});
