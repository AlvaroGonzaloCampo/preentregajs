function getFormattedDate(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const pacientesPorDia = JSON.parse(localStorage.getItem('pacientesPorDia')) || {};

document.getElementById('pacienteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const medico = document.getElementById('medico').value;
    const fechaPaciente = document.getElementById('fechaPaciente').value;

    if (medico && fechaPaciente) {
        if (!pacientesPorDia[fechaPaciente]) {
            pacientesPorDia[fechaPaciente] = {};
        }
        if (!pacientesPorDia[fechaPaciente][medico]) {
            pacientesPorDia[fechaPaciente][medico] = [];
        }

        const paciente = { nombre, apellido };
        pacientesPorDia[fechaPaciente][medico].push(paciente);

        localStorage.setItem('pacientesPorDia', JSON.stringify(pacientesPorDia));

        actualizarLista(fechaPaciente);
        limpiarFormulario();
    } else {
        alert('Por favor complete todos los campos.');
    }
});

document.getElementById('cargarPacientesBtn').addEventListener('click', function() {
    const fechaSeleccionada = document.getElementById('fechaSeleccionada').value;
    if (fechaSeleccionada) {
        actualizarLista(fechaSeleccionada);
    } else {
        alert('Por favor seleccione una fecha.');
    }
});

document.getElementById('buscarPacienteBtn').addEventListener('click', function() {
    const nombreBusqueda = document.getElementById('nombreBusqueda').value.trim();
    const apellidoBusqueda = document.getElementById('apellidoBusqueda').value.trim();
    buscarPaciente(nombreBusqueda, apellidoBusqueda);
});

function actualizarLista(fecha) {
    const contenedor = document.getElementById('pacientesPorMedico');
    contenedor.innerHTML = `<h2>Pacientes del ${fecha}</h2>`;

    if (pacientesPorDia[fecha]) {
        for (const [medico, listaPacientes] of Object.entries(pacientesPorDia[fecha])) {
            const listaMedico = document.createElement('div');
            listaMedico.className = 'medico-section';
            listaMedico.innerHTML = `<h3>${medico}</h3>`;
            const ul = document.createElement('ul');

            listaPacientes.forEach(({ nombre, apellido }, index) => {
                const li = document.createElement('li');
                li.textContent = `${nombre} ${apellido}`;

                const eliminarBtn = document.createElement('button');
                eliminarBtn.textContent = 'Eliminar';
                eliminarBtn.className = 'eliminar-btn';
                eliminarBtn.onclick = () => eliminarCita(fecha, medico, index);

                li.appendChild(eliminarBtn);
                ul.appendChild(li);
            });

            listaMedico.appendChild(ul);
            contenedor.appendChild(listaMedico);
        }
    } else {
        contenedor.innerHTML += `<p>No hay pacientes registrados para esta fecha.</p>`;
    }
}

function eliminarCita(fecha, medico, index) {
    if (confirm('¿Está seguro que desea eliminar esta cita?')) {
        pacientesPorDia[fecha][medico].splice(index, 1);
        
        if (pacientesPorDia[fecha][medico].length === 0) {
            delete pacientesPorDia[fecha][medico];
        }
        
        if (Object.keys(pacientesPorDia[fecha]).length === 0) {
            delete pacientesPorDia[fecha];
        }

        localStorage.setItem('pacientesPorDia', JSON.stringify(pacientesPorDia));
        
        actualizarLista(fecha);
    }
}

function buscarPaciente(nombre, apellido) {
    const resultadoDiv = document.getElementById('resultadoBusqueda');
    resultadoDiv.innerHTML = ''; // Limpiar resultados anteriores

    let encontrado = false;

    for (const [fecha, medicos] of Object.entries(pacientesPorDia)) {
        for (const [medico, pacientes] of Object.entries(medicos)) {
            pacientes.forEach((paciente) => {
                if (
                    (nombre === '' || paciente.nombre.toLowerCase().includes(nombre.toLowerCase())) &&
                    (apellido === '' || paciente.apellido.toLowerCase().includes(apellido.toLowerCase()))
                ) {
                    encontrado = true;
                    const p = document.createElement('p');
                    p.textContent = `Paciente ${paciente.nombre} ${paciente.apellido} encontrado con ${medico} el ${fecha}`;
                    resultadoDiv.appendChild(p);
                }
            });
        }
    }

    if (!encontrado) {
        resultadoDiv.innerHTML = '<p>No se encontraron resultados.</p>';
    }
}

function limpiarFormulario() {
    document.getElementById('pacienteForm').reset();
}

document.addEventListener('DOMContentLoaded', () => {
    const fechaHoy = getFormattedDate();
    actualizarLista(fechaHoy);
});