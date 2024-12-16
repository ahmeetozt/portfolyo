let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
}











// EmailJS için gerekli olan API anahtarlarını ve servis bilgilerini ayarlıyoruz
emailjs.init("63oVLEEz8YOLGtMGV"); // Buraya EmailJS kullanıcı ID'nizi yerleştirin

// Formu yakalıyoruz
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Sayfanın yeniden yüklenmesini engelliyoruz

    // Form verilerini alıyoruz
    var form = event.target;

    // Form verilerini göndermek için emailjs'i kullanıyoruz
    emailjs.sendForm('service_z13af3e', 'template_mqehgxi', form)
        .then(function(response) {
            alert("Mesajınız başarıyla gönderildi!");
            form.reset();  // Formu sıfırlıyoruz
        }, function(error) {
            alert("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
            console.log("Hata:", error);
        });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun sayfa yenilemesini engeller
  
    // EmailJS formunu gönderme
    emailjs.sendForm('service_2983129831', 'YOUR_TEMPLATE_ID', this)
      .then(function(response) {
        console.log('Success:', response);
  
        // Pop-up'ı göster
        document.getElementById('popup').style.display = 'block';
      }, function(error) {
        console.log('Error:', error);
      });
  });
  
  // Pop-up'ı kapatma işlemi
  document.getElementById('popup-close').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
  });
  
