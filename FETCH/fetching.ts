// SELASA, 10 FEBRUARY 2026, 13.30 - 14.30

console.log("1");

async function user() {
    console.log("2")
    const request = await fetch("https://694ba34a26e870772068a7b1.mockapi.io/api/v1/users");
    const response = await request.json();
    console.log(response);
};
user();
console.log("4");

// Fungsi async: async dipakai di depan function. Artinya: Function itu pasti return Promise di dalamnya, dan kamu boleh pakai await.
// Fungsi await: await dipakai buat nunggu hasil Promise.
// Program nunggu Promise selesai Tapi tidak nge-block aplikasi Kodenya keliatan kayak synchronous (atas ke bawah).
// Yang terjadi di balik layar: Function async dipanggil -> Ketemu await fetch(...).
  // JavaScript: mengirim tugas async (fetch) ke Web API / environment tidak menunggu, lanjut eksekusi kode lain (event loop tetap jalan).
  // Saat fetch selesai: hasilnya masuk ke microtask queue JavaScript balik lagi ke function async itu eksekusi dilanjutkan tepat setelah await.
// Hanya “menunggu” cuma function async itu saja, Bukan menunggu seluruh program JavaScript

// async → mengizin penggunaan await
// await → menunggu Promise selesai
// proses async dikirim ke Web API lewat background dan diolah
// JavaScript tetap jalanin kode lain
// setelah proses async selesai -> dikirim lagi ke JavaScript