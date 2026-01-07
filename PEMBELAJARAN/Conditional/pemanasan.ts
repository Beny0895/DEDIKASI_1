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


