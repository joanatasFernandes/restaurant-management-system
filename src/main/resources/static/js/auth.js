/**
 * auth.js
 * Gerencia a autenticação e redireciona usuários baseados no estado de login.
 */

// Função para verificar o estado de autenticação
async function checkAuthStatus() {
    try {
        const response = await fetch('/api/auth/status', { method: 'GET', credentials: 'include' });

        if (response.ok) {
            const data = await response.json();
            if (data.authenticated) {
                console.log("Usuário autenticado:", data.user);
                return true;
            } else {
                console.warn("Usuário não autenticado.");
                return false;
            }
        } else {
            console.error("Erro ao verificar autenticação:", response.status);
            return false;
        }
    } catch (error) {
        console.error("Erro ao verificar autenticação:", error);
        return false;
    }
}

// Função para redirecionar usuários não autenticados para a página de login
async function ensureAuthenticated() {
    const isAuthenticated = await checkAuthStatus();

    if (!isAuthenticated) {
        alert("Você precisa fazer login para acessar esta página.");
        window.location.href = '/login';
    }
}

// Função para realizar logout
async function logout() {
    try {
        const response = await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });

        if (response.ok) {
            alert("Você foi desconectado.");
            window.location.href = '/login';
        } else {
            console.error("Erro ao realizar logout:", response.status);
        }
    } catch (error) {
        console.error("Erro ao realizar logout:", error);
    }
}

// Exemplo de como utilizar essas funções
document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }

    // Chamar ensureAuthenticated para proteger páginas privadas
    if (window.location.pathname !== '/login') {
        ensureAuthenticated();
    }
});

