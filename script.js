document.addEventListener('DOMContentLoaded', (event) => {
    let currentComment = 0;
    const comments = document.querySelectorAll('.comment');
    
    // Zobrazte první komentář
    comments[currentComment].classList.add('active');
    
    document.getElementById('prev').addEventListener('click', function() {
        comments[currentComment].classList.remove('active');
        currentComment = currentComment - 1 < 0 ? comments.length - 1 : currentComment - 1;
        comments[currentComment].classList.add('active');
    });
    
    document.getElementById('next').addEventListener('click', function() {
        comments[currentComment].classList.remove('active');
        currentComment = (currentComment + 1) % comments.length;
        comments[currentComment].classList.add('active');
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    const links = document.querySelectorAll('.odkazovani a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const blocks = document.querySelectorAll('[id$="-block"]');
            blocks.forEach(block => {
                if (block.id === `${event.target.id}-block`) {
                    block.style.display = 'block';
                } else {
                    block.style.display = 'none';
                }
            });
        });
    });
});

