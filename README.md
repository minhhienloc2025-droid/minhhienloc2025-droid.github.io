# VDCIM Website - Viettel Data Center Infrastructure Management

Website giới thiệu sản phẩm VDCIM của Viettel Network - Nền tảng quản trị hạ tầng số quốc gia.

## Tính năng chính

✅ **Responsive Design** - Tương thích mọi thiết bị (Desktop, Tablet, Mobile)
✅ **Multi-language** - Hỗ trợ 3 ngôn ngữ: Tiếng Việt, English, Español
✅ **Màu sắc Viettel** - Tuân thủ brand guideline của Viettel (Đỏ #E30613, Xanh #003DA5)
✅ **Tương tác hiện đại** - Animations, smooth scrolling, hover effects
✅ **Video tích hợp** - Hero section với video giới thiệu sản phẩm
✅ **Form liên hệ** - Tích hợp Google Forms để thu thập thông tin khách hàng
✅ **SEO Friendly** - Cấu trúc HTML semantic, meta tags

## Cấu trúc file

```
website-vdcim/
├── index.html              # File HTML chính
├── styles.css              # File CSS (Viettel branding)
├── script.js               # JavaScript (language switch, animations, form)
├── README.md               # Hướng dẫn này
├── VDCIM1.mp4             # Video giới thiệu sản phẩm
├── Viettel_logo.png       # Logo Viettel
└── HInh anh/              # Thư mục chứa hình ảnh
    ├── logo viettel.png
    ├── logo vdcim.png
    ├── homepage.jpg
    ├── vt1.jpg
    ├── Viettel Building 5 -1 (1).jpg
    ├── hl1.jpg
    ├── hl2.jpg
    ├── HLA.jpg
    └── tan phu.jpg
```

## Cài đặt và chạy

### Cách 1: Chạy trực tiếp (Đơn giản nhất)

1. Giải nén tất cả các file vào cùng một thư mục
2. Đảm bảo cấu trúc thư mục đúng như trên
3. Mở file `index.html` bằng trình duyệt web

### Cách 2: Sử dụng Live Server (Khuyến nghị)

1. Cài đặt [Visual Studio Code](https://code.visualstudio.com/)
2. Cài đặt extension "Live Server"
3. Mở thư mục dự án trong VS Code
4. Click chuột phải vào `index.html` → "Open with Live Server"

### Cách 3: Sử dụng Python HTTP Server

```bash
# Python 3
python -m http.server 8000

# Hoặc Python 2
python -m SimpleHTTPServer 8000

# Truy cập: http://localhost:8000
```

## Cấu hình Google Form

Để form liên hệ hoạt động, bạn cần cấu hình Google Form:

### Bước 1: Tạo Google Form

1. Truy cập [Google Forms](https://forms.google.com/)
2. Tạo form mới với các trường:
   - Họ và tên (Short answer)
   - Email (Short answer)
   - Số điện thoại (Short answer)
   - Công ty (Short answer)
   - Nội dung (Paragraph)

### Bước 2: Lấy Form ID và Entry IDs

1. Mở Google Form đã tạo
2. Click "Send" → Chọn tab "Link" → Copy link
3. Form URL sẽ có dạng: `https://docs.google.com/forms/d/e/FORM_ID/viewform`
4. Để lấy Entry IDs, mở Developer Tools (F12) → Network tab
5. Điền thử form và xem request, bạn sẽ thấy các entry IDs

### Bước 3: Cập nhật script.js

Mở file `script.js` và tìm dòng:

```javascript
const googleFormURL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
```

Thay thế bằng:

```javascript
const googleFormURL = 'https://docs.google.com/forms/d/e/YOUR_ACTUAL_FORM_ID/formResponse';

// Cập nhật các entry IDs
googleFormData.append('entry.123456789', formData.name);      // Thay 123456789
googleFormData.append('entry.987654321', formData.email);     // Thay 987654321
googleFormData.append('entry.111111111', formData.phone);     // Thay 111111111
googleFormData.append('entry.222222222', formData.company);   // Thay 222222222
googleFormData.append('entry.333333333', formData.message);   // Thay 333333333
```

## Tùy chỉnh nội dung

### Thay đổi thông tin liên hệ

Mở `index.html` và tìm section `contact`:

```html
<div class="info-item">
    <i class="fas fa-building"></i>
    <div>
        <h4>Viettel Network</h4>
        <p>No.19 Duy Tan street<br>Ha Noi - VietNam</p>
    </div>
</div>
```

### Thay đổi màu sắc

Mở `styles.css` và chỉnh sửa CSS variables:

```css
:root {
    --viettel-red: #E30613;     /* Màu đỏ Viettel */
    --viettel-blue: #003DA5;    /* Màu xanh Viettel */
    --viettel-dark: #1a1a1a;    /* Màu tối */
    --viettel-gray: #f5f5f5;    /* Màu xám nhạt */
}
```

### Thêm/sửa ngôn ngữ

Mở `script.js` và chỉnh sửa object `translations`:

```javascript
const translations = {
    vi: {
        nav_home: "Trang chủ",
        // ... thêm các key khác
    },
    en: {
        nav_home: "Home",
        // ... thêm các key khác
    }
};
```

## Tính năng chi tiết

### 1. Navigation
- Fixed navigation bar với hiệu ứng scroll
- Responsive hamburger menu cho mobile
- Smooth scrolling khi click menu items

### 2. Hero Banner Section
- Hero banner với hình ảnh Viettel Building
- Gradient overlay đẹp mắt
- Statistics counters với animation
- Dual CTA buttons

### 3. Video Demonstration Section
- Video giới thiệu sản phẩm VDCIM (67MB)
- Video controls đầy đủ (play, pause, volume, fullscreen)
- Responsive video player
- Shadow effects và hover animations

### 4. Features Section
- 6 tính năng chính với icons
- Hover effects
- Responsive grid layout

### 5. Technology Section
- 3 công nghệ cốt lõi
- Detailed bullet points
- Icon-based design

### 6. Benefits Section
- Gradient background
- Glass-morphism cards
- Key metrics highlight

### 7. Projects Gallery
- 4 dự án đã triển khai
- Image overlay với hover effect
- Responsive grid

### 8. Contact Form
- Validation
- Google Forms integration
- Success/error messages

### 9. Language Switcher
- 3 ngôn ngữ: VI, EN, ES
- Nằm trong navigation bar (bên phải "Liên hệ")
- Dropdown menu với cờ quốc gia
- Persistent selection (localStorage)
- Smooth animation
- Click outside to close
- Responsive trên mobile

## Tối ưu hóa

### Performance
- Lazy loading cho images
- Minified CSS/JS (khuyến nghị khi deploy)
- Optimized video format

### SEO
- Semantic HTML5
- Alt tags cho tất cả images
- Meta descriptions
- Structured data (có thể thêm)

### Accessibility
- ARIA labels
- Keyboard navigation
- Color contrast ratios
- Screen reader friendly

## Deploy lên hosting

### GitHub Pages (Miễn phí)

1. Tạo repository trên GitHub
2. Upload tất cả files
3. Settings → Pages → Source: main branch
4. Website sẽ có địa chỉ: `https://username.github.io/repo-name`

### Netlify (Miễn phí)

1. Kéo thả thư mục vào [Netlify Drop](https://app.netlify.com/drop)
2. Website sẽ được deploy tự động
3. Có thể custom domain

### Vercel (Miễn phí)

```bash
npm i -g vercel
cd your-project-folder
vercel
```

## Trình duyệt hỗ trợ

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile browsers

## Troubleshooting

### Video không tự động phát
- Kiểm tra file VDCIM1.mp4 có trong thư mục
- Một số trình duyệt chặn autoplay, user cần click để phát

### Hình ảnh không hiển thị
- Kiểm tra đường dẫn file trong thư mục "HInh anh"
- Đảm bảo tên file khớp với code (phân biệt hoa/thường)

### Form không gửi được
- Kiểm tra console (F12) để xem lỗi
- Đảm bảo đã cấu hình Google Form đúng

### Ngôn ngữ không chuyển
- Xóa cache trình duyệt
- Kiểm tra console có lỗi JavaScript không

## Liên hệ hỗ trợ

**Viettel Network**
- Địa chỉ: No.19 Duy Tan street, Ha Noi, Vietnam
- Email: vdcim@viettel.com.vn
- Website: www.viettel.com.vn

## License

© 2025 Viettel Network. All rights reserved.

---

**Made with ❤️ in Vietnam**

