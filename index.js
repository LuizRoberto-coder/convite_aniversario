  // Elementos do DOM
        const envelopeContainer = document.getElementById('envelope-container');
        const envelope = document.getElementById('envelope');
        const convite = document.getElementById('convite');
        const musica = document.getElementById('bg-music');
        const confirmBtn = document.getElementById('confirmBtn');
        const confirmationMessage = document.getElementById('confirmationMessage');

        // Configuração da data do evento
        const eventDate = new Date('2025-07-20T16:00:00');
        document.getElementById('dateDisplay').textContent = eventDate.toLocaleDateString('pt-BR');
        
        // Contador regressivo
        function updateCountdown() {
            const now = new Date();
            const diff = eventDate - now;
            
            if (diff <= 0) {
                document.getElementById('countdown').innerHTML = '<div class="text-blue-400 font-bold text-lg">O EVENTO COMEÇOU!</div>';
                return;
            }
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = Math.floor(hours).toString().padStart(2, '0');
            document.getElementById('minutes').textContent = Math.floor(minutes).toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        }
        
        // Interação com o envelope
        envelope.addEventListener('click', () => {
            envelopeContainer.classList.add('hidden');
            envelope.classList.add('hidden');
            convite.classList.remove('hidden');
            musica.play();
            updateCountdown();
            setInterval(updateCountdown, 1000);
        });
        
        // Botão de confirmação
        confirmBtn.addEventListener('click', function() {
            this.innerHTML = '<span class="relative z-10">CONFIRMADO ✓</span>';
            this.classList.remove('from-blue-600', 'to-blue-800', 'hover:from-blue-700', 'hover:to-blue-900');
            this.classList.add('from-green-600', 'to-green-800', 'hover:from-green-700', 'hover:to-green-900');
            confirmationMessage.classList.remove('hidden');
            
            // Efeito de partículas
            const particles = 30;
            for (let i = 0; i < particles; i++) {
                createParticle();
            }
        });
        
        function createParticle() {
            const particle = document.createElement('div');
            particle.innerHTML = '✧';
            particle.className = 'absolute text-blue-400 pointer-events-none';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.opacity = '0';
            document.body.appendChild(particle);
            
            const size = Math.random() * 10 + 5;
            particle.style.fontSize = `${size}px`;
            
            const animation = particle.animate([
                { opacity: 0, transform: 'translate(0, 0) scale(0)' },
                { opacity: 1, transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1)` },
                { opacity: 0, transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0)` }
            ], {
                duration: Math.random() * 2000 + 1000,
                easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)'
            });
            
            animation.onfinish = () => particle.remove();
        }
