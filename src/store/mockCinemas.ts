// Định nghĩa cấu trúc kiểu dữ liệu để đảm bảo an toàn Type trong TypeScript
export interface LichChieuPhim {
  maPhim: number;
  tenPhim: string;
  hinhAnh: string;
  lstLichChieuTheoPhim: string[];
}

export interface CumRap {
  maCumRap: string;
  tenCumRap: string;
  diaChi: string;
  danhSachPhim: LichChieuPhim[];
}

export interface HeThongRap {
  maHeThongRap: string;
  logo: string;
  lstCumRap: CumRap[];
}

// 1. Danh sách 10 Hệ thống rạp lớn chuẩn thực tế tại Việt Nam
const SYSTEMS_POOL = [
  { ma: 'CGV', ten: 'CGV Cinema', logo: 'https://movienew.cybersoft.edu.vn/hinhanh/cgv.png' },
  { ma: 'BHD', ten: 'BHD Star Cineplex', logo: 'https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png' },
  { ma: 'GALAXY', ten: 'Galaxy Cinema', logo: 'https://movienew.cybersoft.edu.vn/hinhanh/galaxy-cinema.png' },
  { ma: 'LOTTE', ten: 'Lotte Cinema', logo: 'https://movienew.cybersoft.edu.vn/hinhanh/lotte-cinema.png' },
  { ma: 'CINESTAR', ten: 'CineStar', logo: 'https://movienew.cybersoft.edu.vn/hinhanh/cinestar.png' },
  { ma: 'MEGAGS', ten: 'MegaGS Cinema', logo: 'https://movienew.cybersoft.edu.vn/hinhanh/megags.png' },
  { ma: 'BETA', ten: 'Beta Cinemas', logo: 'https://movienew.cybersoft.edu.vn/hinhanh/cgv.png' }, 
  { ma: 'DCINE', ten: 'Dcine Amigo', logo: 'https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png' },
  { ma: 'TOUCH', ten: 'Touch Cinema', logo: 'https://movienew.cybersoft.edu.vn/hinhanh/galaxy-cinema.png' },
  { ma: 'CINEBOX', ten: 'CinéBox Việt Nam', logo: 'https://movienew.cybersoft.edu.vn/hinhanh/cinestar.png' }
];

// Danh sách 10 khu vực/quận huyện để phân bổ chi nhánh rạp
const DISTRICTS = [
  'Quận 1', 'Quận 3', 'Quận 5', 'Quận 7', 'Quận 10', 
  'Quận Tân Bình', 'Quận Bình Thạnh', 'Quận Gò Vấp', 'Quận Phú Nhuận', 'Thành phố Thủ Đức'
];

// Danh sách các Trung tâm Thương mại lớn đính kèm tên rạp
const HUBS = ['Vincom Center', 'Goldview Mall', 'Aeon Mall', 'Crescent Mall', 'Bitexco Tower', 'Hùng Vương Plaza', 'Cantavil Center', 'Gigamall', 'Lotte Mart', 'Pearl Plaza'];

// Kho phim mẫu xoay vòng lịch chiếu
const MOVIES_POOL = [
  { maPhim: 101, tenPhim: 'Đào, Phở Và Piano', hinhAnh: 'https://picsum.photos/id/33/100/150', times: ['09:10', '12:30', '15:45', '19:00', '21:30'] },
  { maPhim: 102, tenPhim: 'Chuyến Xe Băng Giá', hinhAnh: 'https://picsum.photos/id/44/100/150', times: ['10:00', '14:15', '18:30', '22:00'] },
  { maPhim: 103, tenPhim: 'Captain America: Brave New World', hinhAnh: 'https://picsum.photos/id/10/100/150', times: ['08:30', '11:00', '14:30', '17:15', '20:00', '22:45'] },
  { maPhim: 104, tenPhim: 'Avatar: The Way of Water', hinhAnh: 'https://picsum.photos/id/22/100/150', times: ['09:00', '13:15', '16:45', '20:30'] }
];

// 2. Hàm tự động sinh mảng dữ liệu cấu trúc 10x10 (10 Hệ thống x 10 Rạp chi nhánh)
const generateMockCinemas = (): HeThongRap[] => {
  return SYSTEMS_POOL.map((sys, idxSys) => {
    const lstCumRap: CumRap[] = [];

    for (let i = 1; i <= 10; i++) {
      const dist = DISTRICTS[i - 1];
      const hub = HUBS[i - 1];
      
      // Tạo mã cụm rạp và tên cụm rạp chuẩn hóa viết thường không dấu cách
      const maCumRap = `${sys.ma.toLowerCase()}-${hub.toLowerCase().replace(/\s+/g, '-')}-${i}`;
      const tenCumRap = `${sys.ten} - ${hub} ${dist}`;
      const diaChi = `Số ${i * 24 + 15} Đường Trần Hưng Đạo, ${dist}, TP. Hồ Chí Minh`;

      // Phân bổ ngẫu nhiên xoay vòng 2 phim bất kỳ kèm các khung giờ chiếu khác nhau cho rạp
      const movie1 = MOVIES_POOL[(idxSys + i) % MOVIES_POOL.length];
      const movie2 = MOVIES_POOL[(idxSys + i + 2) % MOVIES_POOL.length];

      const danhSachPhim: LichChieuPhim[] = [
        {
          maPhim: movie1.maPhim,
          tenPhim: movie1.tenPhim,
          hinhAnh: movie1.hinhAnh,
          lstLichChieuTheoPhim: movie1.times
        },
        {
          maPhim: movie2.maPhim,
          tenPhim: movie2.tenPhim,
          hinhAnh: movie2.hinhAnh,
          lstLichChieuTheoPhim: movie2.times
        }
      ];

      lstCumRap.push({
        maCumRap,
        tenCumRap,
        diaChi,
        danhSachPhim
      });
    }

    return {
      maHeThongRap: sys.ma,
      logo: sys.logo,
      lstCumRap
    };
  });
};

// Xuất hằng số chứa trọn vẹn dữ liệu 100 cụm rạp ra ngoài sử dụng công khai
export const mockCinemas: HeThongRap[] = generateMockCinemas();
