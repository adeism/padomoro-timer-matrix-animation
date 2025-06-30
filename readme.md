# Pomodoro Timer with Matrix Animation

![Gambar Pomodoro Timer Matrix beraksi](https://placehold.co/800x400.gif?text=Pomodoro+Timer+In+Action)

Sebuah alat produktivitas yang menggabungkan **Teknik Pomodoro** dengan visualisasi "Matrix rain" yang imersif. Aplikasi ini dirancang untuk membantu Anda tetap fokus pada tugas dengan membaginya menjadi interval kerja dan istirahat yang terstruktur, sambil memberikan latar belakang visual yang menarik.

Proyek ini sepenuhnya mandiri, ditulis dalam HTML, CSS, dan JavaScript murni tanpa ketergantungan pada *framework* atau pustaka eksternal.

---

## ✨ Fitur Utama

Versi saat ini adalah aplikasi yang kaya fitur dan sangat bisa disesuaikan:

* 🔄 **Siklus Pomodoro Penuh & Dapat Disesuaikan:**
    * Atur durasi untuk sesi **Kerja**, **Istirahat Pendek**, dan **Istirahat Panjang**.
    * Tentukan jumlah siklus kerja sebelum Istirahat Panjang dimulai.
    * Aktifkan/nonaktifkan fitur **Mulai Otomatis** untuk transisi sesi yang mulus.
* 🎧 **Notifikasi Audio Lanjutan:**
    * Pilih dari beberapa **suara notifikasi** yang berbeda untuk menandai akhir setiap sesi.
    * Sesuaikan **volume** suara dengan *slider* untuk pratinjau langsung.
* 🎨 **Kustomisasi Visual Matrix:**
    * Ubah **kecepatan animasi** "Matrix rain" (Lambat, Normal, Cepat).
    * Pilih **set karakter** untuk animasi, termasuk "Klasik", "Biner", dan "Katakana".
    * Ganti **warna tema** utama aplikasi (hijau, biru, merah, kuning).
* 🕶️ **Antarmuka Minimalis & Imersif:**
    * Semua tombol kontrol **menghilang secara otomatis** setelah 3 detik tidak ada aktivitas mouse untuk pengalaman yang bebas gangguan.
    * Antarmuka akan muncul kembali seketika saat mouse digerakkan.
    * Tampilan status yang jelas menunjukkan sesi Anda saat ini (misalnya, "Sesi Kerja 2/4").
* ⚡ **Mandiri & Ringan:**
    * **Tanpa ketergantungan pihak ketiga.** Tidak memerlukan Tailwind CSS, jQuery, atau *framework* lainnya.
    * Semua kode (HTML, CSS, JS) berada dalam satu file, membuatnya sangat portabel.
* 📱 **Responsif Penuh:**
    * Tampilan beradaptasi dengan baik di berbagai ukuran layar, dari desktop hingga perangkat seluler.

---

## 🚀 Evolusi Proyek

Aplikasi ini telah melalui beberapa tahap pengembangan signifikan, dengan setiap versi menambahkan perbaikan dan fitur baru berdasarkan praktik terbaik.

### Versi 1: Konsep Awal

* **Fitur:** Timer dasar 25 menit, animasi "Matrix rain", dan pengubah tema sederhana.
* **Peningkatan dari:** Ide awal.
* **Keterbatasan:** Timer menggunakan `setInterval` yang kurang akurat, nilai-nilai (seperti durasi) di-*hardcode*, dan struktur kode bisa lebih baik.

### Versi 2: Refactoring & Akurasi

* **Peningkatan:**
    * **Timer Akurat:** Logika timer dirombak untuk menggunakan `Date.now()`, memastikan tidak ada penyimpangan waktu.
    * **Kode Bersih:** Menggunakan konstanta untuk nilai-nilai penting dan struktur fungsi yang lebih rapi.
    * **Elemen Semantik:** Mengganti `div` untuk *popup* dengan elemen `<dialog>` yang lebih modern.
    * **Styling Modern:** Mengadopsi Tailwind CSS untuk tata letak yang cepat dan responsif.

### Versi 3: Pengalaman Pengguna (UX)

* **Peningkatan:**
    * **UI Auto-Hide:** Memperkenalkan fitur utama di mana tombol kontrol menghilang saat *idle* untuk tampilan yang lebih bersih.
    * **Menu Opsi Dasar:** Menambahkan tombol pengaturan (ikon *gear*) dan modal untuk mengubah durasi kerja/istirahat.

### Versi 4: Opsi Lanjutan

* **Peningkatan:**
    * **Siklus Pomodoro Penuh:** Menambahkan logika untuk **istirahat panjang** dan pelacakan siklus.
    * **Opsi Audio & Visual:** Pengguna kini dapat mengontrol **volume**, **jenis suara notifikasi**, **kecepatan animasi**, dan **set karakter**.
    * **Auto-Start:** Menambahkan *toggle* untuk memulai sesi berikutnya secara otomatis.

### Versi 5: Mandiri & Tanpa Framework (Versi Saat Ini)

* **Peningkatan:**
    * **Menghilangkan Ketergantungan:** Semua kelas utilitas Tailwind CSS **dihapus** dan diganti dengan **CSS kustom murni**. Ini membuat proyek lebih ringan dan mandiri.
    * **Perbaikan CSS:** Menyempurnakan gaya untuk *toggle switch*, *input*, dan tata letak *grid* pada dialog pengaturan.
    * **Perbaikan UX:** Memastikan dialog selalu muncul di **tengah layar**. Menambahkan **pratinjau suara** saat mengubah volume atau jenis suara di menu pengaturan.

---

## 🤝 Kontribusi & Masukan

Kontribusi dari komunitas sangat kami hargai! Jika Anda menemukan bug, memiliki saran fitur, atau ingin berkontribusi pada kode, jangan ragu untuk:

* **Melaporkan Bug:** Buka *Issue* baru di repositori GitHub.
* **Mengajukan Fitur:** Buka *Issue* baru untuk mendiskusikan ide Anda.
* **Mengirimkan Kode:** Lakukan *fork* pada repositori, buat perubahan, dan kirimkan *Pull Request*.

---

## 🔧 Cara Menggunakan

Sangat mudah untuk menjalankan aplikasi ini:

1.  Unduh file `pomodoro-timer.html`.
2.  Buka file tersebut di peramban web modern (telah diuji di Google Chrome, Mozilla Firefox, dan Microsoft Edge).
3.  Selesai! Tidak ada proses instalasi atau kompilasi yang diperlukan.
