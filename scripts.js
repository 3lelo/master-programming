function showTab(tabId, event) {
    document.querySelectorAll('nav a').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    document.querySelectorAll('.main').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}

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
