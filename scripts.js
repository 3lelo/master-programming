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


document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.sidebar-toggle');
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);

    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
        toggleButton.style.display = sidebar.classList.contains('open') ? 'none' : 'block';
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        toggleButton.style.display = 'block';
    });
});






document.addEventListener('DOMContentLoaded', function() {
  const animatedElements = document.querySelectorAll(
    '.fade-in-right, .fade-in-left, .fade-in-top, .fade-in-bottom'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  animatedElements.forEach(element => {
    observer.observe(element);
  });
});
