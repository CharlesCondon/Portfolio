// document.addEventListener('click', function(e) {
//   var el = e.target;

//   while (el && !el.href) {
//     el = el.parentNode;
//   }

//   if (el) {
//     e.preventDefault();
//     return;
//   }
// });

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