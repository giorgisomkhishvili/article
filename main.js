const share = document.querySelector('.share');
let tryactive = false;

const btnShare = () => {
    tryactive = !tryactive;

    if (tryactive) {
        share.classList.add('active');
    } else {
        share.classList.remove('active');
    }
};

share.addEventListener('click', btnShare);