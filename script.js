// Mendefinisikan variabel color dengan nilai awal "black" dan click dengan nilai awal false
let color = "black";
let click = false;

// Fungsi untuk mengisi papan kotak dengan ukuran tertentu
function populateBoard(size) {
   // Mengambil elemen papan kotak dari documen
   const BOARD = document.querySelector(".board");

   // Mengambil semua elemen pada board dan menghapusnya
   const SQUARES = BOARD.querySelectorAll("div");
   SQUARES.forEach((div) => div.remove());

   // Mengatur tata letak grid pada papan kotak sesuai ukuran yang diberikan
   BOARD.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
   BOARD.style.gridTemplateRows = `repeat(${size}, 1fr)`;

   // Menghitng jumlah total kotak pada papan
   const AMOUNT = size * size;

   // Membuat kotak-kotak baru dan menambahkan event listener untuk peristiwa mouseover
   for (let i = 0; i < AMOUNT; i++) {
      let square = document.createElement("div");
      square.addEventListener("mouseover", colorSquare);
      square.style.backgroundColor = "white";
      BOARD.insertAdjacentElement("beforeend", square);
   }
}

// Mengisi papan dengan ukuran awal 16
populateBoard(19);

// Fungsi untuk mengubah ukuran papan berdasarkan input pengguna
function changeSize(input) {
   // Mengecek apakah ukuran input berada dalam rentang yang diizinkan (2-100)
   if (input >= 2 && input <= 100) {
      // Menyembunyikan pesan error jika ukuran valid
      document.querySelector(".error").style.display = "none";
      // Memanggil fungsi populateBoard dengan ukuran baru
      populateBoard(input);
   } else {
      // Menampilkan pesan error jika ukuran tidak valid
      document.querySelector(".error").style.display = "flex";
   }
}

function colorSquare() {
   if (click) {
      if (color === "random") {
         this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      } else {
         this.style.backgroundColor = color;
      }
   }
}

// Fungsi untuk megubah warna yang akan digunakan dalam pewarnaan kotak
function changeColor(choice) {
   color = choice;
}

// Fungsi untuk mereset warna semua kotak pada papan
function resetBoard() {
   const BOARD = document.querySelector(".board");
   const SQUARES = BOARD.querySelectorAll("div");
   SQUARES.forEach((div) => (div.style.backgroundColor = "white"));
}

// Menambahkan event listener pada elemen body untuk mendeteksi klik
document.querySelector("body").addEventListener("click", (e) => {
   // Mengecek apakah elemen yang diklik bukanlah tombol
   if (e.target.tagName != "BUTTON") {
      // Mengubah status klik menjadi kebalikan dari nilai sebelumnya
      click = !click;
      // Mengubah teks pada elemen dengan kelas "mode" sesuai dengan status klik
      if (click) {
         document.querySelector(".mode").textContent = "Mode: Coloring";
      } else {
         document.querySelector(".mode").textContent = "Mode: Not Coloring";
      }
   }
});
