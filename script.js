// Typed Text
document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('.typing-text', {
        strings: ['Data Scientist', 'NSS Volunteer','Google Ambassador','Fullstack Developer' ],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        loop: true,
    });
});






    document.addEventListener("DOMContentLoaded", function () {
        const aboutSection = document.querySelector(".about");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fade-in");
                    }
                });
            },
            { threshold: 0.5 }
        );
        observer.observe(aboutSection);
    });



document.getElementById("contactForm").addEventListener("submit", function () {
    document.getElementById("successMsg").style.display = "block";
});

document.querySelectorAll(".read-more-btn").forEach(button => {
    button.addEventListener("click", function () {
        const moreText = this.previousElementSibling;

        if (moreText.style.display === "block") {
            moreText.style.display = "none";
            this.innerText = "Read More";
        } else {
            moreText.style.display = "block";
            this.innerText = "Show Less";
        }
    });
});

