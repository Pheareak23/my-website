const container = document.querySelector('.container');
const signUpLink = document.querySelector('.SingUpLink');
const signInLink = document.querySelector('.SigInLink');

signUpLink.onclick = () => {
    container.classList.add('active');
};

signInLink.onclick = () => {
    container.classList.remove('active');
};