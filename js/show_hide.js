function show_hide(botones, verEmpleado, verTodos, crearEmpleado) {

    document.getElementById('idInput').style.display = botones;
    document.getElementById('labelId').style.display = botones;
    document.getElementById('verEmpleado').style.display = botones;
    document.getElementById('verTodos').style.display = botones;
    document.getElementById('crearEmpleado').style.display = botones;
    document.getElementById('borrarEmpleado').style.display = botones;
    document.getElementById('modificarEmpleado').style.display = botones;

    //Ver empleado
    const empleadosDetails = document.getElementById('empleadosDetails');
    if (empleadosDetails) {
        empleadosDetails.style.display = verEmpleado;
        if (verEmpleado = 'none') {
            empleadosDetails.innerHTML = '';
        }
    }

    //Ver todos
    const empleadosTable = document.getElementById('empleados-table');
    if (empleadosTable) {
        empleadosTable.style.display = verTodos;
    }

    const empleadoForm = document.getElementById('empleadoForm');
    if (empleadoForm) {
        empleadoForm.style.display = crearEmpleado;
    }
}
