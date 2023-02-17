let nameUser = prompt("Masukkan Nama :");
let jumlahLoop = prompt("Masukkan Jumlah Perulangan : ");

function perulanganUser(name, value) {
    if (value > 0 && value <= 50) {
        for (let i = 1; i <= value; i++) {
            console.log(`${i}. Hai Nama Saya ${name}`);
        }
        console.log("Klik F5, Untuk Refresh Browser");
    } else if (value > 50) {
        console.log("jumlah Min < 50, F5 untuk Refresh");
    } else {
        console.log("Tidak Dapat Melakukan Perulangan Jika value 0 / < 0 / huruf");
    }
}

perulanganUser(nameUser, jumlahLoop);

alert("CTRL + SHIFT + i, Untuk Melihat Hasil");