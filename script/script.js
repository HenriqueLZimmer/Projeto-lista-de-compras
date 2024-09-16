document.querySelector('button[name="button"]').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura o valor do input
    const inputValue = document.querySelector('input[type="text"]').value;

    // Verifica se o input não está vazio
    if (inputValue.trim() !== '') {
        // Cria uma nova div com a classe 'list' e adiciona os elementos dentro dela
        const newItem = document.createElement('div');
        newItem.classList.add('list', 'flex');
        
        // Cria o input do checkbox
        const newCheckbox = document.createElement('input');
        newCheckbox.type = 'checkbox';

        // Cria o label
        const newLabel = document.createElement('label');
        newLabel.textContent = inputValue;

        // Cria o ícone de trash
        const trashIcon = document.createElement('img');
        trashIcon.src = 'assets/icons/trash.svg';
        trashIcon.alt = 'Remover item';
        trashIcon.classList.add('trash-icon');

        // Adiciona os elementos criados na nova div
        newItem.appendChild(newCheckbox);
        newItem.appendChild(newLabel);
        newItem.appendChild(trashIcon);

        // Adiciona a nova div ao ID list
        document.getElementById('list').appendChild(newItem);

        // Limpa o campo de input
        document.querySelector('input[type="text"]').value = '';

        // Adiciona o evento de clique no ícone de lixeira para remover o item
        trashIcon.addEventListener('click', function() {
            // Remove o item da lista
            newItem.remove();

            // Mostra a mensagem de remoção com a classe 'remove'
            const removeMessage = document.querySelector('.remove');
            removeMessage.style.display = 'flex'; // Exibe a mensagem
            setTimeout(() => {
                removeMessage.style.display = 'none'; // Esconde a mensagem após 3 segundos, caso não seja clicada
            }, 3000);
        });

        // Evento para ocultar a mensagem de remoção ao clicar no ícone de delete
        const deleteIcon = document.querySelector('.remove img[src*="delete"]');
        deleteIcon.addEventListener('click', function() {
            const removeMessage = document.querySelector('.remove');
            removeMessage.style.display = 'none'; // Oculta a mensagem imediatamente
        });
    } else {
        alert('Por favor, adicione um item antes de enviar.');
    }
});
