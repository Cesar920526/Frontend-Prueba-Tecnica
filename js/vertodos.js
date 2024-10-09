document.addEventListener('DOMContentLoaded', () => {
    const verTodosBtn = document.getElementById('verTodos');
    const empleadosTable = document.getElementById('empleados-table');
    const isDocker = window.location.hostname !== 'localhost';
    verTodosBtn.addEventListener('click', () => {
        empleado = document.getElementById('idInput').value = "";
        const apiUrl = isDocker ? 'http://backend:8080/api/Empleado/ListaEmpleados' : 'http://localhost:8080/api/Empleado/ListaEmpleados';
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                show_hide('inline-block', 'none', 'table', 'none');
                const empleadosBody = document.getElementById('empleados-body');
                empleadosBody.innerHTML = '';
                Object.values(data).forEach(empleado => {
                    const { identificacion, nombres, apellidos, edad, cargo, telefono, email } = empleado;
                    const row = `
                        <tr>
                            <td>${identificacion}</td>
                            <td>${nombres}</td>
                            <td>${apellidos}</td>
                            <td>${edad}</td>
                            <td>${cargo}</td>
                            <td>${telefono}</td>
                            <td>${email}</td>
                        </tr>
                    `;
                    empleadosBody.insertAdjacentHTML('beforeend', row);
                });
                empleadosTable.style.display = 'table';
            })
            .catch(error => console.error('Error al obtener empleados:', error));
    });

    empleadosTable.addEventListener('click', (event) => {
        const targetElement = event.target;
        if (targetElement.tagName == 'TD' && targetElement.parentElement.tagName === 'TR') {
            empleadosTable.style.display = 'none'
            empleado = document.getElementById('idInput').value = targetElement.textContent.trim();
            verEmpleado();
        }
    });
});