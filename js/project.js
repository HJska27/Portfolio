
    // transform: translateY(-250px)

    let a = document.querySelectorAll('.main a');

    for (let elem of a) {
        let img = elem.querySelector('img');
        let p = elem.querySelector('p')
        elem.onmouseover = function() {
            p.style.opacity = 1
            p.style.transform = 'translateY(-250px)'
            img.style.opacity = 0;
        }
        elem.onmouseout = function () {
            p.style.opacity = 0
            p.style.transform = 'translateY(250px)'
            img.style.opacity = 1;
        }
    }