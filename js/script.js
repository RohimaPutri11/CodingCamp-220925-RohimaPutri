document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk smooth scrolling ketika navigasi di klik
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Tangani submit form di index.html
    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {
        bookingForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Ambil data form
            const formData = new FormData(bookingForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Simpan ke localStorage
            localStorage.setItem("bookingData", JSON.stringify(data));

            // Redirect ke output.html
            window.location.href = "output.html";
        });
    }

    // Tampilkan data di output.html
    const savedData = JSON.parse(localStorage.getItem("bookingData"));
    if (savedData && document.getElementById("outNama")) {
        document.getElementById("outNama").textContent = savedData.nama;
        document.getElementById("outEmail").textContent = savedData.email;
        document.getElementById("outHp").textContent = savedData.hp;
        document.getElementById("outTanggal").textContent = savedData.tanggal;
        document.getElementById("outKegiatan").textContent = savedData.kegiatan;
        document.getElementById("outAlamat").textContent = savedData.alamat;

        // Hapus data ketika user meninggalkan output.html
        window.addEventListener("beforeunload", function() {
            localStorage.removeItem("bookingData");
        });
    }

    console.log("Website Cahaya Management siap!");
});
