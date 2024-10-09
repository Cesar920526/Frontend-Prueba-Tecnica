function verEmpleado() {
    show_hide('inline-block', 'block', 'none', 'none');
    const idEmpleado = document.getElementById('idInput').value;
    if (!idEmpleado) {
        alert('Por favor, ingrese un id a buscar');
        return;
    }
    buscarEmpleado(idEmpleado, mostrarEmpleado);
}

function buscarEmpleado(idEmpleado, operacion) {
    const isDocker = window.location.hostname !== 'localhost';
    const apiUrl = isDocker ? `http://backend:8080/api/Empleado/EmpleadoPorIdentificacion/${idEmpleado}` : `http://localhost:8080/api/Empleado/EmpleadoPorIdentificacion/${idEmpleado}`;
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se encontró el empleado');
            }
            return response.json();
        })
        .then(empleados => {
            operacion(empleados);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al obtener el empleado');
        });
}

function mostrarEmpleado(empleados) {
    const empleadosDetails = document.getElementById('empleadosDetails');
    empleadosDetails.innerHTML = '';
    empleadosDetails.style.display = 'block';

    empleados.forEach(empleado => {
        const identificacion = createDetailElement('Identificacion', empleado.identificacion);
        empleadosDetails.appendChild(identificacion);
        const nombres = createDetailElement('Nombres', empleado.nombres);
        empleadosDetails.appendChild(nombres);
        const apellidos = createDetailElement('Apellidos', empleado.apellidos);
        empleadosDetails.appendChild(apellidos);
        const edad = createDetailElement('Edad', empleado.edad);
        empleadosDetails.appendChild(edad);
        const cargo = createDetailElement('Cargo', empleado.cargo);
        empleadosDetails.appendChild(cargo);
        const telefono = createDetailElement('Telefono', empleado.telefono);
        empleadosDetails.appendChild(telefono);
        const email = createDetailElement('Email', empleado.email);
        empleadosDetails.appendChild(email);

        // Separador entre empleados
        const separator = document.createElement('hr');
        empleadosDetails.appendChild(separator);
    });
}

function createDetailElement(label, value) {
    const element = document.createElement('p');
    element.innerHTML = `<strong>${label}:</strong>${value}`;
    return element;
}