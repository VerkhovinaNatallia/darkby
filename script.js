const clearButton = document.querySelector('.clear');
const inputField = document.querySelector('input[name="filter_name"]');
const resultsWrapper = document.querySelector('.results-wrapper');
    
inputField.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    resultsWrapper.textContent = inputValue;
    clearButton.style.display = 'block';
    if (inputField.value.trim()) {
        clearButton.style.display = 'block';
    } else {
        clearButton.style.display = 'none';              
    }
});

clearButton.addEventListener('click', () => {
    inputField.value = '';
    resultsWrapper.innerHTML = '';
    clearButton.style.display = 'none';
});


document.addEventListener('click', (event) => {
    if (!event.target.closest('#search_form')) {
        inputField.value = '';
        resultsWrapper.innerHTML = '';
        clearButton.style.display = 'none';
    }
});
