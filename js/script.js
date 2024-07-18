// Membuat variabel
let bmi;
let hasil;

function hasilBMI() {  
    // Mengambil data dari inputan
    const beratBadan = parseFloat(document.getElementById('input-berat-badan').value)
    const tinggiBadan = parseFloat(document.getElementById('input-tinggi-badan').value) / 100;

    // Menghitung BMI
    bmi = beratBadan / (tinggiBadan * tinggiBadan);
    bmi = bmi.toFixed(1);

    // Menampilkan perhitungan BMI pada HTML
    document.getElementById('hasil-bmi').innerHTML = bmi;

    // Peringatan ketika inputan kosong
    if (isNaN(beratBadan) || isNaN(tinggiBadan) || tinggiBadan === 0) {
        alert('Masukkan nilai yang valid untuk berat dan tinggi badan.');
        return;
    }

    // Kategori BMI
    if (bmi < 18.5) {
        hasil = "Kekurangan Berat Badan";
    } else if (bmi < 25) {
        hasil = "Normal (Ideal)";
    } else if (bmi < 30) {
        hasil = "Kelebihan Berat Badan";
    } else {
        hasil = "Kegemukan (Obesitas)";
    }

    // Menampilkan kategori BMI pada HTML
    document.getElementById('kategori-bmi').innerHTML = hasil;

    // Artikel sesuai hasil
    if (hasil == "Kekurangan Berat Badan"){
        keterangan = "Hasil BMI anda kurang dari 18.5"
    }
    else if (hasil == "Normal (Ideal)"){
        keterangan = "Hasil BMI anda diantara 18.5 dan 25"
    }
    else if (hasil == "Kelebihan Berat Badan"){
        keterangan = "Hasil BMI anda diantara 25 dan 30"
    }
    else {
        keterangan = "Hasil BMI anda lebih dari 30"
    }

    // Menampilkan Keterangan BMI pada HTML
    document.getElementById('keterangan-bmi').innerHTML = keterangan;
    
    // Saran menurut hasil BMI
    if (hasil == "Kekurangan Berat Badan"){
        penjelasan = "Anda berada dalam kategori kekurangan berat badan.\n Kami menganjurkan anda untuk menambah badan pada untuk menghindari gangguan kesehatan seperti kurangnya asupan nutrisi."
    }
    else if (hasil == "Normal (Ideal)"){
        penjelasan = "Berat badan sudah dalam kategori ideal.\n Kami menyarankan untuk tetap menjaga berat badan anda sekarang."
    }
    else if (hasil == "Kelebihan Berat Badan"){
        penjelasan = "Anda berada dalam kategori kelebihan berat badan.\n Kami sarankan anda untuk mengurangi berat badan anda pada kategori ideal. Cara terbaik untuk menurunkan berat badan adalah mengatur kalor makanan yang dikonsumsi dan berolahraga."
    }
    else {
        penjelasan = "Anda sudah berada dalam kategori kegemukan (Obesitas).\n Kami menganjurkan anda untuk mengurangi berat badan anda untuk menghindari penyakit yang berasal dari kegemukkan seperti hipertensi, sakit jantung, dan hipertensi."
    }

    // Menampilkan penjelasan BMI pada HTML
    document.getElementById('penjelasan-bmi').innerHTML = penjelasan;
    
    // Tambahan untuk teks konsultasi
    konsultasi = "Anda juga bisa berkonsultasi atau Registrasi online dengan Ahli Gizi"
    document.getElementById('konsultasi').innerHTML = konsultasi;

}

// Mereset inputan form
function resetForm() {
    document.getElementById('form-input').reset();    
}

function download(){
    alert('Hasil BMI sudah didownload')
}