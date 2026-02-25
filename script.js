// Translations
const translations = {
    vi: {
        // Navigation
        nav_home: "Trang chủ",
        nav_features: "Tính năng",
        nav_technology: "Công nghệ",
        nav_benefits: "Ưu thế",
        nav_projects: "Dự án",
        nav_contact: "Liên hệ",
        
        // Hero
        hero_title: "VDCIM",
        hero_subtitle: "Giải pháp \"All-in-One\" - Make in Vietnam - Led by Viettel",
        stat_datacenters: "Data Centers",
        stat_racks: "Racks",
        stat_devices: "Thiết bị hạ tầng",
        stat_servers: "Servers",
        btn_contact: "Liên hệ ngay",
        btn_learn: "Tìm hiểu thêm",
        
        // Video Section
        video_title: "VDCIM trong hành động",
        video_subtitle: "Khám phá các tính năng và công nghệ của VDCIM",
        
        // Overview
        overview_title: "VDCIM - Giải pháp \"Make in Vietnam\"",
        overview_subtitle: "Nền tảng quản trị hạ tầng trung tâm dữ liệu toàn diện",
        overview_allinone_title: "NỀN TẢNG \"ALL-IN-ONE\"",
        overview_allinone_desc: "Phát triển bởi Viettel, quản lý toàn diện hạ tầng trung tâm dữ liệu (DC) trên một nền tảng duy nhất. Hợp nhất giám sát, vận hành, bảo mật, phân tích dữ liệu và tối ưu năng lượng xanh trong cùng hệ thống.",
        overview_tech_title: "LÀM CHỦ CÔNG NGHỆ",
        overview_tech_desc: "Sản phẩm công nghệ cao \"Make in Vietnam\" - Sẵn sàng cạnh tranh trên thị trường quốc tế.",
        award_1: "Giải thưởng chuyển đổi số quốc gia 2025",
        award_2: "Top 10 sản phẩm công nghệ số chiến lược xuất sắc - Giải thưởng Make in VietNam của bộ khoa học công nghệ - chính phủ Việt Nam",
        
        // Features
        features_title: "Tính năng hệ thống",
        features_subtitle: "Giải pháp toàn diện cho quản trị Data Center",
        feature_1_title: "Quản lý toàn trình",
        feature_1_desc: "Quản lý toàn trình việc thiết kế - triển khai - vận hành DC theo chuẩn Uptime",
        feature_1_detail: "Mọi không gian, thiết bị, kết nối được quản trị chi tiết và rõ ràng phục vụ vận hành hiệu quả",
        feature_2_title: "Giám sát thời gian thực",
        feature_2_desc: "Giám sát tham số tập trung theo thời gian thực với cảnh báo tức thời",
        feature_2_detail: "Dynamic Visualization Builder - Trình thiết kế màn hình giám sát tùy biến theo thời gian thực. Người dùng tự xây dựng giao diện giám sát mà không cần lập trình. Mang lại trải nghiệm trực quan, linh hoạt và phù hợp với nhiều kịch bản vận hành.",
        feature_3_title: "Quản lý tài nguyên",
        feature_3_desc: "Quản lý tài nguyên và không gian DC hiệu quả",
        feature_3_detail: "Dashboard tổng quan quản lý tài nguyên DC toàn diện. Theo dõi công suất, không gian, thiết bị và tối ưu hóa sử dụng tài nguyên theo thời gian thực.",
        feature_4_title: "Tối ưu thông minh",
        feature_4_desc: "Phân tích xu hướng, dữ liệu lớn và tối ưu năng lượng DC",
        feature_4_detail: "Dynamic Cooling Optimizer - Giải pháp tối ưu năng lượng, tự loại bỏ hotspot, dựa trên mô hình deep learning do Viettel tự nghiên cứu.",
        feature_5_title: "Bản sao số 3D",
        feature_5_desc: "Mô hình bản sao số trực quan hạ tầng DC tỷ lệ 1:1",
        feature_5_detail: "Xây dựng bản sao số của toàn bộ phòng máy theo tỷ lệ thực, giúp trực quan hóa cơ sở hạ tầng và hỗ trợ vận hành hiệu quả. Khả năng thể hiện giám sát tham số vận hành trên bản sao số theo thời gian thực.",
        feature_6_title: "Trợ lý ảo AI",
        feature_6_desc: "Trợ lý ảo AI hỗ trợ vận hành thông minh",
        feature_6_detail: "Trợ lý ảo AI thông minh hỗ trợ vận hành tự động. Phân tích dữ liệu, đưa ra khuyến nghị và giải đáp thắc mắc nhanh chóng, giúp tối ưu hóa quy trình vận hành Data Center.",
        demo_badge: "Xem demo",
        
        // Technology
        tech_title: "Công nghệ cốt lõi",
        tech_subtitle: "Kiến trúc công nghệ đột phá",
        tech_1_title: "Tính sẵn sàng cao",
        tech_1_item_1: "Kiến trúc cluster linh hoạt, mở rộng cho DC lớn",
        tech_1_item_2: "Triển khai trên cloud riêng với DC chính & dự phòng",
        tech_1_item_3: "Hỗ trợ đa giao thức (SNMP, Modbus, BACnet)",
        tech_1_item_4: "Sao lưu tự động và phục hồi nhanh",
        tech_2_title: "Bảo mật đa tầng",
        tech_2_item_1: "Phân vùng mạng độc lập (App, DMZ, LAB)",
        tech_2_item_2: "Bảo mật đa tầng với firewall công nghiệp, IDS/IPS, UTM",
        tech_2_item_3: "Giao tiếp mã hóa SSL/TLS, xác thực đa yếu tố",
        tech_2_item_4: "Tuân thủ tiêu chuẩn ISO/IEC 27001",
        tech_3_title: "AI & Digital Twin",
        tech_3_item_1: "Bản sao số 3D tỷ lệ 1:1 của toàn bộ phòng máy",
        tech_3_item_2: "AI dự đoán sự cố và tối ưu năng lượng",
        tech_3_item_3: "Machine Learning phân tích xu hướng",
        tech_3_item_4: "Tự động hóa vận hành thông minh",
        
        // Benefits
        benefits_title: "Ưu thế cạnh tranh",
        benefits_subtitle: "Giá trị vượt trội cho khách hàng",
        benefit_1_title: "Chi phí cạnh tranh",
        benefit_1_desc: "Giảm chi phí đầu tư so với vendor quốc tế",
        benefit_2_title: "Tiết kiệm thời gian",
        benefit_2_desc: "Giảm thời gian triển khai",
        benefit_3_title: "Green DC",
        benefit_3_desc: "Tối ưu năng lượng, giảm phát thải carbon",
        benefit_4_title: "Hỗ trợ 24/7",
        benefit_4_desc: "Đội ngũ kỹ thuật chuyên nghiệp, sẵn sàng hỗ trợ",
        benefit_5_title: "End-to-End Solution",
        benefit_5_desc: "Thiết kế, triển khai, bảo mật và vận hành toàn diện",
        benefit_6_title: "Independent & Flexible Platform",
        benefit_6_desc: "Nền tảng độc lập & linh hoạt — Toàn quyền kiểm soát thiết lập và vận hành, dễ dàng tùy biến mà không phụ thuộc vendor.",

        // Projects
        projects_title: "Các dự án đã triển khai",
        projects_subtitle: "11 Data Center đạt chuẩn quốc tế Tier III",
        project_hla_title: "Hoa Lac DC",
        project_hla_desc: "2400 rack",
        project_hl1_title: "Hoa Lac DC",
        project_hl1_desc: "Phòng điều hành",
        project_hl2_title: "Hoa Lac DC",
        project_hl2_desc: "Phòng điều hành",
        project_nth_title: "Nguyen Thanh Han DC",
        project_nth_desc: "265 rack",
        project_tp_title: "Tan Phu Trung DC",
        project_tp_desc: "10k rack",
        project_hkh2_title: "Hoa Khanh 2 DC",
        project_hkh2_desc: "1000 rack - Dự kiến vận hành 2027",
        project_hkh2_landscape_title: "Hoa Khanh 2 DC",
        project_hkh2_landscape_desc: "Cảnh quan tổng thể",
        
        // Contact
        contact_title: "Liên hệ với chúng tôi",
        contact_subtitle: "Để được tư vấn chi tiết về giải pháp VDCIM",
        contact_info_title: "Thông tin liên hệ",
        contact_phone: "Điện thoại",
        form_name: "Họ và tên *",
        form_email: "Email *",
        form_phone: "Số điện thoại *",
        form_company: "Công ty",
        form_message: "Nội dung *",
        form_submit: "Gửi thông tin",
        qr_scan: "Quét mã QR để liên hệ nhanh",
        
        // Footer
        footer_desc: "VDCIM - Nền tảng quản trị hạ tầng số quốc gia<br>Make in Vietnam - Led by Viettel",
        footer_product: "Sản phẩm",
        footer_company: "Công ty",
        footer_connect: "Kết nối",
        footer_copyright: "&copy; 2025 Viettel Network. All rights reserved."
    },
    en: {
        // Navigation
        nav_home: "Home",
        nav_features: "Features",
        nav_technology: "Technology",
        nav_benefits: "Benefits",
        nav_projects: "Projects",
        nav_contact: "Contact",
        
        // Hero
        hero_title: "VDCIM",
        hero_subtitle: "All-in-One Solution - Made in Vietnam - Led by Viettel",
        stat_datacenters: "Data Centers",
        stat_racks: "Racks",
        stat_devices: "Infrastructure Devices",
        stat_servers: "Servers",
        btn_contact: "Contact Now",
        btn_learn: "Learn More",
        
        // Video Section
        video_title: "VDCIM in Action",
        video_subtitle: "Explore VDCIM features and technology",
        
        // Overview
        overview_title: "VDCIM - Made in Vietnam Solution",
        overview_subtitle: "Comprehensive Data Center Infrastructure Management Platform",
        overview_allinone_title: "ALL-IN-ONE PLATFORM",
        overview_allinone_desc: "Developed by Viettel, comprehensively managing data center (DC) infrastructure on a single platform. Integrating monitoring, operations, security, data analytics, and green energy optimization in the same system.",
        overview_tech_title: "TECHNOLOGY MASTERY",
        overview_tech_desc: "High-tech product \"Made in Vietnam\" - Ready to compete in the international market.",
        award_1: "National Digital Transformation Award 2025",
        award_2: "Top 10 Outstanding Strategic Digital Technology Products - Make in Vietnam Award by Ministry of Science and Technology - Government of Vietnam",
        
        // Features
        features_title: "System Features",
        features_subtitle: "Comprehensive Solution for Data Center Management",
        feature_1_title: "End-to-End Management",
        feature_1_desc: "Complete management of DC design - deployment - operation according to Uptime standards",
        feature_1_detail: "Every space, device, and connection is managed in detail and clearly for efficient operations",
        feature_2_title: "Real-time Monitoring",
        feature_2_desc: "Centralized real-time parameter monitoring with instant alerts",
        feature_2_detail: "Dynamic Visualization Builder - Real-time customizable monitoring screen designer. Users build monitoring interfaces without programming. Delivers intuitive, flexible experience suitable for various operational scenarios.",
        feature_3_title: "Resource Management",
        feature_3_desc: "Efficient management of DC resources and space",
        feature_3_detail: "Comprehensive DC resource management dashboard. Monitor capacity, space, equipment and optimize resource utilization in real-time.",
        feature_4_title: "Smart Optimization",
        feature_4_desc: "Trend analysis, big data, and DC energy optimization",
        feature_4_detail: "Dynamic Cooling Optimizer - Energy optimization solution, automatic hotspot removal, based on deep learning model researched by Viettel.",
        feature_5_title: "3D Digital Twin",
        feature_5_desc: "Visual 3D digital twin model of DC infrastructure at 1:1 scale",
        feature_5_detail: "Build digital twin of entire facility to real scale, enabling infrastructure visualization and efficient operations support. Real-time operational parameter monitoring on digital twin.",
        feature_6_title: "AI Virtual Assistant",
        feature_6_desc: "AI virtual assistant for smart operations support",
        feature_6_detail: "Intelligent AI virtual assistant for automated operations support. Analyzes data, provides recommendations and answers questions quickly, helping optimize Data Center operations processes.",
        demo_badge: "View demo",
        
        // Technology
        tech_title: "Core Technology",
        tech_subtitle: "Breakthrough Technology Architecture",
        tech_1_title: "High Availability",
        tech_1_item_1: "Flexible cluster architecture, scalable for large DCs",
        tech_1_item_2: "Deployment on private cloud with main & backup DC",
        tech_1_item_3: "Multi-protocol support (SNMP, Modbus, BACnet)",
        tech_1_item_4: "Automatic backup and quick recovery",
        tech_2_title: "Multi-layer Security",
        tech_2_item_1: "Independent network zones (App, DMZ, LAB)",
        tech_2_item_2: "Multi-layer security with industrial firewall, IDS/IPS, UTM",
        tech_2_item_3: "SSL/TLS encrypted communication, multi-factor authentication",
        tech_2_item_4: "Compliant with ISO/IEC 27001 standards",
        tech_3_title: "AI & Digital Twin",
        tech_3_item_1: "3D digital twin at 1:1 scale of entire machine room",
        tech_3_item_2: "AI-powered incident prediction and energy optimization",
        tech_3_item_3: "Machine Learning for trend analysis",
        tech_3_item_4: "Intelligent operations automation",
        
        // Benefits
        benefits_title: "Competitive Advantages",
        benefits_subtitle: "Superior Value for Customers",
        benefit_1_title: "Competitive Cost",
        benefit_1_desc: "Reduce investment costs compared to international vendors",
        benefit_2_title: "Time Saving",
        benefit_2_desc: "Reduce deployment time",
        benefit_3_title: "Green DC",
        benefit_3_desc: "Energy optimization, carbon emission reduction",
        benefit_4_title: "24/7 Support",
        benefit_4_desc: "Professional technical team, ready to support",
        benefit_5_title: "End-to-End Solution",
        benefit_5_desc: "Comprehensive design, deployment, security and operations",
        benefit_6_title: "Independent & Flexible Platform",
        benefit_6_desc: "Independent & Flexible Platform — full control of setup and operations, easy customization without vendor dependency.",

        // Projects
        projects_title: "Deployed Projects",
        projects_subtitle: "11 Data Centers with International Tier III Standards",
        project_hla_title: "Hoa Lac DC",
        project_hla_desc: "2400 racks",
        project_hl1_title: "Hoa Lac DC",
        project_hl1_desc: "Control Room",
        project_hl2_title: "Hoa Lac DC",
        project_hl2_desc: "Control Room",
        project_nth_title: "Nguyen Thanh Han DC",
        project_nth_desc: "265 racks",
        project_tp_title: "Tan Phu Trung DC",
        project_tp_desc: "10k racks",
        project_hkh2_title: "Hoa Khanh 2 DC",
        project_hkh2_desc: "1000 racks - Expected operation 2027",
        project_hkh2_landscape_title: "Hoa Khanh 2 DC",
        project_hkh2_landscape_desc: "Overall landscape",
        
        // Contact
        contact_title: "Contact Us",
        contact_subtitle: "For detailed consultation on VDCIM solution",
        contact_info_title: "Contact Information",
        contact_phone: "Phone",
        form_name: "Full Name *",
        form_email: "Email *",
        form_phone: "Phone Number *",
        form_company: "Company",
        form_message: "Message *",
        form_submit: "Submit",
        qr_scan: "Scan QR code for quick contact",
        
        // Footer
        footer_desc: "VDCIM - National Digital Infrastructure Management Platform<br>Made in Vietnam - Led by Viettel",
        footer_product: "Product",
        footer_company: "Company",
        footer_connect: "Connect",
        footer_copyright: "&copy; 2025 Viettel Network. All rights reserved."
    },
    es: {
        // Navigation
        nav_home: "Inicio",
        nav_features: "Características",
        nav_technology: "Tecnología",
        nav_benefits: "Beneficios",
        nav_projects: "Proyectos",
        nav_contact: "Contacto",
        
        // Hero
        hero_title: "VDCIM",
        hero_subtitle: "Solución Todo en Uno - Hecho en Vietnam - Liderado por Viettel",
        stat_datacenters: "Centros de Datos",
        stat_racks: "Racks",
        stat_devices: "Dispositivos de Infraestructura",
        stat_servers: "Servidores",
        btn_contact: "Contactar Ahora",
        btn_learn: "Más Información",
        
        // Video Section
        video_title: "VDCIM en Acción",
        video_subtitle: "Explore las características y tecnología de VDCIM",
        
        // Overview
        overview_title: "VDCIM - Solución Hecha en Vietnam",
        overview_subtitle: "Plataforma Integral de Gestión de Infraestructura de Centros de Datos",
        overview_allinone_title: "PLATAFORMA TODO EN UNO",
        overview_allinone_desc: "Desarrollado por Viettel, gestiona de manera integral la infraestructura del centro de datos (DC) en una plataforma única. Integra monitoreo, operaciones, seguridad, análisis de datos y optimización de energía verde en el mismo sistema.",
        overview_tech_title: "DOMINIO TECNOLÓGICO",
        overview_tech_desc: "Producto de alta tecnología \"Hecho en Vietnam\" - Listo para competir en el mercado internacional.",
        award_1: "Premio Nacional de Transformación Digital 2025",
        award_2: "Top 10 Productos de Tecnología Digital Estratégica Sobresalientes - Premio Hecho en Vietnam del Ministerio de Ciencia y Tecnología - Gobierno de Vietnam",
        
        // Features
        features_title: "Características del Sistema",
        features_subtitle: "Solución Integral para la Gestión de Centros de Datos",
        feature_1_title: "Gestión de Extremo a Extremo",
        feature_1_desc: "Gestión completa del diseño - implementación - operación del DC según estándares Uptime",
        feature_1_detail: "Cada espacio, dispositivo y conexión se gestiona detalladamente para operaciones eficientes",
        feature_2_title: "Monitoreo en Tiempo Real",
        feature_2_desc: "Monitoreo centralizado de parámetros en tiempo real con alertas instantáneas",
        feature_2_detail: "Dynamic Visualization Builder - Diseñador de pantallas de monitoreo personalizables en tiempo real. Los usuarios construyen interfaces sin programación. Ofrece experiencia intuitiva y flexible para diversos escenarios operativos.",
        feature_3_title: "Gestión de Recursos",
        feature_3_desc: "Gestión eficiente de recursos y espacio del DC",
        feature_3_detail: "Panel de gestión integral de recursos del DC. Monitorea capacidad, espacio, equipos y optimiza utilización de recursos en tiempo real.",
        feature_4_title: "Optimización Inteligente",
        feature_4_desc: "Análisis de tendencias, big data y optimización de energía del DC",
        feature_4_detail: "Dynamic Cooling Optimizer - Solución de optimización energética, eliminación automática de puntos calientes, basada en modelo de deep learning investigado por Viettel.",
        feature_5_title: "Gemelo Digital 3D",
        feature_5_desc: "Modelo visual de gemelo digital 3D de infraestructura DC a escala 1:1",
        feature_5_detail: "Construye gemelo digital de toda la instalación a escala real, permitiendo visualización de infraestructura y soporte operativo eficiente. Monitoreo de parámetros operativos en tiempo real sobre el gemelo digital.",
        feature_6_title: "Asistente Virtual AI",
        feature_6_desc: "Asistente virtual AI para soporte de operaciones inteligentes",
        feature_6_detail: "Asistente virtual AI inteligente para soporte de operaciones automatizadas. Analiza datos, proporciona recomendaciones y responde preguntas rápidamente, ayudando a optimizar procesos operativos del Data Center.",
        demo_badge: "Ver demo",
        
        // Technology
        tech_title: "Tecnología Central",
        tech_subtitle: "Arquitectura Tecnológica Revolucionaria",
        tech_1_title: "Alta Disponibilidad",
        tech_1_item_1: "Arquitectura de clúster flexible, escalable para DCs grandes",
        tech_1_item_2: "Implementación en nube privada con DC principal y de respaldo",
        tech_1_item_3: "Soporte multiprotocolo (SNMP, Modbus, BACnet)",
        tech_1_item_4: "Respaldo automático y recuperación rápida",
        tech_2_title: "Seguridad Multicapa",
        tech_2_item_1: "Zonas de red independientes (App, DMZ, LAB)",
        tech_2_item_2: "Seguridad multicapa con firewall industrial, IDS/IPS, UTM",
        tech_2_item_3: "Comunicación cifrada SSL/TLS, autenticación multifactor",
        tech_2_item_4: "Cumplimiento con estándares ISO/IEC 27001",
        tech_3_title: "AI y Gemelo Digital",
        tech_3_item_1: "Gemelo digital 3D a escala 1:1 de toda la sala de máquinas",
        tech_3_item_2: "Predicción de incidentes y optimización de energía con IA",
        tech_3_item_3: "Machine Learning para análisis de tendencias",
        tech_3_item_4: "Automatización inteligente de operaciones",
        
        // Benefits
        benefits_title: "Ventajas Competitivas",
        benefits_subtitle: "Valor Superior para los Clientes",
        benefit_1_title: "Costo Competitivo",
        benefit_1_desc: "Reducir costos de inversión en comparación con proveedores internacionales",
        benefit_2_title: "Ahorro de Tiempo",
        benefit_2_desc: "Reducir tiempo de implementación",
        benefit_3_title: "DC Verde",
        benefit_3_desc: "Optimización de energía, reducción de emisiones de carbono",
        benefit_4_title: "Soporte 24/7",
        benefit_4_desc: "Equipo técnico profesional, listo para apoyar",
        benefit_5_title: "Solución de Extremo a Extremo",
        benefit_5_desc: "Diseño, implementación, seguridad y operaciones integrales",
        benefit_6_title: "Plataforma Independiente & Flexible",
        benefit_6_desc: "Plataforma Independiente & Flexible — control total de configuración y operaciones, fácil personalización sin dependencia de proveedores.",

        // Projects
        projects_title: "Proyectos Implementados",
        projects_subtitle: "11 Centros de Datos con Estándares Internacionales Tier III",
        project_hla_title: "Hoa Lac DC",
        project_hla_desc: "2400 racks",
        project_hl1_title: "Hoa Lac DC",
        project_hl1_desc: "Sala de Control",
        project_hl2_title: "Hoa Lac DC",
        project_hl2_desc: "Sala de Control",
        project_nth_title: "Nguyen Thanh Han DC",
        project_nth_desc: "265 racks",
        project_tp_title: "Tan Phu Trung DC",
        project_tp_desc: "10k racks",
        project_hkh2_title: "Hoa Khanh 2 DC",
        project_hkh2_desc: "1000 racks - Operación prevista 2027",
        project_hkh2_landscape_title: "Hoa Khanh 2 DC",
        project_hkh2_landscape_desc: "Vista panorámica",
        
        // Contact
        contact_title: "Contáctenos",
        contact_subtitle: "Para consultas detalladas sobre la solución VDCIM",
        contact_info_title: "Información de Contacto",
        contact_phone: "Teléfono",
        form_name: "Nombre Completo *",
        form_email: "Correo Electrónico *",
        form_phone: "Número de Teléfono *",
        form_company: "Empresa",
        form_message: "Mensaje *",
        form_submit: "Enviar",
        qr_scan: "Escanea el código QR para contacto rápido",
        
        // Footer
        footer_desc: "VDCIM - Plataforma Nacional de Gestión de Infraestructura Digital<br>Hecho en Vietnam - Liderado por Viettel",
        footer_product: "Producto",
        footer_company: "Empresa",
        footer_connect: "Conectar",
        footer_copyright: "&copy; 2025 Viettel Network. Todos los derechos reservados."
    }
};

// Current language
let currentLang = 'vi';

// Language switching
function changeLanguage(lang) {
    currentLang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Save to localStorage
    localStorage.setItem('vdcim-language', lang);
}

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link (but not language selector)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside (but not on language selector)
document.addEventListener('click', (e) => {
    if (navMenu && hamburger) {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        navbar.style.padding = '10px 0';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        navbar.style.padding = '15px 0';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Observe feature cards
document.querySelectorAll('.feature-card, .benefit-card, .tech-item').forEach(card => {
    observer.observe(card);
});

// Form submission handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            company: document.getElementById('company').value,
            message: document.getElementById('message').value
        };
        
        // TODO: Replace with your actual Google Form URL
        // You need to create a Google Form and get its action URL
        const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSdngCYGIa-ov6NrCSvvfcJKVgLDxxv7DyjtyNfSv2dfLtJTvg/formResponse';
        
        // Create form data for Google Forms
        // You'll need to inspect your Google Form to get the correct field IDs
        const googleFormData = new FormData();
        googleFormData.append('entry.1045056187', formData.name);
        googleFormData.append('entry.382837989', formData.email);
        googleFormData.append('entry.334798065', formData.phone);
        googleFormData.append('entry.1690711677', formData.company);
        googleFormData.append('entry.1445564356', formData.message);
        
        try {
            // Submit to Google Forms
            await fetch(googleFormURL, {
                method: 'POST',
                body: googleFormData,
                mode: 'no-cors'
            });
            
            // Show success message
            alert(currentLang === 'vi' ? 
                'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.' :
                currentLang === 'en' ?
                'Thank you for contacting us! We will respond as soon as possible.' :
                '¡Gracias por contactarnos! Responderemos lo antes posible.'
            );
            
            // Reset form
            contactForm.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            alert(currentLang === 'vi' ? 
                'Đã có lỗi xảy ra. Vui lòng thử lại sau.' :
                currentLang === 'en' ?
                'An error occurred. Please try again later.' :
                'Ocurrió un error. Por favor, inténtelo de nuevo más tarde.'
            );
        }
    });
}

// Language selector dropdown
const langSelector = document.querySelector('.language-selector');
const langDropdownBtn = document.querySelector('.lang-dropdown-btn');
const langOptions = document.querySelectorAll('.lang-option');
const currentFlag = document.querySelector('.current-flag');

if (langDropdownBtn) {
    langDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langSelector.classList.toggle('active');
    });
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!langSelector.contains(e.target)) {
        langSelector.classList.remove('active');
    }
});

// Language selector event listeners
langOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        e.stopPropagation();
        const lang = option.getAttribute('data-lang');
        const flagSrc = option.querySelector('img').src;
        
        // Update current flag
        currentFlag.src = flagSrc;
        
        // Update active state
        langOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        
        // Change language
        changeLanguage(lang);
        
        // Close dropdown
        langSelector.classList.remove('active');
    });
});

// Counter animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Trigger counter animation when stats are visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statItems = entry.target.querySelectorAll('.stat-item');
            statItems.forEach(item => {
                const statNumber = item.querySelector('.stat-number');
                const statValue = item.querySelector('.stat-value');
                
                if (statValue) {
                    // For numbers with K (10K, 7K, 60K)
                    const value = parseInt(statValue.textContent);
                    statValue.textContent = '0';
                    animateCounter(statValue, value);
                } else {
                    // For simple number (11)
                    const value = parseInt(statNumber.textContent);
                    if (value && !isNaN(value)) {
                        statNumber.textContent = '0';
                        animateCounter(statNumber, value);
                    }
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// Initialize language from localStorage or default to Vietnamese
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('vdcim-language') || 'vi';
    
    // Update flag and active state based on saved language
    const savedOption = document.querySelector(`.lang-option[data-lang="${savedLang}"]`);
    if (savedOption && currentFlag) {
        const flagSrc = savedOption.querySelector('img').src;
        currentFlag.src = flagSrc;
        
        langOptions.forEach(opt => opt.classList.remove('active'));
        savedOption.classList.add('active');
    }
    
    changeLanguage(savedLang);
});

// Video Modal Functionality
function initVideoModal() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const closeBtn = document.querySelector('.modal-close');
    const overlay = document.querySelector('.modal-overlay');
    
    if (!modal || !modalVideo) return;
    
    // Click handler for feature cards with video
    document.querySelectorAll('.feature-card[data-video]').forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't prevent default, just handle the click
            
            const videoSrc = card.getAttribute('data-video');
            if (!videoSrc) return;
            
            console.log('Opening video:', videoSrc);
            
            modalVideo.querySelector('source').src = videoSrc;
            modalVideo.load();
            modal.classList.add('active');
            
            // Auto play after loading
            modalVideo.addEventListener('loadeddata', function playVideo() {
                modalVideo.play().catch(err => {
                    console.error('Error playing video:', err);
                });
            }, { once: true });
            
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        });
        
        // Also handle clicks on badge
        const badge = card.querySelector('.demo-badge');
        if (badge) {
            badge.addEventListener('click', function(e) {
                e.stopPropagation();
                card.click();
            });
        }
    });
    
    // Close modal function
    function closeModal() {
        modal.classList.remove('active');
        modalVideo.pause();
        modalVideo.querySelector('source').src = '';
        modalVideo.load();
        document.body.style.overflow = '';
    }
    
    // Close button click
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Overlay click
    if (overlay) {
        overlay.addEventListener('click', closeModal);
    }
    
    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Initialize video modal when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVideoModal);
} else {
    // DOM already loaded
    initVideoModal();
}

// Projects Slider Functionality
function initProjectsSlider() {
    const slider = document.querySelector('.projects-slider');
    const slides = document.querySelectorAll('.project-slide');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const dotsContainer = document.querySelector('.slider-dots');
    
    if (!slider || slides.length === 0) return;
    
    let currentIndex = 0;
    const slidesPerView = window.innerWidth > 768 ? (window.innerWidth > 1024 ? 3 : 2) : 1;
    const totalSlides = slides.length;
    const maxIndex = Math.max(0, totalSlides - slidesPerView);
    
    // Create dots
    for (let i = 0; i <= maxIndex; i++) {
        const dot = document.createElement('button');
        dot.classList.add('slider-dot');
        if (i === 0) dot.classList.add('active');
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    
    const dots = document.querySelectorAll('.slider-dot');
    
    function updateSlider() {
        const slideWidth = slides[0].offsetWidth;
        const gap = 30;
        const scrollPosition = currentIndex * (slideWidth + gap);
        
        slider.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
        
        // Update button states
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
        nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
        nextBtn.style.pointerEvents = currentIndex >= maxIndex ? 'none' : 'auto';
    }
    
    function goToSlide(index) {
        currentIndex = Math.max(0, Math.min(index, maxIndex));
        updateSlider();
    }
    
    function nextSlide() {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }
    }
    
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    }
    
    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Touch/Swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            nextSlide();
        }
        if (touchEndX > touchStartX + 50) {
            prevSlide();
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
    
    // Initialize
    updateSlider();
    
    // Update on resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            location.reload(); // Reload to recalculate slides per view
        }, 500);
    });
}

// Initialize projects slider when DOM is ready
document.addEventListener('DOMContentLoaded', initProjectsSlider);

// Video loading optimization
const demoVideo = document.querySelector('.demo-video');
if (demoVideo) {
    // Preload metadata for faster loading
    demoVideo.preload = 'metadata';
}

