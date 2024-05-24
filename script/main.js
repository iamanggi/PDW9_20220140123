document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    const nik = document.getElementById('nik').value;
    const nama = document.getElementById('nama').value;
    const tempatLahir = document.getElementById('tempat_lahir').value;
    const tanggalLahir = document.getElementById('tanggal_lahir').value;
    const noHp = document.getElementById('no_hp').value;
    const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
    const alamat = document.getElementById('alamat').value;
    const caraBayar = document.getElementById('cara_bayar').value;
    const waktuPendaftaran = document.querySelector('input[name="waktu_pendaftaran"]:checked').value;

    Swal.fire({
        title: 'Konfirmasi Pendaftaran',
        html: `
            <div class="card" >
                <div class="card-body text-start ">
                    <table>
                        <tr>
                            <td><strong>NIK</strong></td>
                            <td style="padding-left: 10px; padding-bottom: 7px;"><strong>:</strong> ${nik}</td>
                        </tr>
                        <tr>
                            <td><strong>Nama Lengkap</strong></td>
                            <td style="padding-left: 10px; padding-bottom: 7px;"><strong>:</strong> ${nama}</td>
                        </tr>
                        <tr>
                            <td><strong>Tempat Lahir</strong></td>
                            <td style="padding-left: 10px; padding-bottom: 7px;"><strong>:</strong> ${tempatLahir}</td>
                        </tr>
                        <tr>
                            <td><strong>Tanggal Lahir</strong></td>
                            <td style="padding-left: 10px; padding-bottom: 7px;"><strong>:</strong> ${tanggalLahir}</td>
                        </tr>
                        <tr>
                            <td><strong>No. Handphone</strong></td>
                            <td style="padding-left: 10px; padding-bottom: 7px;"><strong>:</strong> ${noHp}</td>
                        </tr>
                        <tr>
                            <td><strong>Jenis Kelamin</strong></td>
                            <td style="padding-left: 10px; padding-bottom: 7px;"><strong>:</strong> ${jenisKelamin}</td>
                        </tr>
                        <tr>
                            <td><strong>Alamat</strong></td>
                            <td style="padding-left: 10px; padding-bottom: 7px;"><strong>:</strong> ${alamat}</td>
                        </tr>
                        <tr>
                            <td><strong>Cara Bayar</strong></td>
                            <td style="padding-left: 10px; padding-bottom: 7px;"><strong>:</strong> ${caraBayar}</td>
                        </tr>
                        <tr>
                            <td><strong>Waktu Pendaftaran</strong></td>
                            <td style="padding-left: 10px; padding-bottom: 7px;"><strong>:</strong> ${waktuPendaftaran}</td>
                        </tr>
                    </table>
                </div>
            </div>
        `,
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Konfirmasi',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {

            Swal.fire({
                title: 'Pendaftaran Berhasil!',
                text: 'Data pendaftaran Anda telah berhasil disimpan.',
                icon: 'success'
            }).then(() => {

                document.getElementById('registrationForm').submit();
            });
        } else {

            Swal.fire({
                title: 'Pendaftaran Dibatalkan',
                text: 'Terima kasih atas keputusannya. Semoga tetap sehat dan sejahtera. Jika butuh kami di lain waktu, silakan hubungi.',
                icon: 'error'
            });
        }
    });
});




