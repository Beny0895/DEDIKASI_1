// MINGGU, 25, JANUARY 2026, 12.45 - 13.35.

// no 1
// Buat sebuah object siswa yang memiliki properti: nama umur jurusan Lalu tampilkan kalimat:
// "Nama saya ..., umur ... tahun, jurusan ..."
let siswa = {
    nama: "laguna",
    umur: 17,
    jurusan:"teknik"
}
console.log(`Nama saya ${siswa.nama}, Umur Saya ${siswa.umur}, Jurusan ${siswa.jurusan}`);

// no 2
// buat object akunBank yang memiliki: nama, saldo, method cekSaldo() → menampilkan saldo saat ini
const akunBank = {
    nama: "nicolas",
    saldo: 1000000,
    cekSaldo () {
      return `saldo saat ini ${this.saldo}`
    }
}
akunBank.cekSaldo() 
console.log(akunBank.cekSaldo());

// function balance () {
//     return akunBank.cekSaldo
// }
// balance()

// no 3
// Buat object produk dengan: nama, harga, stok. Jika stok bernilai 0, ubah harga menjadi "Habis".
type Iproduk = {
    nama: string,
    harga: number | string,
    stock: number,
    cekStock(): void,
}
const produk: Iproduk = {
    nama: "victus",
    harga: 100000,
    stock: 0,
    cekStock () {
        if(this.stock === 0) {
            this.harga = "habis"
        }
    }
}
produk.cekStock()
console.log(produk.harga);

// no 4
// Buat function cetakData() yang menerima object berisi: nama, umur, kota.
// Function menampilkan: "Halo, saya ..., umur ... tahun, tinggal di ..."
type Idata = {
    nama: string,
    umur: number,
    kota: string,
}
const data: Idata = {
    nama: "Antonio",
    umur: 22,
    kota: "cileungsi",
}
function cekData(data:Idata) {
    return console.log( `Hallo, saya ${data.nama}, umur ${data.umur} tahun, tinggal di ${data.kota}`)
}
cekData(data)

// no 5
// Buat object user yang memiliki: username profile (object) berisi: email, noHp Tampilkan email user tersebut.
const user = {
    username: "pearl",
    profile: {
        email: "ferry@gmail.com",
        noHp: +628111
    }
};
console.log(user.profile.email);
