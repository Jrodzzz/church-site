let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px 80px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(
    entries, 
    appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        })
    }, 
    appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });