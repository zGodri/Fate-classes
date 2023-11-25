
    const buttons = document.querySelectorAll('.botao');

    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            
            buttons.forEach(btn => {
                btn.classList.remove('selecionado');
            });

            
            button.classList.add('selecionado');

            
            const target = button.getAttribute('data-target');

            
            const servos = document.querySelectorAll('.servant');
            servos.forEach(servant => {
                servant.style.display = 'none';
            });

            
            const selectedServant = document.getElementById(target);
            if (selectedServant) {
                selectedServant.style.display = 'block';
            }
        });
    });