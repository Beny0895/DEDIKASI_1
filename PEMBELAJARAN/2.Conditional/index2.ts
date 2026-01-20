// RABU, 7, JANUARY 2026, 14.31 - 16.42. lama karena nonton

let nilai: number = 100;
if(nilai >= 80 && nilai === 100 ) {
    const pemberitahuan = "lulus"
    console.log(pemberitahuan);
} else if (nilai <80 && nilai >=1 ) {
    console.log("remedial");
} else if (nilai === 0) {
    console.log("tidak lulus")
} else {
    console.log("tidak mengikuti ujian")
}


let value: number = 80;
switch (true) {
    case value >=80 : //1
        console.log("lulus");
    break
    case value < 80 : //2
        console.log("tidak lulus");
    break
    default: //3
        console.log("tidak mengikuti ujian")
}

let buah: string = "apel"
switch (buah) {
    case "apel" :
        const harga = "harga buah apel 10.000"
        console.log(harga);
    break
    case "jeruk":
        console.log("harga buah jeruk 8.000");
    break
    default: 
        console.log("tidak beli buah");
}



// Buat program untuk mengecek apakah angka lebih besar dari 100.
let angka1: number = 10;
if(angka1 >= 100) {
    console.log("angka lebih dari 100")
} if (angka1 < 100) {
    console.log("angka kurang dari 100")
};

// Buat program untuk mengecek apakah sebuah string kosong atau tidak.
let kalimat: string = "";
if(kalimat === "") {
    console.log("string kosong");
} if (kalimat !="") {
    console.log("string tidak kosong")
}

// Buat program untuk mengecek apakah saldo lebih dari 1.000.000.
let saldo: number = 10000;
if(saldo >= 1000000) {
    console.log("saldo lebih dari 1.000.000");
}

// Buat program untuk mengecek login berhasil atau gagal berdasarkan username.
let username: string = "agus";
if (username === "budi") {
    console.log("login berhasil");
} else {
    console.log("login gagal")
};

// Buat program untuk mengecek nilai ujian lulus atau tidak lulus (≥ 75).

let nilaiujian: number = 74;
if(nilaiujian >= 75) {
    console.log("lulus")
} else {
    console.log("tidak lulus")
}

// Buat program untuk mengecek apakah suhu panas (> 30) atau normal.
let suhu: number = 40
if(suhu >=30) {
    console.log("suhu panas");
} else {
    console.log("suhu tidak panas")
};

// Buat program yang menampilkan jenis kendaraan berdasarkan kode (M, C, B).

let kendaraan: string = "avanza";
switch (kendaraan) {
    case "avanza" :
        console.log("kode M");
    break;
    case "ferari" :
        console.log("kode C");
    break
    case "bmw" :
        console.log("kode B");
}

// Buat program untuk menampilkan bulan berdasarkan angka 1–12.
let angka: number = 10;
switch (angka) {
    case 1 :
        console.log("january"); break;
    case 2 :
        console.log("february");break;
    case 3 :
        console.log("maret");break;
    case 4 :
        console.log("april"); break;
    case 5 :
        console.log("mei");break;
    case 6 :
        console.log("juni");break;
    case 7 :
        console.log("juli");break;
    case 8 :
        console.log("agustus");break;
    case 9 :
        console.log("september");break;
    case 10 :
        console.log("oktober");break;
    case 11 :
        console.log("november");break;
    case 12 : 
    console.log("desember");break;
};

// Buat program yang menampilkan status pembayaran (lunas, pending, batal).
let status1: string = "lunas";
switch (status1) {
    case "lunas" :
        console.log("lunas");
    break;
    case "pending" :
        console.log("pending");
    break;
    case "batal" :
        console.log("batal");
};

