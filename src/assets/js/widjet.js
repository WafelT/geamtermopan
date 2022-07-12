if (document.querySelectorAll('.messenger-widget')) {
    document.querySelectorAll('.messenger-widget').forEach(function(widget) {
        const btn = widget.querySelector('.messenger-widget__btn');
        btn.addEventListener('click', function() {
            widget.classList.toggle('active');
        })
    })
}