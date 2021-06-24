import './style.css';
import "core-js/stable";
import "regenerator-runtime/runtime";

document.getElementById('click-button').addEventListener('click', async() => {
    import('./getNewsonclick').then(module => {
        module.default();
    })
});


