if (document.querySelectorAll('.modal')) {
    const allModal = document.querySelectorAll('.modal');
    const allModalBtns = document.querySelectorAll('[data-modal-btn]');

    allModalBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            let btnModalTag = btn.getAttribute('data-modal-btn');
            allModal.forEach(function(modal) {
                if (modal.getAttribute('data-modal') === btnModalTag) {
                    modal.classList.toggle('open');
                    document.querySelector('body').classList.toggle('m-hidden');
                }
            });
        });
    })

    allModal.forEach(function(modal) {
        const closeBtn = modal.querySelectorAll('.modal-close-btn');
        closeBtn.forEach(function(btn) {
            btn.addEventListener('click', function() {
                modal.classList.remove('open');
                document.querySelector('body').classList.toggle('m-hidden');
            });
        })
    });
}