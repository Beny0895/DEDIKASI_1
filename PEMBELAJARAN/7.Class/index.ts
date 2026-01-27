// SELASA, 27, JANUARY 2026, 22.35 - 23.43

// no 1
// Buat sebuah class bernama User.Ketentuan: Punya property: nama, umur Punya method introduce() yang mengembalikan string:
"Halo, nama saya {name} dan umur saya {age} tahun"
class User {
    nama: string;
    umur: number;

    constructor(paramsNama: string, paramsUmur: number) {
        this.nama = paramsNama;
        this.umur = paramsUmur;
    };  

    introduce () {
        return `hallo nama saya ${this.nama}, umur saya ${this.umur} tahun`
    };

};

const object = new User("budi", 22);
console.log(object);

// no 2
// Buat class Counter. Ketentuan: Property: nilai (nilai awal dari constructor) .
// Method: pertambahan() → menambah nilai +1, pengurangan() → mengurangi nilai -1, tampilkanData() → mengembalikan nilai saat ini
class Counter {
    nilai: number;

    constructor (paramsnilai: number) {
        this.nilai = paramsnilai;
    };

    pertambahan() {
        this.nilai += 1 
    };

    pengurangan() {
        this.nilai -= 1
    };

    tampilkanData() {
        return this.nilai
    };
};
const counter = new Counter(10);
counter.pengurangan();
counter.pengurangan();
counter.pengurangan();
counter.pertambahan();
counter.pertambahan();
console.log(counter.tampilkanData());

// no 3
// Buat class Produk. Ketentuan: Property: nama, harga Jika harga < 0, maka otomatis set ke 0.
// Method tampilkanInfo() mengembalikan "Produk: {nama}, Harga: {harga}"
class Produk {
    nama: string;
    harga: number;

    constructor(paramsnama: string, paramsharga: number) {
        this.nama = paramsnama;
        this.harga = paramsharga;
        if(this.harga < 0 ) {
            this.harga = 0
        } else {
            this.harga = paramsharga
        };
    };

    tampilkanInfo() {
        return `Produck: ${this.nama}, Harga ${this.harga}`
    };
};
const produk = new Produk("tv", -100000);
console.log(produk.tampilkanInfo());

// no 4
// Buat class Murid. Ketentuan: Property: nama, nilai. 
// Method tampilkanKelas(): nilai ≥ 80 → "A", nilai  ≥ 70 → "B", nilai ≥ 60 → "C", selain itu → "D"
class Murid {
    nama: string;
    nilai: number;

    constructor(paramsnama: string, paramsnilai: number) {
        this.nama = paramsnama;
        this.nilai = paramsnilai;                                       
    };

    tampilkanData() {
        if(this.nilai >= 80) {
            return "A"
        } else if (this.nilai >= 70) {
            return "B"
        } else if (this.nilai >= 60) {
            return "C"
        } else {
            return "D"
        };
    };
};
const murid = new Murid("budi", 90);
console.log(murid.tampilkanData());

// no 5
// Buat class AkunBank. Ketentuan: Property: pemilik, saldo.
// Method: deposit(amount) → tambah saldo. withdraw(amount) jika saldo cukup → kurangi saldo.
// jika tidak cukup → kembalikan string "Saldo tidak cukup" infoSaldo() → kembalikan saldo
class AkunBank {
    pemilik: string;
    saldo: number;

    constructor(paramspemilik: string, paramssaldo: number) {
        this.pemilik = paramspemilik;
        this.saldo = paramssaldo;
    };

    deposit(amount: number) {
        this.saldo +=  amount
    };

    withdraw(amount: number) {
        if(this.saldo >= amount) {
            this.saldo -= amount
            return"withdraw berhasil"
        } else {
            return "saldo tidak cukup"
        };
    };

    infoSaldo() {
        return this.saldo
    };
};
const akunbank = new AkunBank("budi", 10);
akunbank.deposit(15);
akunbank.deposit(15);
console.log(akunbank.infoSaldo());
const akunbank1 = new AkunBank("nicolas", 50);
console.log(akunbank1.infoSaldo());
console.log(akunbank1.withdraw(60));

