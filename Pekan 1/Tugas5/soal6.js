function dataHandling2(data){
    data.splice(1,1,"Roman Alamsyah Elsharawy");
    data.splice(2,1,"Provinsi Bandar Lampung");
    data.splice(4,1, "Pria", "SMA Internasional Metro");
    console.log(data);

    var tanggal=data[3].split("/");
    switch (tanggal[1]){
        case '01':   { console.log(' Januari '); break; }
        case '02':   { console.log(' Februari '); break; }
        case '03':   { console.log(' Maret '); break; }
        case '04':   { console.log(' April '); break; }
        case '05':   { console.log(' Mei '); break; }
        case '06':   { console.log(' Juni '); break; }
        case '07':   { console.log(' Juli '); break; }
        case '08':   { console.log(' Agustus '); break; }
        case '09':   { console.log(' September '); break; }
        case '10':   { console.log(' Oktober '); break; }
        case '11':   { console.log(' November '); break; }
        case '12':   { console.log(' Desember '); break; }
        default:  { console.log('Tidak terjadi apa-apa'); }
    }
    tanggal.sort((a,b) => b - a);
    console.log(tanggal);
    tanggalPisah = tanggal.join("-");
    console.log(tanggalPisah);
    namaAwal = data[1].slice(0,14);
    console.log(namaAwal);
}
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);