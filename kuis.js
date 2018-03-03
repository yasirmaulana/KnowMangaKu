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

var bMulai = document.getElementById('mulai')
// console.log(bMulai)

bMulai.addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("kuis").innerHTML = "Masukan Nama Kamu : ";
}
