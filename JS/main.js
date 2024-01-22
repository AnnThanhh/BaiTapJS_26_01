function kiemTraDiem() {
   let diemChuan = parseFloat(document.getElementById("diemChuan").value);
   let diemMon1 = parseFloat(document.getElementById("diemMon1").value);
   let diemMon2 = parseFloat(document.getElementById("diemMon2").value);
   let diemMon3 = parseFloat(document.getElementById("diemMon3").value);
   let khuVuc = document.getElementById("khuVuc").value;
   let doiTuong = parseInt(document.getElementById("doiTuong").value);

    let diemKhuVuc = 0;
    let diemDoiTuong = 0;

    switch (khuVuc) {
        case 'A':
            diemKhuVuc = 2;
            break;
        case 'B':
            diemKhuVuc = 1;
            break;
        case 'C':
            diemKhuVuc = 0.5;
            break;
        case 'X':
            diemKhuVuc = 0;
            break;
        default:
            diemKhuVuc = 0;
    }

    switch (doiTuong) {
        case 1:
            diemDoiTuong = 2.5;
            break;
        case 2:
            diemDoiTuong = 1.5;
            break;
        case 3:
            diemDoiTuong = 1;
            break;
        case 0:
            diemDoiTuong = 0;
            break;
        default:
            diemDoiTuong = 0;
    }

    if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
        hienThiKetQua("Rớt (Có môn điểm 0)");
        return;
    }

   let diemTongKet = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong;

    if (diemTongKet >= diemChuan) {
        hienThiKetQua(`Đậu với điểm tổng kết là ${diemTongKet}`);
    } else {
        hienThiKetQua("Rớt");
    }
}

function hienThiKetQua(ketQua) {
   let ketQuaElement = document.getElementById("ketQua");
    ketQuaElement.innerHTML = `<p>${ketQua}</p>`;
}