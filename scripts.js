document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        const page = button.dataset.page;
        if (page === currentPage) {
            button.classList.add('active');
        }
        button.addEventListener('click', () => window.location.href = page);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    function initializeTabs(containerSelector, itemClass, sectionClass) {
        const container = document.querySelector(containerSelector);
        if (!container) return;

        const sectionItems = container.querySelectorAll(itemClass);
        const sections = container.querySelectorAll(sectionClass);

        sectionItems.forEach(item => {
            item.addEventListener('click', function () {
                sectionItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');

                const sectionId = this.getAttribute('data-section');
                sections.forEach(section => section.classList.remove('active'));

                const selectedSection = document.getElementById(sectionId);
                if (selectedSection) {
                    selectedSection.classList.add('active');
                }
            });
        });
    }

    initializeTabs(
        '#java',
        '.section-item',
        '.section'
    );

    initializeTabs(
        '#kotlin',
        '.section-item-k',
        '.section-k'
    );
});



document.querySelectorAll(".copy-btn").forEach((button) => {
    button.addEventListener("click", () => {
        const codeBlock = button.nextElementSibling.querySelector("code");
        const codeText = codeBlock.innerText;
        navigator.clipboard.writeText(codeText).then(() => {
            button.textContent = "Copied!";
            setTimeout(() => {
                button.textContent = "Copy";
            }, 1500);
        }).catch(() => {
            alert("Failed to copy!");
        });
    });
});

