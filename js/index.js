document.addEventListener('DOMContentLoaded', () => {
    const introText = "Olá! Eu sou o Daniel! Seja bem vindo ao meu portfólio!";
    const introElement = document.getElementById('intro-text');
    const logo = document.getElementById('logo');
    const mainContent = document.getElementById('main-content');
    const introScreen = document.getElementById('intro-screen');
    const navbar = document.querySelector('.navbar');
    const homeSection = document.getElementById('home');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');
    const navLinks = document.querySelectorAll('.nav-link');


    // Mostra o cursor imediatamente ao carregar a página
    introElement.innerHTML = '<span id="cursor"></span>';

    let i = 0;
    function typeWriter() {
        if (i < introText.length) {
            //introElement.innerHTML += introText.charAt(i);
            introElement.innerHTML = introText.substring(0, i + 1) + '<span id="cursor"></span>';
            i++;
            setTimeout(typeWriter, 50);
        } else {
            //introElement.innerHTML += '<span id="cursor"></span>';
            setTimeout(fadeOutText, 3000);   // Cursor pisca por 3s após a frase
        }
    }

    function fadeOutText() {
        introElement.style.opacity = '0';
        setTimeout(showLogo, 1000);
    }

    function showLogo() {
        logo.classList.add('active');
        logo.style.opacity = '1';
        logo.style.transform = 'translate(-50%, -50%) scale(1)';
        setTimeout(fadeOutLogo, 5000);
    }

    function fadeOutLogo() {
        logo.classList.remove('active');
        logo.style.opacity = '0';
        showMainContent();
        setTimeout(() => {
            introScreen.style.opacity = '0';
            setTimeout(() => {
                introScreen.style.display = 'none';
            }, 1000);
        }, 0);
    }

    function showMainContent() {
        mainContent.style.opacity = '1';
        navbar.style.opacity = '1';
        homeSection.style.opacity = '1';
    }

    // Detecta o estado do menu e atualiza a classe no body
    navbarToggler.addEventListener('click', function () {
        const isExpanded = navbarCollapse.classList.contains('show');
        if (isExpanded) {
            document.body.classList.remove('menu-expanded');
        } else {
            document.body.classList.add('menu-expanded');
        }
    });

    // Fecha o menu automaticamente ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click(); // Simula o clique no toggler para fechar o menu
                document.body.classList.remove('menu-expanded'); // Remove a classe imediatamente
            }
        });
    });

    // Evento para limpar a classe quando o collapse é escondido (Bootstrap)
    navbarCollapse.addEventListener('hidden.bs.collapse', () => {
        document.body.classList.remove('menu-expanded');
    });

    //-----------------------------------------------------------------------
    // Funções para ampliar a foto
    function enlargePhoto() {
        const overlay = document.getElementById('overlay');
        if (overlay) {
            overlay.classList.add('active');
            setTimeout(() => {
                closePhoto();
            }, 6000); // Fecha automaticamente após 6 segundos
        } else {
            console.error("Elemento com ID 'overlay' não encontrado.");
        }
    }

    function closePhoto() {
        const overlay = document.getElementById('overlay');
        if (overlay) {
            overlay.classList.remove('active');
        } else {
            console.error("Elemento com ID 'overlay' não encontrado.");
        }
    }

    // Adicionar evento de clique na foto
    const profilePhoto = document.getElementById('profilePhoto');
    if (profilePhoto) {
        profilePhoto.addEventListener('click', enlargePhoto);
    } else {
        console.error("Elemento com ID 'profilePhoto' não encontrado.");
    }

    // Fechar com a tecla "Esc"
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closePhoto();
        }
    });

    // Fechar ao clicar fora da imagem (no overlay)
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                closePhoto();
            }
        });
    } else {
        console.error("Elemento com ID 'overlay' não encontrado.");
    }
    //--------------------------------------------------------------------

    //typeWriter();
    // Inicia a digitação após 2 segundos
    setTimeout(typeWriter, 2000);
});
