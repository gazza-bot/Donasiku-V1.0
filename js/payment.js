// =========================
// GET DATA FROM LOCAL STORAGE
// =========================
const campaignImage =
    localStorage.getItem("campaignImage");

const campaignTitle =
    localStorage.getItem("campaignTitle");

const campaignCategory =
    localStorage.getItem("campaignCategory");

const campaignCategoryClass =
    localStorage.getItem(
        "campaignCategoryClass"
    );

const campaignProgress =
    localStorage.getItem("campaignProgress");

const campaignCollected =
    localStorage.getItem("campaignCollected");


// =========================
// SET DATA TO PAYMENT PAGE
// =========================
const paymentImage =
    document.getElementById("paymentImage");

const paymentTitle =
    document.getElementById("paymentTitle");

const paymentCategoryEl =
    document.getElementById("paymentCategory");

const paymentCollectedEl =
    document.getElementById("paymentCollected");

const paymentProgressEl =
    document.getElementById("paymentProgress");


// =========================
// IMAGE
// =========================
if (paymentImage && campaignImage) {

    paymentImage.src =
        campaignImage;

}


// =========================
// TITLE
// =========================
if (paymentTitle && campaignTitle) {

    paymentTitle.innerText =
        campaignTitle;

}


// =========================
// CATEGORY
// =========================
if (paymentCategoryEl && campaignCategory) {

    paymentCategoryEl.innerText =
        campaignCategory;

    // set warna badge
    if (campaignCategoryClass) {

        paymentCategoryEl.className =
            campaignCategoryClass;

    }

}


// =========================
// COLLECTED
// =========================
if (paymentCollectedEl && campaignCollected) {

    paymentCollectedEl.innerText =
        campaignCollected;

}


// =========================
// PROGRESS
// =========================
if (paymentProgressEl && campaignProgress) {

    paymentProgressEl.style.width =
        campaignProgress;

    console.log("Progress Ditemukan : " + campaignProgress)

}


// =========================
// PAYMENT METHOD
// =========================
const paymentMethods =
    document.querySelectorAll(".payment-method");

paymentMethods.forEach(method => {

    method.addEventListener("click", () => {

        paymentMethods.forEach(item => {

            item.classList.remove("active");

        });

        method.classList.add("active");

    });

});


// =========================
// QUICK BUTTON DONATION
// =========================
const quickButtons =
    document.querySelectorAll(".quick-btn");

const paymentInput =
    document.getElementById("paymentInput");

quickButtons.forEach(button => {

    button.addEventListener("click", () => {

        quickButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const amount =
            button.dataset.amount;

        paymentInput.value =
            amount;

        updatePayment();

    });

});


// =========================
// SUMMARY
// =========================
const summaryNominal =
    document.getElementById("summaryNominal");

const summaryTotal =
    document.getElementById("summaryTotal");


// =========================
// INPUT EVENT
// =========================
if (paymentInput) {

    paymentInput.addEventListener(
        "input",
        updatePayment
    );

}


// =========================
// UPDATE PAYMENT
// =========================
function updatePayment() {

    let amount =
        parseInt(paymentInput.value) || 0;

    let admin = 1000;

    let total =
        amount + admin;

    if (summaryNominal) {

        summaryNominal.innerText =
            "Rp " +
            amount.toLocaleString("id-ID");

    }

    if (summaryTotal) {

        summaryTotal.innerText =
            "Rp " +
            total.toLocaleString("id-ID");

    }

}


// =========================
// PAY BUTTON
// =========================
const payButton =
    document.querySelector(".pay-btn");

if (payButton) {

    payButton.addEventListener("click", () => {

        const amount =
            parseInt(paymentInput.value);

        // validation
        if (!amount || amount <= 0) {

            alert(
                "Masukkan nominal donasi!"
            );

            return;

        }

        // active payment method
        const activeMethod =
            document.querySelector(
                ".payment-method.active"
            );

        let methodName =
            "Belum dipilih";

        if (activeMethod) {

            methodName =
                activeMethod.innerText.trim();

        }

        // success alert
        alert(
            "Pembayaran berhasil 🎉\n\n" +
            "Campaign : " +
            campaignTitle +
            "\n" +
            "Nominal : Rp " +
            amount.toLocaleString("id-ID") +
            "\n" +
            "Metode : " +
            methodName
        );

    });

}


// =========================
// DONATE BUTTON
// =========================
const donateButtons =
    document.querySelectorAll(".donate-btn");

donateButtons.forEach(button => {

    button.addEventListener("click", () => {

        // get card
        const card =
            button.closest(".campaign-link");

        if (!card) return;

        // =========================
        // IMAGE
        // =========================
        const image =
            card.querySelector("img").src;

        // =========================
        // TITLE
        // =========================
        let title = "";

        if (card.querySelector("h2")) {

            title =
                card.querySelector("h2").innerText;

        } else if (card.querySelector("h3")) {

            title =
                card.querySelector("h3").innerText;

        }

        // =========================
        // CATEGORY
        // =========================
        let category = "";
        let categoryClass = "";

        if (card.querySelector(".hero-badge")) {

            const badge =
                card.querySelector(".hero-badge");

            category =
                badge.innerText;

            // ambil warna badge
            categoryClass =
                badge.className;

        } else if (
            card.querySelector(".card-badge")
        ) {

            const badge =
                card.querySelector(".card-badge");

            category =
                badge.innerText;

            // ambil warna badge
            categoryClass =
                badge.className;

        }

        // =========================
        // PROGRESS
        // =========================
        let progress = "0%";

        if (card.querySelector(".progress")) {

            progress =
                card.querySelector(".progress")
                .style.width;

        }

        // =========================
        // COLLECTED
        // =========================
        let collected = "";

        if (card.querySelector(".hero-amount h3")) {

            collected =
                card.querySelector(".hero-amount h3")
                .innerText;

        } else if (
            card.querySelector(".card-amount h4")
        ) {

            collected =
                card.querySelector(".card-amount h4")
                .innerText;

        }

        // =========================
        // SAVE TO LOCAL STORAGE
        // =========================
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
            "campaignCategoryClass",
            categoryClass
        );

        localStorage.setItem(
            "campaignProgress",
            progress
        );

        localStorage.setItem(
            "campaignCollected",
            collected
        );

        // =========================
        // REDIRECT
        // =========================
        window.location.href =
            "payment.html";

    });

});