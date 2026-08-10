// Wedding Website - Fade Transition

document.addEventListener('DOMContentLoaded', function() {
    const enterBtn = document.getElementById('enter-btn');
    const cottageBtn = document.getElementById('cottage-btn');
    const backBtn2 = document.getElementById('back-btn-2');
    const backBtn3 = document.getElementById('back-btn-3');

    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    const screen3 = document.getElementById('screen3');

    function fadeToScreen(fromScreen, toScreen) {
        fromScreen.classList.remove('active');
        setTimeout(() => {
            toScreen.classList.add('active');
        }, 50);
    }

    enterBtn.addEventListener('click', function() {
        fadeToScreen(screen1, screen2);
    });

    cottageBtn.addEventListener('click', function() {
        fadeToScreen(screen2, screen3);
    });

    backBtn2.addEventListener('click', function() {
        fadeToScreen(screen2, screen1);
    });

    backBtn3.addEventListener('click', function() {
        fadeToScreen(screen3, screen2);
    });

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
