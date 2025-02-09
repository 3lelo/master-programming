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

    const toggleSidebar = () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
        toggleButton.classList.toggle('hidden');
    };

    toggleButton.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    document.querySelectorAll('.section-item, .section-item-k').forEach(item => {
        item.addEventListener('click', () => {
            if (sidebar.classList.contains('open')) {
                toggleSidebar();
            }
        });
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





const backToTopButton = document.getElementById('back-to-top');

function checkScrollPosition() {
  const sectionContent = document.querySelector('.section-content');
  const activeSection = document.querySelector('.section.active, .section-k.active');
  
  if (window.scrollY > 200 || (activeSection && sectionContent && sectionContent.scrollTop > 200)) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

window.addEventListener('scroll', checkScrollPosition);
document.querySelector('.section-content')?.addEventListener('scroll', checkScrollPosition);

backToTopButton.addEventListener('click', () => {
  const sectionContent = document.querySelector('.section-content');
  const activeSection = document.querySelector('.section.active, .section-k.active');
  
  if (activeSection && sectionContent) {
    sectionContent.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  else {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
});
