const pacientes = {
    "Dr. Pérez": [],
    "Dr. García": [],
    "Dr. López": []
};

document.getElementById('pacienteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const medico = document.getElementById('medico').value;

    if (medico) {
        const paciente = { nombre, apellido };
        pacientes[medico].push(paciente);

        actualizarLista();
        limpiarFormulario();
    } else {
        alert('Por favor seleccione un médico.');
    }
});

function actualizarLista() {
    const contenedor = document.getElementById('pacientesPorMedico');
    contenedor.innerHTML = '';

    for (const medico in pacientes) {
        const listaMedico = document.createElement('div');
        listaMedico.innerHTML = `<h3>${medico}</h3>`;
        const ul = document.createElement('ul');

        pacientes[medico].forEach((paciente) => {
            const li = document.createElement('li');
            li.textContent = `${paciente.nombre} ${paciente.apellido}`;
            ul.appendChild(li);
        });

        listaMedico.appendChild(ul);
        contenedor.appendChild(listaMedico);
    }
}

function limpiarFormulario() {
    document.getElementById('pacienteForm').reset();
}