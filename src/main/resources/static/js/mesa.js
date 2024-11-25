async function carregarMesas() {
    const response = await fetch('/api/mesas');
    const mesas = await response.json();

    const mesasContainer = document.getElementById('mesasContainer');
    mesasContainer.innerHTML = '';
    mesas.forEach(mesa => {
        const mesaDiv = document.createElement('div');
        mesaDiv.innerHTML = `<h3>Mesa ${mesa.numero}</h3>
                             <p>Descrição: ${mesa.descricao}</p>
                             <p>Total: R$ ${mesa.total}</p>`;
        mesasContainer.appendChild(mesaDiv);
    });
}

document.addEventListener('DOMContentLoaded', carregarMesas);