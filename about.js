
    const elementsToReveal = document.querySelectorAll('.reveal');

    function revealHandler() {
        elementsToReveal.forEach(element => {
            const revealPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (revealPosition < windowHeight - 150) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', revealHandler);
