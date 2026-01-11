// no 1
// Buat program menggunakan for untuk menampilkan angka 1 sampai 5 ke console.
for (let a :number = 0; a <=5; a++) {
    console.log(a);
};

// no 2
// Gunakan for untuk menampilkan angka genap dari 2 sampai 10.
for(let b : number = 0; b < 10; b+=2 ) {
    console.log(b)
};

// no 3
// Buat for loop yang menampilkan teks.
for (let c: number = 0; c <= 3; c++) {
    console.log("belajar javascript")
};

// no 4
// Gunakan while untuk menampilkan angka 1 sampai 5.
let d: number = 0;
while (d <= 5) {
    console.log(d);
    d++
};

// no 5
// Buat program while yang menampilkan angka 5 sampai 1 (mundur).
let e:number = 5;
while(e >= 1) {
    console.log(e)
    e--
};

// no 6
// Gunakan while untuk menampilkan angka ganjil dari 1 sampai 9.
let f: number = 9;
while(f > 0) {
    console.log(f)
    f -= 2
};

// no 7
// Buat program do...while yang menampilkan angka 1 sampai 5.
let g: number = 0;
do {
    g++
    console.log(g)
} while (g <= 5);

// no 8
// Gunakan do...while untuk menampilkan teks "Halo Dunia" sebanyak 3 kali.
let h: number = 0;
do{
    h++
    console.log("Hallo Dunia");
} while (h <= 3);

// no 9
// Buat do...while untuk menampilkan angka 10, 8, 6, 4, 2.
let i: number = 10;
do{
    console.log(i);
    i-=2
    // console.log(i);
} while (i >= 2)
