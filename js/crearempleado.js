function crearEmpleado() {
    show_hide('none', 'none', 'none', 'block');
    document.getElementById('idInput').value = '';
}

document.getElementById('empleadoForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const identificacion = document.getElementById('identificacion').value;
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const edad = document.getElementById('edad').value;
    const cargo = document.getElementById('cargo').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const isDocker = window.location.hostname !== 'localhost'; 
    const empleadoData = {
        identificacion: identificacion,
        nombres: nombres,
        apellidos: apellidos,
        edad: edad,
        cargo: cargo,
        telefono: telefono,
        email: email
    };
    let metodo = 'POST';
    let url = isDocker ? 'http://backend:8080/api/Empleado/AdicionarEmpleado' : 'http://localhost:8080/api/Empleado/AdicionarEmpleado';
    const idHiddenValue = document.getElementById('idHidden').value;
    if (idHiddenValue) {
        metodo = 'PUT';
        url = isDocker ? `http://backend:8080/api/Empleado/Actualizar/${idHiddenValue}` : `http://localhost:8080/api/Empleado/Actualizar/${idHiddenValue}`;
    }
    fetch(url, {
        method: metodo,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(empleadoData)
    })
    .then(response => {
        if (response.ok) {
            alert('Empleado actualizado correctamente');
            window.location.reload();
        } else {
            throw new Error('Error al actualizar el empleado');
        }
    })
    .catch(error => {
        alert('Error al actualizar el empleado: ' + error.message);
    });
});

function regresar() {
    show_hide('inline-block', 'none', 'none', 'none');
}