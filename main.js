var gambarDB = document.getElementsByClassName('row')[0]
var statusDBS = false
var buttonMulai = document.getElementById('mulai')

function about(){
  alert('Know MangaKu adalah sebuah tes pengetahuan tentang manga Dragon Ball dan One Piece.')
}

function openWin(file) {
    window.open(file,"_blank"," scrollbars=yes, width=350, height=600")
}

function closeWin() {
    window.close()
}


// DRAGON BALL SUPER =================================================================================
function db(){
  var fileHTML = "dbs.html"
  gambarDB.children[0].children[1].addEventListener("click",  openWin(fileHTML))
  // console.log(gambarDB.children[0].children[1])
}

function buttonMulaiOP(){
  closeWin()
  openWin("pertanyaan.html")
}

var pertanyaanDBS = [
                      ['Berasal dari negara mana, komik Dragon Ball Super', 'c'],
                      ['Jurus Kamehameha, berasal dari nama?', 'a'],
                      ['Siapakah mangaka dari manga Dragon Ball?', 'a'],
                      ['Dimanakah Akira Toriyama dilahirkan?', 'c'],
                      ['Tanggal berapa Akira Toriyama dilahirkan?', 'd'],
                    ]
var pilihanDBS = [
                  ['a.Korea', 'b.Indonesia', 'c.Jepang', 'd.Cina'],
                  ['a.Seorang Raja', 'b.Sebuah Tempat', 'c.Seekor Naga', 'd.Sebuah Pusaka'],
                  ['a.Akira Toriyama', 'b.', 'c.', 'd.'],
                  ['a.', 'b.', 'c.Prefektur Aichi, Jepang', 'd.'],
                  ['a.15', 'b.25', 'c.7', 'd.5']
                 ]
// console.log(pilihanDBS)


// ONE PIECE =================================================================================
function op(){
  if(statusDBS===false){
    alert("Kamu baru memulai kuis atau kamu belum lulus LEVEL 1 \n silakan pilih kuis LEVEL 1")
  }
  else {
    var fileHTML = "op.html"
    gambarDB.children[1].children[1].addEventListener("click",  openWin(fileHTML))
    // console.log(gambarDB.children[1].children[1])
  }
}
