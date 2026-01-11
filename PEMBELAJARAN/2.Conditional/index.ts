// no 1
let angka: number = 1;
if (angka > 0) {
    const aksi = "Angka Posotif"
    console.log(aksi)
}

// no 2
let c: number = 75;
if( c >= 75) {
    const input = "lulus";
    console.log(input)
};

// no 3
let islogin = true
if (islogin) {
    const aksi = "User Sudah Login"
    console.log(aksi)
} else {
    const aksi = "User Tidak Login";
    console.log(aksi)
}

// no 4
let number: number = 1;
if(number % 2 == 0) {
    const aksi = "genap";
    console.log(aksi)
} else if (number % 2 == 1) {
    const aksi = "ganjil";
    console.log(aksi);
} else {
    const aksi ="masukan input"
    console.log(aksi)
}

// no 5
let d: number = 75;
if( d >= 75) {
    const input = "lulus";
    console.log(input)
} else {
    const input = "tidak lulus";
    console.log(input)
};

// no 6
let umur1: number = 0;
if(umur1 >=18) {
    const aksi = "Boleh Buat SIM";
    console.log(aksi);
} else if (umur1 < 18 && umur1 > 1 ) {
    const aksi = "Tidak Boleh Buat SIM";    
    console.log(aksi);
} else {
    const aksi = "Belum Lahir";
    console.log(aksi);
}

// SWITCH CASE
// no 7
let hari: number =1;
switch (hari) {
    case 1 :
        console.log("senin");
    break
    case 2 :
        console.log("selasa");
    break
    case 3 :
        console.log("rabu");
    break
    case 4 :
        console.log("kamis");
    break
    case 5 :
        console.log("jumat");
    break
    case 6 :
        console.log("sabtu");
    break
    case 7 :
        console.log("minggu");
    break
    default :
        console.log("hari tidak valid")
};

// no 8
let menu: string = "susu";
switch (menu) {
    case "teh" :
        console.log("harga teh 5.000");
    break
    case "kopi" :
        console.log("harga kopi 7.000");
    break
    case "susu" :
        console.log("harga susu 6.000");
    break
    default :
        console.log("Menu tidak tersedia")
}

// no 9
let lampu: string = "kuning";
switch (lampu) {
    case "merah":
        console.log("berhenti");
    break
    case "kuning":
        console.log("hati hati");
    break
    case "hijau":
        console.log("jalan");
    break
    default:
        console.log("lampu rusak")
}