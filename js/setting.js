//theme button
const themeButtons = document.querySelectorAll(".theme-btn");
themeButtons.forEach(button => {
    button.addEventListener("click", () => {
        themeButtons.forEach(btn => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
    });
});

//save 
const saveBtn = document.querySelector(".save-btn");
saveBtn.addEventListener("click", () => {
    alert("Profil berhasil disimpan!");
});

//delete account
const deleteBtn = document.querySelector(".delete-btn");
deleteBtn.addEventListener("click", () => {
    const confirmDelete = confirm(
        "Apakah Anda yakin ingin menghapus akun?"
    );
    if (confirmDelete) {
        alert("Akun berhasil dihapus!");
    }
});

// switch toggle
const switches = document.querySelectorAll(".switch input");
switches.forEach(toggle => {
    toggle.addEventListener("change", () => {
        if (toggle.checked) {
            console.log("Aktif");
        } else {
            console.log("Nonaktif");
        }
    });
});

// edit photo
const editPhotoBtn = document.querySelector(".edit-photo");
editPhotoBtn.addEventListener("click", () => {
    alert("Fitur ganti foto profile");
});

// button hover
const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.03)";
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});

