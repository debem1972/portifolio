// Inicialização do tooltip
document.addEventListener('DOMContentLoaded', () => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    console.log('Tooltips inicializados:', tooltipList);


    // Inicializa o toast do Bootstrap
    const toastEl = document.getElementById('emailToast');
    const toast = new bootstrap.Toast(toastEl);

});



