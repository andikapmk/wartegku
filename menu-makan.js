document.querySelector(".profile").addEventListener('click', function(){
    Swal.fire({
        icon: 'success',
        title: 'Hore ! pesananmu berhasil dibuat !',
        showConfirmButton: false,
        timer: 1500
    })
});

function tambahMenu(){
    var menu = document.forms['datamenu']['menu'].value;
    var jumlah = document.forms['datamenu']['jumlah'].value;

    var tabel = document.getElementById("databel");
    var baris = tabel.insertRow(1);
    var kol1 = baris.insertCell(0);
    var kol2 = baris.insertCell(1);

    kol1.innerHTML = menu;
    kol2.innerHTML = jumlah;
}