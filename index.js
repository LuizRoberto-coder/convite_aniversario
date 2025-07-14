       const envelopeContainer = document.getElementById('envelope-container');
       const envelope = document.getElementById('envelope');
        const convite = document.getElementById('convite');
        const musica = document.getElementById('bg-music');

        envelope.addEventListener('click', () => {
            envelopeContainer.classList.add('hidden');
            envelope.classList.add('hidden');
            convite.classList.remove('hidden');
            musica.play();
        });
