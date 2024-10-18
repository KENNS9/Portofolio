const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn   => btn.classList.remove('active'));
        button.classList.add('active');

        const   
 filterValue = button.textContent.toLowerCase();

        projects.forEach(project => {
            const projectCategory = project.querySelector('p:last-child').textContent.toLowerCase();
            project.style.display = projectCategory.includes(filterValue) ? 'block' : 'none';
        });
    });
});