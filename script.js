function toggleMenu() {
    var menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('active');
}








document.getElementById('loadButton').addEventListener('click', function() {
    // Menampilkan animasi loading
    document.getElementById('loadingAnimation').classList.remove('hide');
    
    // Menunda tampilan konten selama 2 detik (ini contoh, Anda bisa menggantinya dengan proses pengambilan data yang sesungguhnya)
    setTimeout(function() {
        // Menyembunyikan animasi loading
        document.getElementById('loadingAnimation').classList.add('hide');
        // Menampilkan konten
        document.getElementById('content').classList.remove('hide');
        // Mengarahkan browser ke halaman baru
        window.location.href = '/articles/technology.html';

    }, 2000); // Waktu penundaan dalam milidetik (2 detik)
});
function msg1(){
    window.alert("Website Ini Tidak Sama dengan yang lain. 🤏");
    window.alert("Website ini diperbuat daripada kombinasi hypertext markup language, cascading style sheets dan javascript sahaja. 👨‍💻")
    window.alert("Design juga direka khas dari saya. ✨")
    window.alert("#HakMilikRakyatMalaysia")
    const get = window.confirm("Disclaimer : Mana-mana informasi berkaitan yang anda gunakan untuk perkara tidak sah dan melanggar akta undang-undang adalah tanggungjawab anda sendiri.");
    if(get == true){
        window.alert("Bersemangatlah! 😄")
    }else{
        window.alert("Saya harap anda tahu apa yang anda lakukan! 🙄")
    }
}