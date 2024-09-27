class BankAccount {
  constructor(saldoAwal = 0) {
    this.saldo = saldoAwal;
    this.riwayatTransaksi = []; // untuk menyimpan data riwayat transaksi
  }

  // Function ini berguna untuk mendapatkan saldo
  getSaldo() {
    return this.saldo;
  }

  // Function ini untuk mengambil riwayat transaksi
  getRiwayatTransaksi() {
    return this.riwayatTransaksi;
  }

  // Mensimulasikan operasi deposit secara asynchronous
  deposit(jumlah) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.saldo += jumlah;
        this.riwayatTransaksi.push({
          //data yang akan dikirimkan ke riwayat transaksi
          jenis: "Deposit",
          jumlah: jumlah,
          tanggal: new Date().toLocaleString(),
        });
        resolve();
      }, 3000); // ini menunda deposit/ tambah saldo selama 3 detik
    });
  }

  // Mensimulasikan operasi withdraw secara asynchronous
  withdraw(jumlah) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (jumlah <= this.saldo) {
          this.saldo -= jumlah;
          this.riwayatTransaksi.push({
            //data yang akan dikirimkan ke riwayat transaksi
            jenis: "Withdraw",
            jumlah: jumlah,
            tanggal: new Date().toLocaleString(),
          });
          resolve();
        } else {
          reject(`${jumlah} gagal.`);
        }
      }, 4000); // ini menunda withdraw/ penarikan selama 4 detik
    });
  }
}
