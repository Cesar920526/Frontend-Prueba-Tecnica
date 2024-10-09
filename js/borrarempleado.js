function borrarEmpleado() {
    show_hide('inline-block', 'block', 'none', 'none');
    const idEmpleado = document.getElementById('idInput').value;
    const isDocker = window.location.hostname !== 'localhost';
    const apiUrl = isDocker ? `http://backend:8080/api/Empleado/BorrarEmpleado/${idEmpleado}` : `http://localhost:8080/api/Empleado/BorrarEmpleado/${idEmpleado}`;
    if (!idEmpleado) {
        alert('Indicar el id a borrar');
        return;
    }
    fetch(apiUrl, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('idInput').value = "";
            alert('Empleado eliminado correctamente');
            regresar();
        } else {
            throw new Error('Error al eliminar el empleado');
        }
    })
    .catch(error => {
        alert('Error al eliminar el caso: ' + error.message);
    });
}