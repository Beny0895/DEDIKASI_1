// MINGGU, 18, JANUARY 2026, 10.45 - 11.35

// no 1
// Buat sebuah array berisi 5 nama buah. Tampilkan isi array dan isi index ke-2 ke console.
const buah = ["mangga", "apel", "pisang", "jeruk", "anggur"];
console.log(buah)
console.log(buah[1]);

// no 2
// Buat array berisi 3 angka. Tambahkan 1 angka di belakang dan 1 angka di depan array [10, 20, 30] menjadi [5, 10, 20, 30, 40]
const angka = [10, 20, 30];
angka.push (40);
angka.unshift (5);
console.log(angka);


// soal 3
// Buat array berisi 5 nama kota. Hapus 1 data paling belakang dan 1 data paling depan, Tampilkan array setelah dihapus.
const kota = ["jakarta", "medan", "surabaya", "bekasi", "bogor"];
kota.pop();
kota.shift()
console.log(kota);

// no 4
// Buat array: ["merah", "kuning", "hijau"] Ubah: "kuning" menjadi "biru" Tampilkan hasil akhirnya.
const lampu = ["merah", "kuning", "hijau"];
lampu[1] = "biru"
console.log(lampu);

// no 5
// Buat array berisi beberapa angka. Tampilkan Jumlah data di dalam array dan Data terakhir dalam array
let array = [15, 23, 37, 40, 55, 60, 79];
console.log(array.length);
console.log(array[array.length - 1])
console.log(array[2])



