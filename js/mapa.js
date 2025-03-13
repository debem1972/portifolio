/*document.addEventListener('DOMContentLoaded', function () {
    const localizationLink = document.getElementById('localizationLink');
    const mapModal = document.getElementById('mapModal');
    const closeMap = document.getElementById('closeMap');
    let map;

    localizationLink.addEventListener('click', function (e) {
        e.preventDefault();
        mapModal.style.display = 'block';

        if (!map) {
            map = L.map('map').setView([-15, -60], 3);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            const imbeCoords = [-29.972475206180775, -50.13410329233921]; //-29.972475206180775, -50.13410329233921
            setTimeout(() => {
                map.flyTo(imbeCoords, 13, { duration: 3 });
                setTimeout(() => {
                    L.marker(imbeCoords)
                        .addTo(map)
                        .bindPopup('Vivo aqui, na cidade mais feliz do mundo!')
                        .openPopup();
                }, 3000);
            }, 3000);
        }
    });

    closeMap.addEventListener('click', function () {
        mapModal.style.display = 'none';
    });

    mapModal.addEventListener('click', function (e) {
        if (e.target === mapModal) {
            mapModal.style.display = 'none';
        }
    });
});*/

//-------------------------------------------------------------------------
// Espera o DOM carregar completamente antes de executar o código
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona os elementos do HTML pelos seus IDs
    const localizationLink = document.getElementById('localizationLink'); // Link clicável "Imbé, RS"
    const mapModal = document.getElementById('mapModal'); // Container do modal do mapa
    const closeMap = document.getElementById('closeMap'); // Botão "X" para fechar o modal
    let map; // Variável para armazenar o objeto do mapa (inicializada como undefined)

    // Adiciona um evento de clique ao link "Imbé, RS"
    localizationLink.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão do link (não recarrega a página)
        mapModal.style.display = 'block'; // Mostra o modal com o mapa

        // Verifica se o mapa ainda não foi criado
        if (!map) {
            // Cria o mapa com Leaflet, centrado na América Latina (lat: -15, lon: -60, zoom: 3)
            map = L.map('map').setView([-15, -60], 3);

            // Adiciona uma camada de tiles (imagens do mapa) do OpenStreetMap
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' // Créditos obrigatórios
            }).addTo(map);

            // Define as coordenadas de Imbé, RS (latitude, longitude)
            const imbeCoords = [-29.9750, -50.1333];

            // Aguarda 3 segundos antes de iniciar a animação de zoom
            setTimeout(() => {
                // Faz o mapa "voar" até Imbé com zoom 13, em 3 segundos
                map.flyTo(imbeCoords, 13, { duration: 3 });

                // Após o zoom (3 segundos), adiciona um marcador e um popup
                setTimeout(() => {
                    L.marker(imbeCoords) // Cria um marcador nas coordenadas de Imbé
                        .addTo(map) // Adiciona o marcador ao mapa
                        .bindPopup('Vivo aqui, na cidade mais feliz do mundo!') // Define o texto do popup
                        .openPopup(); // Abre o popup automaticamente
                }, 3000); // Sincronizado com a duração do flyTo (3 segundos)
            }, 3000); // Delay inicial de 3 segundos para mostrar a América Latina
        }
    });

    // Fecha o modal ao clicar no "X"
    closeMap.addEventListener('click', function () {
        mapModal.style.display = 'none'; // Esconde o modal
    });

    // Fecha o modal ao clicar fora do mapa (na área escura do modal)
    mapModal.addEventListener('click', function (e) {
        if (e.target === mapModal) { // Verifica se o clique foi no modal, não no conteúdo
            mapModal.style.display = 'none'; // Esconde o modal
        }
    });
});