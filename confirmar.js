const form = document.getElementById('confirm-form');
const mensagem = document.getElementById('mensagem');
const SHEETDB_URL = 'https://sheetdb.io/api/v1/k6v789dk7kias';

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    if (!nome) return;

    try {
        const response = await fetch(SHEETDB_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: [{ nome: nome }]
            })
        });

        const result = await response.json();
        console.log(result);

        if (response.ok) {
            mensagem.textContent = 'Presença confirmada com sucesso! 🎉';
            mensagem.classList.remove('hidden');
            mensagem.classList.remove('text-red-500');
            mensagem.classList.add('text-green-400');
            form.reset();
            jogarConfetes();
        } else {
            mensagem.textContent = 'Erro ao confirmar presença. Tente novamente.';
            mensagem.classList.remove('hidden');
            mensagem.classList.remove('text-green-400');
            mensagem.classList.add('text-red-500');
        }

    } catch (error) {
        mensagem.textContent = 'Erro ao conectar. Verifique sua internet.';
        mensagem.classList.remove('hidden');
        mensagem.classList.remove('text-green-400');
        mensagem.classList.add('text-red-500');
        console.error('Erro ao enviar dados:', error);
    }
});
// ANIMAÇÃO CONFETE
function jogarConfetes() {
    for (let i = 0; i < 100; i++) {
        const confete = document.createElement('div');
        confete.className = 'fixed rounded-full animate-cair pointer-events-none';
        confete.style.width = '10px';
        confete.style.height = '10px';
        confete.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confete.style.left = `${Math.random() * 100}vw`;
         confete.style.top = '-20px';
        confete.style.animationDuration = `${2 + Math.random() * 3}s`;
        confete.style.zIndex = 0;
        document.body.appendChild(confete);

        setTimeout(() => confete.remove(), 5000);
    }
}