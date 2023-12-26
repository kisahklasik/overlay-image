const main = document.getElementById('root');

const externalHTML = `
<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
<symbol id="check2" viewBox="0 0 16 16">
<path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
</symbol>
<symbol id="circle-half" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
</symbol>
<symbol id="moon-stars-fill" viewBox="0 0 16 16">
<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
<path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
</symbol>
<symbol id="sun-fill" viewBox="0 0 16 16">
<path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</symbol>
</svg>

<div class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
<button class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
id="bd-theme"
type="button"
aria-expanded="false"
data-bs-toggle="dropdown"
aria-label="Toggle theme (auto)">
<svg class="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#circle-half"></use></svg>
<span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
</button>
<ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
<li>
<button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
<svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#sun-fill"></use></svg>
Light
<svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
</button>
</li>
<li>
<button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
<svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>
Dark
<svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
</button>
</li>
<li>
<button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
<svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#circle-half"></use></svg>
Auto
<svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
</button>
</li>
</ul>
</div>

<main>
<div class="container py-4">
<header class="pb-3 mb-4 border-bottom">
<a href="./" class="d-flex align-items-center text-body-emphasis text-decoration-none">
<span class="fs-4"><i class="bi bi-tencent-qq" style="font-size: 2rem;"></i> <strong>SELALUSALAH.VERCEL.APP</strong></span>
</a>
</header>

<div class="row">
<div class="col-sm-6 mb-3 mb-sm-0">
<div class="card">
<div class="card-body">
<h5 class="card-title">TWIBBON GENERATOR</h5>
<p class="card-text">Tambahkan tampilan yang disesuaikan ke profil Facebook hanya dalam beberapa langkah. Buat bingkai disini untuk teman dan pengikut Anda menggunakan Twibbon kami.</p>
<p><canvas id="c"></canvas></p>
<p>
<div class="mb-3">
<label for="formFile" class="form-label">Pastikan gambar yang di upload memiliki ukuran.</label>
<input class="form-control" name="image" type="file" id="uploadFile" accept="image/png, image/jpeg">
<input type="file" id="uploadBtn" style="display: none">
</div>
</p>
<p>
<button name="download" id="download" type="submit" class="btn btn-primary mb-3">DOWNLOAD</button>
</p>
</div>
</div>
</div>
<div class="col-sm-6">
<div class="card">
<div class="card-body">
<h5 class="card-title">Cara Membuat Bingkai:</h5>
<p class="card-text">
<ol>
<li>Klik Tombol <strong>Pilih File</strong> unggah foto terbaik kamu.</li>
<li>Kamu bisa melakukan <strong>zoom</strong>, <strong>perbesar</strong> atau <strong>perkecil</strong> dan <strong>geser foto</strong>.</li>
<li>Jika sudah sesuai, klik tombol <strong>Download</strong>.</li>
<li>Silahkan <strong><em>Bagikan</em></strong> ke sosial media kamu.</li>
<li>Selesai.</li>
</ol>
</p>
<p class="result"></p>
</div>
</div>
</div>
</div>

<!--
<div id="alertError" class="alert hidden" role="alert">
  <span class="closebtn">&times;</span>  
  <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
</div>
-->

<footer class="pt-3 mt-4 text-body-secondary border-top">
Copyright &copy; <span id="copyright"></span> <a href="https://www.facebook.com/bungferry.wa" class="text-decoration-none">Ferry Ayunda</a>.
</footer>
</div>
</main>`;
// shows the alert
main.innerHTML = externalHTML;
