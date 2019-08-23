//  1. object literal
// let mahasiswa1 = {
//     nama: 'Idham Kholid',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat makan !`);
//     }
// }
// let mahasiswa2 = {
//     nama: 'Rama',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat makan !`);
//     }
// }


// 2. Function Declaration

const methodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    },
    main: function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    },
    tidur: function (jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, selamat tidur!`);
    }
};

function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    return mahasiswa;
}

let Idham = Mahasiswa('Idham Kholid', 10);

// // 3. Constructor function
// // keyword new
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }
// }


// let idham = new Mahasiswa('Idham Kholid', 10);

