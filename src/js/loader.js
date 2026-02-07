const loader = document.querySelector('.loader');

//  лоадер показується 
export function showLoader() {
    loader.classList.remove('is-hidden');
}

// лоадер ховається
export function hideLoader() {
    loader.classList.add('is-hidden');
}