let akun = new BankAccount(0);

// function ini untuk memperbarui tampilan saldo
function updateSaldo() {
  document.getElementById("TampilanSaldo").innerText = akun.getSaldo();
}

// function ini untuk tambahsaldo
function tambahSaldo() {
  try {
    let jumlah = parseFloat(
      window.prompt("Masukkan jumlah saldo yang ingin anda tambahkan:")
    );
    if (!isNaN(jumlah) && jumlah > 0) {
      akun.deposit(jumlah).then(() => {
        alert(
          "Saldo anda berhasil ditambahkan. \nSaldo saat ini: Rp. " +
            akun.getSaldo()
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

// function ini untuk mengurangi/penarikan saldo
function kurangiSaldo() {
  try {
    let jumlah = parseFloat(
      window.prompt("Masukkan jumlah saldo yang ingin anda tarik:")
    );
    if (!isNaN(jumlah) && jumlah > 0) {
      akun
        .withdraw(jumlah)
        .then(() => {
          alert(
            "Saldo berhasil ditarik. \nSisa saldo anda saat ini: Rp. " +
              akun.getSaldo()
          );
          updateSaldo();
        })
        .catch((error) => {
          alert("Terjadi kesalahan saat menarik saldo: " + error.message);
        });
    } else {
      alert("Jumlah yang dimasukkan tidak valid.");
    }
  } catch (error) {
    alert("Terjadi kesalahan: " + error.message);
  }
}

// function ini untuk menghapus saldo [sebenernya gaguna, tapi saya bikin aja biar lengkap ada tambah, kurang dan hapus hehe:)]
function deleteSaldo() {
  try {
    if (confirm("Apakah Anda yakin ingin menghapus saldo?")) {
      akun.saldo = 0;
      alert(
        "Saldo berhasil dihapus. \nSaldo anda saat ini: Rp. " + akun.getSaldo()
      );
      updateSaldo();
    }
  } catch (error) {
    alert("Terjadi kesalahan: " + error.message);
  }
}

// function ini untuk melihat riwayat transaksi
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
