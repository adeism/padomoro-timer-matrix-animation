:root {
    --background-color: black;
    --text-color: #0f0;
    --button-color: rgba(0, 255, 0, 0.5);
    --button-hover-color: rgba(0, 255, 0, 0.7);
    --select-color: rgba(0, 0, 0, 0.5);
    --select-hover-color: rgba(0, 0, 0, 0.7);
    --font-family: 'Courier New', Courier, monospace;
}

body, html {
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: var(--background-color);
    color: var(--text-color);
    font-family: var(--font-family);
}
canvas {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
}
#timer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 72px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 0 30px var(--button-color);
    color: var(--text-color);
    z-index: 10;
}
.button-container {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 20px;
    z-index: 10;
}

/* Perubahan untuk tombol */
button {
    padding: 10px 20px; /* Padding lebih kecil */
    font-size: 18px; /* Font size lebih kecil */
    background-color: transparent; /* Background transparan */
    border: 1px solid var(--button-color); /* Tambah border */
    border-radius: 5px; /* Border radius lebih kecil */
    cursor: pointer;
    box-shadow: 0 0 15px var(--button-color);
    color: var(--text-color);
    transition: all 0.3s ease;
}

button:hover,
button:focus {
    background-color: transparent; /* Background hover dan focus tetap transparan */
    outline: none; /* Hilangkan outline bawaan */
}

/* Efek visual saat tombol focus */
button:focus {
  border-color: var(--text-color); /* Ubah warna border saat focus */
}

select {
    padding: 10px;
    font-size: 18px;
    background-color: var(--select-color);
    border: none;
    border-radius: 5px;
    color: var(--text-color);
    cursor: pointer;
    box-shadow: 0 0 10px var(--button-color);
    transition: all 0.3s ease;
}

select:hover,
select:focus {
    background-color: var(--select-hover-color);
    outline: none;
}

select:focus{
    box-shadow: 0 0 15px var(--text-color);
}

/* Popup Styles */
#popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100; /* Pastikan popup di atas elemen lain */
    visibility: hidden; /* Sembunyikan secara default */
    opacity: 0;
    transition: visibility 0s, opacity 0.5s ease;
}

#popup.show {
    visibility: visible;
    opacity: 1;
}

#popup-content {
    background-color: var(--background-color);
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 0 20px var(--button-color);
}

#popup-content h2 {
    margin-top: 0;
    color: var(--text-color);
}

#popup-content p {
    margin-bottom: 20px;
    color: var(--text-color);
}

.popup-buttons button {
    margin: 0 10px;
}

/* Alert Styles */
#alert {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--background-color);
    padding: 20px 30px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 0 20px red;
    z-index: 110; /* Alert harus di atas popup */
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s ease;
}

#alert.show {
    visibility: visible;
    opacity: 1;
}

#alert h2 {
    margin-top: 0;
    color: red; /* Warna merah untuk alert */
}

#alert p {
    color: var(--text-color);
}
