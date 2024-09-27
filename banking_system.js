let akun = new BankAccount(0);

// Function ini berguna untuk memperbarui tampilan saldo
function updateSaldo() {
  document.getElementById("TampilanSaldo").innerText = akun.getSaldo();
}

// Function yang ini berguna untuk menambah saldo
function tambahSaldo() {
  try {
    let jumlah = parseFloat(
      window.prompt("Masukkan jumlah saldo yang ingin anda tambahkan:")
    );
    if (!isNaN(jumlah) && jumlah > 0) {
      akun.deposit(jumlah).then(() => {
        alert(
          `Saldo anda berhasil ditambahkan. \nSaldo saat ini: Rp. ${akun.getSaldo()}`
        );
        updateSaldo();
      });
    } else {
      alert(
        "Jumlah yang dimasukkan tidak valid.\nSilahkan masukkan jumlah yang benar!"
      );
    }
  } catch (error) {
    alert("Terjadi kesalahan: " + error.message);
  }
}

// Function untuk mengurangi/ melakukan penarikan saldo
async function kurangiSaldo() {
  try {
    let jumlah = parseFloat(
      window.prompt("Masukkan jumlah saldo yang ingin anda tarik:")
    );
    if (isNaN(jumlah) || jumlah <= 0) {
      alert("Jumlah yang dimasukkan tidak valid.");
      return; // Keluar dari fungsi jika jumlah tidak valid
    }
    await akun.withdraw(jumlah);
    alert(
      `Saldo berhasil ditarik Rp. ${jumlah}  \nSisa saldo anda saat ini: Rp. ${akun.getSaldo()}`
    );
    updateSaldo();
  } catch (error) {
    alert(`Saldo anda tidak mencukupi. \nPenarikan sebesar Rp. ${error}`);
  }
}

// Function ini saya buat untuk menghapus saldo (gaguna sih, tapi biar ada tambah, kurang sama hapus saldo aja hehe)
function deleteSaldo() {
  try {
    if (akun.getSaldo() === 0) {
      alert("Saldo anda Rp. 0 tidak perlu dihapus, cari uang dulu sana."); // Notifikasi jika saldo sudah 0
      return; // Keluar dari fungsi jika saldo sudah 0
    }

    if (confirm("Apakah Anda yakin ingin menghapus saldo?")) {
      akun.saldo = 0; // mengubah saldo menjadi 0
      akun.riwayatTransaksi = []; // Menghapus riwayat transaksi
      alert(
        `Saldo berhasil dihapus. \nSaldo anda saat ini: Rp. ${akun.getSaldo()}`
      );
      updateSaldo(); // Memperbarui tampilan saldo
    }
  } catch (error) {
    alert(error.message);
  }
}

// Function untuk melihat riwayat transaksi
function riwayatSaldo() {
  try {
    let riwayat = akun.getRiwayatTransaksi();
    let riwayatList = document.getElementById("RiwayatTransaksi");
    riwayatList.innerHTML = ""; // Kosongkan daftar sebelumnya

    riwayat.forEach((transaksi) => {
      let li = document.createElement("li");
      li.innerText = `${transaksi.jenis} sebesar Rp. ${transaksi.jumlah} || ${transaksi.tanggal}`;
      riwayatList.appendChild(li);
    });
  } catch (error) {
    alert("Terjadi kesalahan: " + error.message);
  }
}

updateSaldo();
