document.addEventListener('DOMContentLoaded', function() {
    const headerElement = document.getElementById('header');
    const text1 = document.querySelector('.animate-1').textContent;
    const text2 = document.querySelector('.animate-2').textContent;
    
    if (text1 && text2) {
        const textContainers = headerElement.querySelectorAll('div');
        textContainers.forEach(el => {
            el.style.opacity = '1';
        });
        
        headerElement.classList.add('text-loaded');
    }
});