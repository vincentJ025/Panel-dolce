function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  function orderform(){
    window.location.href="orderform.html"
}
function order(){
  window.location.href="Order.html"
}

  /*untuk form pemesanan */

  document.addEventListener("DOMContentLoaded", function() {
    // Memilih elemen-elemen yang diperlukan dari formulir
    const form = document.querySelector("form");
    const selectBarang = document.getElementById("barang");
    const inputJumlah = document.getElementById("jumlah");
  
    // Event listener untuk saat formulir disubmit
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Mencegah pengiriman formulir secara default
  
      // Mengambil nilai dari input nama, email, barang, dan jumlah pesanan
      const nama = document.getElementById("nama").value;
      const email = document.getElementById("email").value;
      const barang = selectBarang.value;
      const jumlah = parseInt(inputJumlah.value);
  
      // Menambahkan pesanan ke dalam container total-orders
      tambahPesanan(barang, jumlah);
  
      // Tampilkan notifikasi
      showNotification(nama, email, barang, jumlah);
  
      // Mereset nilai input jumlah
      inputJumlah.value = "";
    });
  
    // Fungsi untuk menambahkan pesanan ke dalam container total-orders
    function tambahPesanan(barang, jumlah) {
      // Memilih elemen container total-orders
      const totalOrders = document.querySelector(".total-orders");
  
      // Memilih elemen order-item sesuai dengan jenis barang
      const orderItem = totalOrders.querySelector(`.order-item[data-barang="${barang}"]`);
  
      // Mengambil nilai span quantity untuk jenis barang yang dipilih
      const spanQuantity = orderItem.querySelector(".quantity");
  
      // Mengupdate jumlah pesanan untuk jenis barang yang dipilih
      let jumlahBaru = parseInt(spanQuantity.textContent) + jumlah;
      spanQuantity.textContent = jumlahBaru;
  
      // Mengupdate total jumlah pesanan
      const totalQuantity = totalOrders.querySelector(".total-quantity");
      totalQuantity.textContent = parseInt(totalQuantity.textContent) + jumlah;
    }
  
    // Fungsi untuk menampilkan notifikasi
    function showNotification(nama, email, barang, jumlah) {
      const message = `Terima kasih ${nama} atas pemesanan barang Anda. Email konfirmasi telah dikirim ke ${email}. Anda telah memesan ${jumlah} ${barang}.`;
  
      // Tampilkan notifikasi menggunakan alert
      alert(message);
    }
  });

