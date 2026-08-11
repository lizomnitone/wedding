// Wedding Website - Fade Transition

document.addEventListener('DOMContentLoaded', function() {
    const cottageBtn = document.getElementById('cottage-btn');
    const backBtn3 = document.getElementById('back-btn-3');

    const screen2 = document.getElementById('screen2');
    const screen3 = document.getElementById('screen3');

    function fadeToScreen(fromScreen, toScreen) {
        fromScreen.classList.remove('active');
        setTimeout(() => {
            toScreen.classList.add('active');
        }, 50);
    }

    if (cottageBtn) {
        cottageBtn.addEventListener('click', function() {
            fadeToScreen(screen2, screen3);
        });
    }

    if (backBtn3) {
        backBtn3.addEventListener('click', function() {
            fadeToScreen(screen3, screen2);
        });
    }

    // Cursor Selector
    const cursorBtns = document.querySelectorAll('.cursor-btn');
    const defaultCursor = 'pink-bass';

    // Set default cursor and active button
    document.body.classList.add(`cursor-${defaultCursor}`);
    document.querySelector(`[data-cursor="${defaultCursor}"]`).classList.add('active');

    cursorBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const cursorName = this.getAttribute('data-cursor');

            // Remove all cursor classes
            cursorBtns.forEach(b => {
                document.body.classList.remove(`cursor-${b.getAttribute('data-cursor')}`);
                b.classList.remove('active');
            });

            // Add new cursor class
            document.body.classList.add(`cursor-${cursorName}`);
            this.classList.add('active');
        });
    });
});
