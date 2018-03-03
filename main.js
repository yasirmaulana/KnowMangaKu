// seleksi menu about
var navigasi = document.getElementById('myNavbar')
var about = 'Know MangaKu adalah sebuah tes pengetahuan tentang manga Dragon Ball dan One Piece.'

navigasi.children[0].children[1].children[0].addEventListener('click', function(){
  alert(about)
})

// =============================================================
// seleksi kuis dragon ball
var flaglis = ''
var gambarDB = document.getElementsByClassName('row')[0]


console.log(gambarDB.children[0].children[1])
gambarDB.children[0].children[1].addEventListener("click",  openWin)

function openWin() {
    window.open("dbs.html","_blank"," scrollbars=yes, width=350, height=600");
}
