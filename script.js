function showProjectDetails(title, description) {
    document.getElementById('projectTitle').innerText = title;
    document.getElementById('projectDescription').innerText = description;
    document.getElementById('projectDetailsModal').style.display = 'block';
}

function showContactForm() {
    document.getElementById('contactFormModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('projectDetailsModal').style.display = 'none';
    document.getElementById('contactFormModal').style.display = 'none';
}


document.getElementById('mobile-menu').addEventListener('click', function () {
    const topNav = document.querySelector('.top-nav');
    topNav.classList.toggle('show');
});

window.addEventListener('resize', function () {
    const topNav = document.querySelector('.top-nav');
    if (window.innerWidth > 768) {
        topNav.classList.remove('show');
    }
});

// Close modals when clicking outside the content
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        closeModal();
    }
};
