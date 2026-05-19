import axios from "axios"

// 1. Khởi tạo instance của axios
const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Thay đổi URL này thành URL của backend của bạn
  timeout: 10000, // Sau 10 giây nếu không có phản hồi sẽ báo lỗi
})

// 2. Cấu hình Request Interceptor
api.interceptors.request.use(
  (config) => {
    // Vì Next.js có Render phía Server, ta cần kiểm tra xem có đang ở trình duyệt không
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('accessToken')
      if (token) {
        // Tự động thêm Token vào Header cho mọi yêu cầu
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 3. Cấu hình Response Interceptor (Tùy chọn nhưng nên có)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Xử lý lỗi tập trung tại đây (ví dụ: 401 thì đẩy về trang login)
    if (error.response?.status === 401) {
      console.error('Token hết hạn hoặc không hợp lệ!')
    }
    return Promise.reject(error)
  }
)

export default api
