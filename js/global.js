//search
const searchInput = document.querySelector('.search-box input');
if (searchInput) {
    searchInput.addEventListener('focus', () => {
        searchInput.style.border =
            '1px solid #19a34a';
    });

    searchInput.addEventListener('blur', () => {
        searchInput.style.border =
            '1px solid #ddd';
    });
}
// logout modal
const openLogout = document.getElementById("openLogout");
const closeLogout = document.getElementById("closeLogout");
const logoutModal = document.getElementById("logoutModal");
const logoutBtn = document.getElementById("logoutBtn");

// buka modal
if (openLogout && logoutModal) {
    openLogout.addEventListener("click", function (e) {
        e.preventDefault();
        logoutModal.classList.add("active");
    });
}

// tutup modal
if (closeLogout && logoutModal) {
    closeLogout.addEventListener("click", function () {
        logoutModal.classList.remove("active");
    });
}

// klik background
if (logoutModal) {
    logoutModal.addEventListener("click", function (e) {
        if (e.target === logoutModal) {
            logoutModal.classList.remove("active");
        }
    });
}

// logout
if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
        alert("Berhasil logout!");
        window.location.href = "index.html";
    });
}

// notif
const notif = document.querySelector(".notif");
if (notif) {
    notif.addEventListener("click", () => {
        alert(
            "Notifikasi dibuka"
        );
    });
}

// profile click
const profile = document.querySelector(".profile");
if (profile) {
    profile.addEventListener("click", () => {
        console.log(
            "Profile dibuka"
        );
    });
}


