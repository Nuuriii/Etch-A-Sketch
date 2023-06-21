let color = "black"; // Variabel untuk menyimpan warna yang akan digunakan
let click = false; // Variabel untuk menyimpan status klik

function populateBoard(size) {
   // Fungsi untuk mengisi papan dengan kotak - kotak
   const BOARD = document.querySelector(".board");
   const SQUARES = BOARD.querySelectorAll("div");
   SQUARES.forEach((div) => div.remove()); // Menghapus kotak-kotak yang ada sebelumnya
   BOARD.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // Mengatur jumlah kolom pada grid
   BOARD.style.gridTemplateRows = `repeat(${size}, 1fr)`; // Mengatur jumlah kolom pada grid
   //console.log(BOARD);
}
