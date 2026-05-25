# Donasiku 🤝

Donasiku adalah platform berbasis web (Frontend) yang dirancang untuk memfasilitasi penggalangan dana dan donasi secara online. Platform ini menyediakan antarmuka yang intuitif bagi para donatur untuk menjelajahi berbagai kampanye sosial, kemanusiaan, lingkungan, keagamaan, serta memantau transparansi laporan dana yang disalurkan.

---

## 🚀 Fitur Utama

- **Landing Page Interaktif**: Tampilan halaman utama sebelum login yang informatif mengenai visi, misi, dan daftar kampanye terpopuler.
- **Sistem Autentikasi**: Halaman Login, Register, dan Lupa Password untuk keamanan akun pengguna.
- **Dashboard Pengguna**: Panel utama setelah login untuk mengakses fitur jelajah, pelacakan riwayat transaksi, dan pengaturan.
- **Eksplorasi Kampanye & Program**: Filter kampanye berdasarkan kategori seperti Ekonomi, Agama, Pendidikan, Kesehatan, Lingkungan, dan Sosial.
- **Sistem Pembayaran (Simulasi)**: Halaman pembayaran terintegrasi untuk memproses donasi secara cepat.
- **Transparansi & Laporan**: Halaman khusus untuk melihat laporan penyaluran dana agar menjaga kepercayaan donatur.

---

## 📁 Struktur Proyek

Proyek ini dibangun menggunakan arsitektur web statis standar (HTML, CSS, JS):

```text
├── index.html            # Halaman utama (Sebelum Login)
├── aboutbefore.html      # Tentang Kami (Sebelum Login)
├── aboutafter.html       # Tentang Kami (Setelah Login)
├── login.html            # Halaman Masuk Akun
├── registerPage.html     # Halaman Daftar Akun
├── forgot.html           # Halaman Lupa Password
├── dashboard.html        # Dashboard Utama Donatur
├── kampanye.html         # Halaman Eksplorasi Kampanye
├── program.html          # Halaman Kategori Program
├── payment.html          # Halaman Proses Pembayaran
├── donasisaya.html       # Riwayat Donasi Pengguna
├── report.html           # Halaman Transparansi Laporan
├── setting.html          # Pengaturan Profil Akun
│
├── css/                  # File Styling (Modular per Halaman)
│   ├── global.css        # Variabel warna & layout utama setelah login
│   ├── globalbefore.css  # Layout utama sebelum login
│   └── ... (CSS spesifik halaman lainnya)
│
├── js/                   # Logika Interaktivitas Frontend
│   ├── dashboard.js      # Script fungsionalitas panel kontrol
│   ├── payment.js        # Script interaksi formulir pembayaran
│   └── ... (Script spesifik lainnya)
│
└── img/                  # Aset gambar, ikon, dan ilustrasi program
