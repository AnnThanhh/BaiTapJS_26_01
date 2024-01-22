//Bài tập 1
function kiemTraDiem() {
  let diemChuan = parseFloat(document.getElementById("diemChuan").value);
  let diemMon1 = parseFloat(document.getElementById("diemMon1").value);
  let diemMon2 = parseFloat(document.getElementById("diemMon2").value);
  let diemMon3 = parseFloat(document.getElementById("diemMon3").value);
  let khuVuc = document.getElementById("khuVuc").value;
  let doiTuong = parseInt(document.getElementById("doiTuong").value);

  let diemKhuVuc = 0;
  let diemDoiTuong = 0;
  let hienThiKetQua = 0;

  switch (khuVuc) {
    case "A":
      diemKhuVuc = 2;
      break;
    case "B":
      diemKhuVuc = 1;
      break;
    case "C":
      diemKhuVuc = 0.5;
      break;
    case "X":
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

  let diemTongKet = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong;

  if (diemMon1 > 10 || diemMon2 > 10 || diemMon3 > 10 || diemChuan > 30) {
    alert("Vui lòng nhập đúng thông tin");
  } else if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
    hienThiKetQua = "Rớt (Có môn điểm 0)";
  } else if (diemTongKet >= diemChuan) {
    hienThiKetQua = "Đậu với điểm tổng kết là " + diemTongKet;
  } else {
    hienThiKetQua = "Rớt";
  }

  document.getElementById("ketQua").innerHTML = "Kết quả: " + hienThiKetQua;
}

//Bài tập 2
function tinhTienDien() {
  let ten = document.getElementById("ten").value;
  let soKw = parseFloat(document.getElementById("soKw").value);
  let tien = 0;

  if (soKw <= 50) {
    tien = soKw * 500;
  } else if (soKw <= 100) {
    tien = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw <= 150) {
    tien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else {
    tien = 50 * 500 + 50 * 650 + 50 * 850 + (soKw - 150) * 1100;
  }

  document.getElementById("ketQua2").innerHTML =
    "Tên khách hàng: " +
    ten +
    "<br>Số tiền phải trả: " +
    tien.toLocaleString() +
    "đ";
}

//Bài tập 3
function tinhThue() {
  let hoTen = document.getElementById("hoTen").value;
  let tongThuNhap = parseFloat(document.getElementById("tongThuNhap").value);
  let soNguoiPhuThuoc = parseInt(
    document.getElementById("soNguoiPhuThuoc").value
  );

  let thuNhapChiuThue = tongThuNhap - 4 - soNguoiPhuThuoc * 1.6;

  let thue = 0;
  if (thuNhapChiuThue <= 60) {
    thue = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue <= 120) {
    thue = 60 * 0.05 + (thuNhapChiuThue - 60) * 0.1;
  } else if (thuNhapChiuThue <= 210) {
    thue = 60 * 0.05 + 60 * 0.1 + (thuNhapChiuThue - 120) * 0.15;
  } else if (thuNhapChiuThue <= 384) {
    thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + (thuNhapChiuThue - 210) * 0.2;
  } else if (thuNhapChiuThue <= 624) {
    thue =
      60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + (thuNhapChiuThue - 384) * 0.25;
  } else if (thuNhapChiuThue <= 960) {
    thue =
      60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + 240 * 0.25 + (thuNhapChiuThue - 624) * 0.3;
  } else {
    thue =
      60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + 240 * 0.25 + 336 * 0.3 + (thuNhapChiuThue - 960) * 0.35;
  }

  document.getElementById("ketQua3").innerHTML =
    "Họ và Tên: " + hoTen +
    "<br>Tổng thu nhập năm: " + tongThuNhap + " triệu đồng" +
    "<br>Số người phụ thuộc: " + soNguoiPhuThuoc +
    "<br>Thuế phải trả: " + thue.toFixed(2) + " triệu đồng";
}

//Bài tập 4
function hienThiNhapKetNoi() {
  let loaiKhachHang = document.getElementById("loaiKhachHang").value;
  let inputSoKetNoi = document.getElementById("soKetNoi");

  if (loaiKhachHang == "nhaDan") {
    inputSoKetNoi.disabled = true;
    inputSoKetNoi.value = "";
  } else {
    inputSoKetNoi.disabled = false;
  }
}

function tinhTienCap() {
  let maKhachHang = document.getElementById("maKhachHang").value;
  let loaiKhachHang = document.getElementById("loaiKhachHang").value;
  let soKetNoi = parseInt(document.getElementById("soKetNoi").value);
  let soKenhCaoCap = parseInt(document.getElementById("soKenhCaoCap").value);

  let phiXuLyHoaDon, phiDichVuCoBan, phiThueKenhCaoCap;

  let tongTien = 0;

  if (loaiKhachHang == "nhaDan") {
    phiXuLyHoaDon = 4.5;
    phiDichVuCoBan = 20.5;
    phiThueKenhCaoCap = 7.5 * soKenhCaoCap;
  } else if (soKetNoi > 10) {
    phiXuLyHoaDon = 15;
    phiDichVuCoBan = 75 + (soKetNoi - 10) * 5;
    phiThueKenhCaoCap = 50 * soKenhCaoCap;
  } else {
    phiXuLyHoaDon = 15;
    phiDichVuCoBan = 75;
    phiThueKenhCaoCap = 50 * soKenhCaoCap;
  }

  tongTien = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap;

  document.getElementById("ketQua4").innerHTML =
    "<h3>Hóa Đơn Cáp</h3>" +
    "Mã khách hàng: " + maKhachHang +
    "<br>Phí xử lý hóa đơn: $" + phiXuLyHoaDon.toFixed(2) +
    "<br>Phí dịch vụ cơ bản: $" + phiDichVuCoBan.toFixed(2) +
    "<br>Phí thuê kênh cao cấp: $" + phiThueKenhCaoCap.toFixed(2) +
    "<br>Tổng tiền: $" + tongTien.toFixed(2);
}
