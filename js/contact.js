
document.getElementById('meuFormulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Elemento para mostrar mensagens de status
    const statusEl = document.getElementById('statusMensagem');
    statusEl.innerHTML = '<div class="alert alert-info">Enviando sua mensagem...</div>';

    // Coleta dados do formulário
    const formData = new FormData(this);

    // Configura e envia a requisição AJAX para o FormSubmit
    fetch('https://formsubmit.co/danielbemficadev@gmail.com', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                statusEl.innerHTML = '<div class="alert alert-success">Mensagem enviada com sucesso! Obrigado pelo contato.</div>';
                document.getElementById('meuFormulario').reset(); // Limpa o formulário
            } else {
                throw new Error('Falha ao enviar');
            }
        })
        .catch(error => {
            statusEl.innerHTML = '<div class="alert alert-danger">Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.</div>';
            console.error('Erro:', error);
        });
});
