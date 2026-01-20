// SELASA, 20, JANUARY 2026, 12.03 - 12.53

// no 1
// Buat sebuah function bernama luasPersegiPanjang yang menerima 2 parameter: panjang dan lebar, lalu mengembalikan hasil luasnya.
// Contoh Pemanggilan:luasPersegiPanjang(10, 5); // 50
function luasPersegiPanjang(panjang: number, lebar: number) {
    return (
        panjang * lebar
    );
};
console.log(luasPersegiPanjang(10, 5));

// no 2
// Buat function cekGenapGanjil yang menerima 1 parameter angka dan mengembalikan string "Genap" atau "Ganjil".
function cekGenapGanjil(angka: number): string {
    if(angka % 2 ===0) {
        return "genap"
    } else{
        return "ganjil"
    }
} 
console.log(cekGenapGanjil(7))

// dengan ternary operator
// function cekGenapGanjil(angka: number): string {
//   return angka % 2 === 0 ? "genap" : "ganjil"
// } 
// console.log(cekGenapGanjil(1))

// no 3
// Buat function hitungDiskon dengan 2 parameter: harga dan diskon (dalam persen).Function mengembalikan harga akhir setelah diskon.
function hitungDiskon (harga: number, diskon: number): number {
    return harga - (harga * diskon / 100)
};
console.log((hitungDiskon(100, 20)));

// no 4
// Buat function cekKelulusan yang menerima parameter nilai. Jika nilai ≥ 75 → "Lulus" Jika nilai < 75 → "Tidak Lulus"
function cekKelulusan(nilai: number): string {
    if(nilai >= 75) {
        return "lulus";
    }else {
        return "tidak lulus"
    };
};
console.log(cekKelulusan(75));

// no 5
// Buat function namaLengkap yang menerima namaDepan dan namaBelakang, lalu mengembalikan nama lengkap.
function namaLengkap(namaDepan: string, namaBelakang: string): string {
    return namaDepan + " " + namaBelakang
};
console.log(namaLengkap("beny","gunadi"));

// dengan template literal
// function namaLengkap(namaDepan: string, namaBelakang: string): string {
//     return `${namaDepan} ${namaBelakang}`
// };
// console.log(namaLengkap("gunadi", "beny"))
