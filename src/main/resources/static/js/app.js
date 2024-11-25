document.getElementById('clienteForm')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const contato = document.getElementById('contato').value;
    
    await fetch('/api/clientes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, contato })
    });
    alert('Cliente cadastrado com sucesso!');
});

document.getElementById('produtoForm')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    
    await fetch('/api/produtos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, preco })
    });
    alert('Produto cadastrado com sucesso!');
});

document.getElementById('mesaForm')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const numero = document.getElementById('numero').value;
    const descricao = document.getElementById('descricao').value;
    
    await fetch('/api/mesas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ numero, descricao })
    });
    alert('Mesa cadastrada com sucesso!');
});
