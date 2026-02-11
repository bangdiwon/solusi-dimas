// Variable global agar tidak spam request
let isChecking = false;

function cekDomain() {
  if (isChecking) return; // Cegah klik double

  const input = document.getElementById("domainInput").value;
  const tld = document.getElementById("tldSelect").value;
  const resultBox = document.getElementById("domainResult");
  const loading = document.getElementById("loadingSpinner");
  const content = document.getElementById("resultContent");

  // Validasi Input
  if (input.trim() === "") {
    alert("Mohon masukkan nama domain dulu!");
    return;
  }

  // Gabungkan nama + ekstensi
  const fullDomain = input.trim() + tld;

  // Reset Tampilan
  isChecking = true;
  resultBox.classList.remove("d-none");
  loading.classList.remove("d-none");
  content.classList.add("d-none");

  // SIMULASI CHECK (Karena versi HTML tidak punya Backend)
  // Kita set timer 1.5 detik seolah-olah sedang loading
  setTimeout(() => {
    loading.classList.add("d-none");
    content.classList.remove("d-none");
    isChecking = false;

    // Karena kita tidak bisa cek DNS real tanpa PHP/Backend,
    // Kita akan menampilkan pesan netral dan tombol ke Whois eksternal
    content.className =
      "alert alert-info mx-auto col-lg-8 text-start shadow border-0";

    content.innerHTML = `
        <div class="d-flex align-items-center w-100 justify-content-between flex-wrap gap-3">
            <div class="d-flex align-items-center">
                <div class="icon-box bg-white text-primary rounded-circle p-2 me-3 shadow-sm">
                    <i class="fas fa-search fa-lg"></i>
                </div>
                <div>
                    <h5 class="fw-bold mb-0 text-dark">${fullDomain}</h5>
                    <small class="text-muted">Klik tombol di kanan untuk cek ketersediaan akurat.</small>
                </div>
            </div>
            <a href="https://www.whois.com/whois/${fullDomain}" 
               class="btn btn-primary rounded-pill fw-bold px-4" target="_blank">
               Cek Ketersediaan <i class="fas fa-external-link-alt ms-2"></i>
            </a>
        </div>
    `;
  }, 1500);
}
