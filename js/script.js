//password login
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', () => {
        const isPasswordHidden = passwordInput.type === 'password';
        passwordInput.type = isPasswordHidden ? 'text' : 'password';
        togglePassword.innerHTML = isPasswordHidden
            ? '<i class="fa-regular fa-eye-slash"></i>'
            : '<i class="fa-regular fa-eye"></i>';
    });
}

//password
const toggleOtp = document.getElementById('toggleOtp');
const otpInput = document.getElementById('otp');
if (toggleOtp && otpInput) {
    toggleOtp.addEventListener('click', () => {
        const isPasswordHidden =
            otpInput.type === 'password';
        otpInput.type =
            isPasswordHidden ? 'text' : 'password';
        toggleOtp.innerHTML = isPasswordHidden
            ? '<i class="fa-regular fa-eye-slash"></i>'
            : '<i class="fa-regular fa-eye"></i>';
    });
}

//confirm password
const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
const confirmPasswordInput = document.getElementById('confirmPassword');
if (toggleConfirmPassword && confirmPasswordInput) {
    toggleConfirmPassword.addEventListener('click', () => {
        const isPasswordHidden =
            confirmPasswordInput.type === 'password';
        confirmPasswordInput.type =
            isPasswordHidden ? 'text' : 'password';
        toggleConfirmPassword.innerHTML = isPasswordHidden
            ? '<i class="fa-regular fa-eye-slash"></i>'
            : '<i class="fa-regular fa-eye"></i>';
    });
}

//form login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email =
            document.getElementById('email').value.trim();
        const password =
            passwordInput.value.trim();
        if (!email || !password) {
            alert('Semua field wajib diisi!');
            return;
        }
        alert('Login berhasil!');
    });
}

//forgot
const forgotForm = document.getElementById('forgotForm');
if (forgotForm) {
    forgotForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email =
            document.getElementById('email').value.trim();
        const password =
            otpInput.value.trim();
        if (!email || !password) {
            alert('Semua field wajib diisi!');
            return;
        }
        alert('Password berhasil direset!');
    });
}

function navigateTologin(){
    window.location.href = 'login.html'
}