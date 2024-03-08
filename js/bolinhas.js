const stars = document.querySelectorAll('.star');

stars.forEach(star => {
    star.addEventListener('mouseover', () => {
        star.style.transform = 'rotate(0deg)';
    });

    star.addEventListener('mouseout', () => {
        star.style.transform = 'rotate(45deg)';
    });
});
