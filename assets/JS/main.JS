document.querySelectorAll('details').forEach((detail) => {
    detail.addEventListener('toggle', (event) => {
        if (detail.open) {
            openDetails(detail);
        } else {
            closeDetails(detail);
        }
    });
});

function openDetails(detail) {
    detail.style.height = detail.scrollHeight + 'px';
    detail.style.marginBottom = '0px';
    detail.addEventListener('transitionend', () => {
        detail.style.height = detail.scrollHeight + 'px';
    }, { once: true });
}

function closeDetails(detail) {
    const startHeight = detail.scrollHeight;
    detail.style.height = startHeight + 'px';
    detail.style.marginBottom = '10px';  // Adiciona espaço ao fechar
    requestAnimationFrame(() => {
        detail.style.height = '50px';
    });
}
