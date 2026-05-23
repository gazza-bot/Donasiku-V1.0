// search box
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-box input");
    if (searchInput) {
        searchInput.addEventListener("focus", () => {
            searchInput.style.border = "1px solid #19a34a";
        });
        searchInput.addEventListener("blur", () => {
            searchInput.style.border = "1px solid #ddd";
        });
    }

    // donate button
    const donateButtons = document.querySelectorAll(".donate-btn");
    donateButtons.forEach(button => {
        button.addEventListener("click", () => {

            /* card */
            const card = button.closest(".campaign-card");
            if (!card) {
                console.log(
                    "Campaign card tidak ditemukan"
                );
                return;
            }

            // image
            const imageEl = card.querySelector("img");
            const image = imageEl ? imageEl.src : "";

            // title
            const titleEl = card.querySelector("h3");
            const title = titleEl ? titleEl.innerText : "";

            // category
            const categoryEl = card.querySelector(".tag");
            const category = categoryEl ? categoryEl.innerText : "";

            // collected
            const collectedEl = card.querySelector(".collected");
            const collected = collectedEl ? collectedEl.innerText : "";

            // progress
            const progressEl = card.querySelector(".progress-bar");
            const progress = progressEl ? progressEl.style.width : "0%";

            /* save local */
            localStorage.setItem(
                "campaignImage",
                image
            );

            localStorage.setItem(
                "campaignTitle",
                title
            );

            localStorage.setItem(
                "campaignCategory",
                category
            );

            localStorage.setItem(
                "campaignCollected",
                collected
            );

            localStorage.setItem(
                "campaignProgress",
                progress
            );

            /* redirect */
            window.location.href =
                "payment.html";
        });
    });

    //detail button
    const detailButtons = document.querySelectorAll(".detail-btn");
    detailButtons.forEach(button => {
        button.addEventListener("click", () => {
            const card =
                button.closest(".campaign-card");
            if (!card) {
                console.log(
                    "Campaign card tidak ditemukan"
                );
                return;
            }

            const image = card.querySelector("img").src;
            const title = card.querySelector("h3").innerText;
            const category = card.querySelector(".tag").innerText;
            const collected = card.querySelector(".collected").innerText;
            const progress = card.querySelector(".progress-bar").style.width;

            /* save */
            localStorage.setItem(
                "campaignImage",
                image
            );

            localStorage.setItem(
                "campaignTitle",
                title
            );

            localStorage.setItem(
                "campaignCategory",
                category
            );

            localStorage.setItem(
                "campaignCollected",
                collected
            );

            localStorage.setItem(
                "campaignProgress",
                progress
            );

            // redirect
            window.location.href = "detail.html";
        });
    });

    // card hover
    const cards = document.querySelectorAll(".campaign-card");
    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-8px)";
            card.style.transition = "0.3s ease";
            card.style.boxShadow = "0 15px 30px rgba(0,0,0,0.08)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "none";
        });
    });

    // notification click
    const notif = document.querySelector(".notif");
    if (notif) {
        notif.addEventListener("click", () => {
            console.log(
                "Notifikasi dibuka"
            );
        });
    }
});

// hero slider
const heroSlides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

// showslide
function showSlide(index) {

    // hapus active
    heroSlides.forEach(slide => {
        slide.classList.remove("active-slide");
    });
    dots.forEach(dot => {
        dot.classList.remove("active-dot");
    });

    // active
    heroSlides[index].classList.add(
        "active-slide"
    );

    dots[index].classList.add(
        "active-dot"
    );
}

// nextslide
function nextSlide() {
    currentSlide++;
    if (currentSlide >= heroSlides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

// auto slide
setInterval(() => {
    nextSlide();
}, 4000);

// dot click
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

showSlide(currentSlide);

