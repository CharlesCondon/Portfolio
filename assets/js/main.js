document.getElementById('charles').onclick = function(e) {
    e.target.classList.add('animate__flip');
}

barba.init({
    transitions: [{
        name: 'opacity-transition',
        leave(data) {
            return gsap.to(data.current.container, {
            opacity: 0
            });
        },
        enter(data) {
            return gsap.from(data.next.container, {
            opacity: 0
            });
        }
    }]
});