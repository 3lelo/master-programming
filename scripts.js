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


document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");

    window.addEventListener("scroll", () => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;

        if (scrolled >= scrollableHeight - 50) {
            // Show the footer when near the bottom
            footer.style.visibility = "visible";
            footer.style.opacity = "1";
        } else {
            // Hide the footer when not near the bottom
            footer.style.visibility = "hidden";
            footer.style.opacity = "0";
        }
    });
});




function updateTimeAndDate() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const now = new Date();
    const optionsTime = { hour: '2-digit', minute: '2-digit', hour12: true };
    const optionsDate = { day: 'numeric', month: 'long', year: 'numeric' };
  
    timeElement.textContent = now.toLocaleString('en-US', optionsTime);
    dateElement.textContent = now.toLocaleDateString('en-US', optionsDate);
}
