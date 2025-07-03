document.addEventListener("DOMContentLoaded", () => {
    const tipoPerfil = localStorage.getItem('perfil');

  
    if (tipoPerfil === 'adm') {
        document.getElementById('nomeUsuario').textContent += ' Administrador';
    } else if (tipoPerfil === 'user') {
        document.getElementById('nomeUsuario').textContent += ' Usuário';
    } 

}
);