// SABTU, 24, JANUARY 2026, 10.20 - 11.11

// soal 1
// Buat sebuah object user yang punya properti: nama umur pekerjaan Lalu: 
// Tampilkan nilai nama Ubah umur Tambahkan properti baru status Aktif
const user = {
    nama: "budi",
    umur: 22,
    statusAktif: true,
    pekerjaan: "pembisnis"
};
console.log(user);

// soal 2
// Buat object mobil, jika bensin method jalan() → mengurangi bensin, method isiBensin() → menambah bensin
const mobil = {
    merk: "bmw",
    bensin: 5,
    jalan() {
        this.bensin -= 1
    },
    isiBensin () {
        this.bensin += 1
    }
};
mobil.isiBensin();
console.log(mobil.bensin);

// soal 3
// Buat object akun yang memiliki: username email, profil (object) -> namaLengkap, alamat, umur.
// Ambil dan tampilkan: nama lengkap alamat
const akun = {
    username: "buds",
    email: "budi@gmail.com",
    profile: {
        namaLengkap: "budi taniagus",
        alamat : "cilengusi hijau",
        umur: 22
    }
};
console.log(akun.profile.namaLengkap)
console.log(akun.profile.alamat);

// no 4
// Buat object produk dengan: nama, harga, stok Buat logika: Jika stok 0 → tampilkan "Produk habis" Jika ada → "Produk tersedia"
const produk = {
    nama: "hanphone",
    harga: 1000000,
    stock: 0,
    cekStocks() {
        if(this.stock === 0) {
            console.log("produk tersedia")
        } else {
            console.log("produk habis")
        }
    }
};
produk.cekStocks()
console.log(produk.stock);

// no 5
// Buat function cetakData() yang menerima object sebagai parameter. 
// Object berisi: nama umur kota Function menampilkan kalimat: "Nama saya ..., umur ... tahun, tinggal di ..."
interface Idata {
    nama: string,
    umur: number,
    kota: string
}
const data: Idata = {
    nama: "budi",
    umur: 22,
    kota: "cileungsi",
};
function cekData (data: Idata) {
    return console.log(`nama saya ${data.nama}, umur saya ${data.umur} tahun, sata tinggal di ${data.kota}`)
}
cekData(data);