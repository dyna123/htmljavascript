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

// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },
//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },
//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// };

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     return mahasiswa;
// }

// let Idham = Mahasiswa('Idham Kholid', 10);


// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat tidur!`;
// }


// let Idham = new Mahasiswa('Idham Kholid', 10);
// class Mahasiswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }
//     makan(porsi) {
//         this.energi += porsi;
//         return `Halo ${this.nama}, selamat makan!`;
//     }
//     main(jam) {
//         this.energi -= jam;
//         return `Halo ${this.nama}, selamat bermain!`;
//     }

//     tidur(jam) {
//         this.energi += jam * 2;
//         return `Halo ${this.nama}, selamat tidur!`;
//     }
// }

// let Idham = new Mahasiswa('Idham Kholid', 10);

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

// 4 Execution Context, hoisting dan scope
// function init() {
//     let nama = 'Idham Kholid';
//     function tampilNama() {
//         console.log(nama);
//     }
//     tampilNama();
// }
// init();

// let add = (function () {
//     let counter = 0;
//     return function () {
//         return ++counter;
//     }
// })();


// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());

// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }

// console.log(tampilNama('Idham', 'Pagi'));

// implisit return
// const tampilNama = nama => `Halo ${nama}`;
// console.log('idham');

// const tampilNama = () => `Hello World`;
// console.log(tampilNama());    

let mahasiswa = ['Idham Kholid', 'Fajar', 'Yusuf'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf: nama.length }));
console.table(jumlahHuruf)