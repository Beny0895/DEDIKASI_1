// SENIN, 19, JANUARY 2026, 12.49 - 13.39. lama karena nyantai dan sambil makan

// no 1
// ["apel", "jeruk", "mangga", "pisang"] Ambil dan simpan elemen pertama elemen terakhir ke dalam variabel terpisah.
let buah = ["apel", "jeruk", "mangga", "pisang"];
let buah1 = [buah[0], buah[buah.length-1]]
console.log(buah1);

// pembelajaran saja, tidak usah dipedulikan
let buah2 = {
    buahPertama: buah[0],
    "buah Kedua": buah[buah.length-1]
}
console.log(buah2)
console.log(buah2.buahPertama)
console.log(buah2["buah Kedua"])
// 

// no 2
// [70, 80, 90] Ubah nilai 80 menjadi 85 tanpa membuat array baru.
let angka = [70, 80, 90];
angka[1] = 85;
console.log(angka);

// no 3
// ["Senin", "Selasa", "Rabu"] Lakukan Tambah "Kamis" di akhir array, Hapus elemen terakhir setelah itu.
let hari = ["senin", "selasa", "rabu"];
hari.push("kamis");
hari.pop();
console.log(hari);

// no 4
// [1, 2],[3, 4] Gabungkan keduanya menjadi satu array baru.
let number1 = [1, 2];
let number2 = [3, 4];
console.log(number1.concat(number2));
// dengan variable baru
let number3 = number1.concat(number2)
console.log(number3);

// no 5
// ["merah", "kuning", "hijau", "biru"] Ambil hanya ["kuning", "hijau"] dan simpan ke variabel baru.
let lampu = ["merah", "kuning", "hijau", "biru"];
let lampu2 = [lampu[1], lampu[lampu.length-2]]
console.log(lampu2);
// dengan method saja
console.log(lampu.slice(1,3));
//slice(start,end)