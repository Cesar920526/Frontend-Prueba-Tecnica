function modificarEmpleado() {
    show_hide('none', 'none', 'none', 'block');
    const idEmpleado = document.getElementById('idInput').value;
    if (!idEmpleado) {
        alert('Por favor, ingrese el id del empleado');
        regresar();
        return;
    }
    buscarEmpleado(idEmpleado, editarEmpleado);
}

function editarEmpleado(empleados) {
    if (empleados.length > 1) {
        const empleadosDetails = document.getElementById('empleadosDetails');
        empleadosDetails.innerHTML = 'Selecciona un empleado para modificar:';
        empleados.forEach(empleado => {
            const button = document.createElement('button');
            button.innerText = `${empleado.nombres} ${empleado.apellidos}`;
            button.onclick = () => {
                rellenarFormulario(empleado);
            };
            empleadosDetails.appendChild(button);
        });
    } else if (empleados.length === 1) {
        rellenarFormulario(empleados[0]);
    } else {
        alert('No se encontró ningún empleado.');
    }
}

function rellenarFormulario(empleado) {
    document.getElementById('idHidden').value = empleado.id
    document.getElementById('identificacion').value = empleado.identificacion;
    document.getElementById('nombres').value = empleado.nombres;
    document.getElementById('apellidos').value = empleado.apellidos;
    document.getElementById('edad').value = empleado.edad;
    document.getElementById('cargo').value = empleado.cargo;
    document.getElementById('telefono').value = empleado.telefono;
    document.getElementById('email').value = empleado.email;
}