// Mendapatkan tanggal saat ini
var currentDate = new Date();

// Menyimpan tanggal target (23 April 2023) dalam variabel
var targetDate = new Date("2023-04-23T20:00:00");

// Membandingkan tanggal saat ini dengan tanggal target
if (currentDate >= targetDate) {
  // Jika tanggal saat ini setelah atau sama dengan tanggal target,
  // maka tombol akan aktif (bisa diakses) dan memberikan pemberitahuan
  document.getElementById("birthdayBtn").disabled = false;
  document.getElementById("birthdayBtn").innerHTML = "Klik ini";
} else {
  // Jika tanggal saat ini sebelum tanggal target,
  // maka tombol akan dinonaktifkan (tidak bisa diakses)
  document.getElementById("birthdayBtn").disabled = true;
  document.getElementById("birthdayBtn").innerHTML =
    "dibuka pada 23.04 2023 00.00";
}
