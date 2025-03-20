//----------------------------------------------------------------------------------------------------
/*document.getElementById('meuFormulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Elemento para mostrar mensagens de status
    const statusEl = document.getElementById('statusMensagem');

    // Obter o valor do campo de email
    const emailField = this.querySelector('input[name="email"]');
    const email = emailField.value.trim();

    // Expressão regular para validação de email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Validar o email
    if (!emailRegex.test(email)) {
        statusEl.innerHTML = '<div class="alert alert-warning">Por favor, insira um email válido (exemplo: nome@dominio.com)</div>';
        statusEl.style.opacity = '1';
        statusEl.style.transition = 'opacity 1s ease';
        statusEl.style.display = 'block';

        // Fade out da mensagem após 3 segundos
        setTimeout(() => {
            statusEl.style.opacity = '0';
            setTimeout(() => {
                statusEl.style.display = 'none';
            }, 1000);
        }, 3000);

        return; // Impede o envio do formulário
    }

    // Garante que o elemento está visível no início
    statusEl.style.opacity = '1';
    statusEl.style.transition = 'opacity 1s ease';
    statusEl.style.display = 'block';

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

                // Fade out com transição suave
                setTimeout(() => {
                    statusEl.style.opacity = '0'; // Começa a transição de opacidade

                    // Só oculta completamente após a transição terminar
                    setTimeout(() => {
                        statusEl.style.display = 'none';
                    }, 1000); // 1000ms = 1s (duração da transição)
                }, 3000);

            } else {
                throw new Error('Falha ao enviar');
            }
        })
        .catch(error => {
            statusEl.innerHTML = '<div class="alert alert-danger">Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.</div>';
            console.error('Erro:', error);

            // Fade out com transição suave para mensagens de erro também
            setTimeout(() => {
                statusEl.style.opacity = '0'; // Começa a transição de opacidade

                // Só oculta completamente após a transição terminar
                setTimeout(() => {
                    statusEl.style.display = 'none';
                }, 1000); // 1000ms = 1s (duração da transição)
            }, 3000);
        });
});*/

//-----------------------------------------------------------------------------------
//Código novo da branch feature4
document.getElementById('meuFormulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Elemento para mostrar mensagens de status
    const statusEl = document.getElementById('statusMensagem');

    // Obter o valor do campo de email
    const emailField = this.querySelector('input[name="email"]');
    const email = emailField.value.trim();

    // Expressão regular para validação de email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Validar o email
    if (!emailRegex.test(email)) {
        statusEl.innerHTML = '<div class="alert alert-warning">Por favor, insira um email válido (exemplo: nome@dominio.com)</div>';
        statusEl.style.opacity = '1';
        statusEl.style.transition = 'opacity 1s ease';
        statusEl.style.display = 'block';

        // Fade out da mensagem após 3 segundos
        setTimeout(() => {
            statusEl.style.opacity = '0';
            setTimeout(() => {
                statusEl.style.display = 'none';
            }, 1000);
        }, 3000);

        return; // Impede o envio do formulário
    }

    // Garante que o elemento está visível no início
    statusEl.style.opacity = '1';
    statusEl.style.transition = 'opacity 1s ease';
    statusEl.style.display = 'block';

    // Mensagem de envio em andamento
    statusEl.innerHTML = '<div class="alert alert-info">Enviando sua mensagem...</div>';

    // Animação de carregamento (mudança de cor de fundo)
    statusEl.style.background = 'linear-gradient(90deg, #f0f0f0, #e0e0e0)';
    statusEl.style.backgroundSize = '200% 100%';
    statusEl.style.animation = 'loadingAnimation 2s linear infinite';

    // Coleta dados do formulário
    const formData = new FormData(this);

    // Configura o timeout de 37 segundos
    const controller = new AbortController();
    const timeout = setTimeout(() => {
        controller.abort(); // Aborta a requisição
        statusEl.innerHTML = '<div class="alert alert-danger">Demora excessiva para o envio da mensagem. Tente novamente ou utilize nossos outros meios para se comunicar!</div>';
        document.getElementById('meuFormulario').reset(); // Limpa o formulário

        // Fade out com transição suave
        setTimeout(() => {
            statusEl.style.opacity = '0';
            setTimeout(() => {
                statusEl.style.display = 'none';
            }, 1000);
        }, 3000);
    }, 37000); // ajuste do tempo de espera: 37 segundos

    // Configura e envia a requisição AJAX para o FormSubmit
    fetch('https://formsubmit.co/danielbemficadev@gmail.com', {
        method: 'POST',
        body: formData,
        signal: controller.signal // Associa o AbortController ao fetch
    })
        .then(response => {
            clearTimeout(timeout); // Cancela o timeout se a requisição for concluída
            if (response.ok) {
                statusEl.innerHTML = '<div class="alert alert-success">Mensagem enviada com sucesso! Obrigado pelo contato.</div>';
                document.getElementById('meuFormulario').reset(); // Limpa o formulário

                // Fade out com transição suave
                setTimeout(() => {
                    statusEl.style.opacity = '0';
                    setTimeout(() => {
                        statusEl.style.display = 'none';
                    }, 1000);
                }, 3000);
            } else {
                throw new Error('Falha ao enviar');
            }
        })
        .catch(error => {
            clearTimeout(timeout); // Cancela o timeout em caso de erro
            if (error.name === 'AbortError') {
                // Erro de timeout já foi tratado acima
                return;
            }
            statusEl.innerHTML = '<div class="alert alert-danger">Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.</div>';
            console.error('Erro:', error);

            // Fade out com transição suave para mensagens de erro também
            setTimeout(() => {
                statusEl.style.opacity = '0';
                setTimeout(() => {
                    statusEl.style.display = 'none';
                }, 1000);
            }, 3000);
        });
});

// Animação de carregamento (adicionar ao CSS)
const style = document.createElement('style');
style.innerHTML = `
    @keyframes loadingAnimation {
        0% { background-position: 100% 50%; }
        100% { background-position: -100% 50%; }
    }
`;
document.head.appendChild(style);

//------------------------------------------------------------------------------
//Config do toast de aviso de copia do email.
// Seleciona o elemento do email
const emailElement = document.getElementById('emailCopy');



// Inicializa o toast do Bootstrap
const toastEl = document.getElementById('emailToast');
const toast = new bootstrap.Toast(toastEl);

// Adiciona o evento de clique
emailElement.addEventListener('click', function () {
    // Copia o email para a área de transferência
    const email = 'debem1972@gmail.com';
    navigator.clipboard.writeText(email)
        .then(() => {
            // Mostra o toast
            toast.show();
        })
        .catch(err => {
            console.error('Erro ao copiar o email: ', err);
        });
});

//---------------------------------------------------------------------------


