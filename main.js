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
                      ['1. Berasal dari negara mana, manga Dragon Ball Super?', 'c'],
                      ['2. Jurus Kamehameha, berasal dari nama?', 'a'],
                      ['3. Siapakah mangaka dari manga Dragon Ball?', 'a'],
                      ['4. Dimanakah Akira Toriyama dilahirkan?', 'c'],
                      ['5. Tanggal berapa Akira Toriyama dilahirkan?', 'd'],
                    ]
var pilihanDBS = [
                  ['a.Korea', 'b.Indonesia', 'c.Jepang', 'd.Cina'],
                  ['a.Seorang Raja', 'b.Sebuah Tempat', 'c.Seekor Naga', 'd.Sebuah Pusaka'],
                  ['a.Akira Toriyama', 'b.', 'c.', 'd.'],
                  ['a.', 'b.', 'c.Prefektur Aichi, Jepang', 'd.'],
                  ['a.15', 'b.25', 'c.7', 'd.5']
                 ]
// console.log(pilihanDBS)

function getNama(){
  var nama = document.getElementById('tampungNama').value
  document.getElementById('nama').innerHTML = 'Nama : '+nama
  document.getElementById('score').innerHTML = 'Score : '+0

  var divInputNama = document.getElementById('inputNama')
  if(divInputNama.style.display === "none") {
    divInputNama.style.display = "block";
  }
  else{
    divInputNama.style.display = "none";
  }

  // document.getElementById('pertanyaan').children[0].value = pertanyaanDBS[0][0]
  var divPertanyaan = document.getElementById('pertanyaan').children[0]
  var arrPertanyaan = document.createTextNode(pertanyaanDBS[0][0])
  divPertanyaan.appendChild(arrPertanyaan)

  var divPilihan = document.getElementById('pilihan')
  var form = document.createElement('form')

  var formAttrAction = document.createAttribute('action')
  formAttrAction.value = "''"
  form.setAttributeNode(formAttrAction)

  var formAttrId = document.createAttribute('id')
  formAttrId.value = 'formRadio'
  form.setAttributeNode(formAttrId)

  var input = document.createElement('input')
  var inputAttrType = document.createAttribute('type')
  inputAttrType.value = 'radio'
  input.setAttributeNode(inputAttrType)

  var inputAttrName = document.createAttribute('name')
  inputAttrName.value = 'PilihanGanda'
  input.setAttributeNode(inputAttrName)

  var inputAttrValue = document.createAttribute('value')
  inputAttrValue.value = 'a'
  input.setAttributeNode(inputAttrValue)

  var arrPilihanGanda = document.createTextNode(pilihanDBS[0][0])
  input.appendChild(arrPilihanGanda)
  form.appendChild(input)
  divPilihan.appendChild(form)
  console.log(divPilihan)
}


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
