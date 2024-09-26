class BankAccount { 
  constructor(saldoAwal = 0) {
    this.saldo = saldoAwal;
    this.riwayatTransaksi = []; //untuk menyimpan riwayat transaksi
  }

  // ini adalah function untuk mendapatkan saldo
  getSaldo() {
    return this.saldo;
  }

  // yang ini function untuk mendapatkan riwayat transaksi
  getRiwayatTransaksi() {
    return this.riwayatTransaksi;
  }

  // Mensimulasikan operasi deposit secara asynchronous
  deposit(jumlah) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.saldo += jumlah;
        this.riwayatTransaksi.push({
          jenis: "Deposit",
          jumlah: jumlah,
          tanggal: new Date().toLocaleString(),
        });
        console.log(`Deposit sebesar ${jumlah}. Saldo baru: ${this.saldo}`);
        resolve();
      }, 2000); // ini untuk menunda aktivitas selama 2 detik
    });
  }

  // Mensimulasikan operasi withdraw secara asynchronous
  withdraw(jumlah) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (jumlah <= this.saldo) { 
          this.saldo -= jumlah;
          this.riwayatTransaksi.push({
            jenis: "Withdraw",
            jumlah: jumlah,
            tanggal: new Date().toLocaleString(),
          });
          console.log(`Penarikan sebesar ${jumlah}. Saldo baru: ${this.saldo}`);
          resolve();
        } else {
          console.log(
            `Saldo tidak mencukupi. Penarikan sebesar ${jumlah} gagal.`
          );
          reject("Saldo tidak mencukupi.");
        }
      }, 3000); // ini untuk menunda withdraw selama 3 detik
    });
  }
}
