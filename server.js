// 1. เรียกใช้งาน Module ที่ชื่อว่า 'http' ซึ่งเป็นระบบพื้นฐานของ Node.js สำหรับทำเซิร์ฟเวอร์
const http = require('http');

// 2. กำหนดช่องทาง (Port) ที่เซิร์ฟเวอร์จะใช้สื่อสาร
const port = process.env.PORT || 3000;

// 3. สร้างเครื่องแม่ข่าย (Server) ที่คอยรับคำขอ (req) และตอบกลับ (res)
const server = http.createServer((req, res) => {

  // 3.1 ตั้งรหัสสถานะ 200 หมายถึง "ทำงานสำเร็จ (OK)"
  res.statusCode = 200;

  // 3.2 บอกเบราว์เซอร์ของผู้ใช้ว่า สิ่งที่ส่งกลับไปคือไฟล์ข้อความแบบ HTML
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // 3.3 ส่งข้อมูลหน้าเว็บกลับไปหาผู้ใช้ (ตกแต่งสไตล์พาสเทลน่ารัก)
  res.end(`
    <!DOCTYPE html>
    <html lang="th">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>✨ Web Server - Hathaiphat ✨</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600&display=swap');
            
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                background: linear-gradient(135deg, #ffd6e8 0%, #c2e9ff 50%, #ffe5f0 100%);
                font-family: 'Kanit', sans-serif;
                color: #4a4a4a;
                animation: gradientShift 8s ease infinite;
                background-size: 200% 200%;
            }

            @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }

            .container {
                position: relative;
            }

            /* ดวงดาวแสบๆ */
            .star {
                position: fixed;
                width: 2px;
                height: 2px;
                background: white;
                border-radius: 50%;
                opacity: 0.6;
                animation: twinkle 3s infinite;
            }

            @keyframes twinkle {
                0%, 100% { opacity: 0.2; }
                50% { opacity: 1; }
            }

            .card {
                background: rgba(255, 255, 255, 0.92);
                backdrop-filter: blur(20px);
                padding: 50px 40px;
                border-radius: 32px;
                box-shadow: 0 20px 60px rgba(255, 192, 203, 0.3),
                            0 0 40px rgba(173, 216, 230, 0.2);
                text-align: center;
                max-width: 500px;
                width: 90%;
                border: 3px solid rgba(255, 255, 255, 0.8);
                position: relative;
                overflow: hidden;
                animation: slideUp 0.6s ease-out;
            }

            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .card::before {
                content: '';
                position: absolute;
                top: -50%;
                right: -50%;
                width: 100%;
                height: 100%;
                background: radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%);
                animation: shine 4s ease-in-out infinite;
            }

            @keyframes shine {
                0%, 100% { transform: translate(0, 0); }
                50% { transform: translate(20px, -20px); }
            }

            .content {
                position: relative;
                z-index: 1;
            }

            /* ตกแต่ง Kitty */
            .kitty-container {
                width: 140px;
                height: 140px;
                margin: 0 auto 25px;
                display: flex;
                justify-content: center;
                align-items: center;
                animation: floatKitty 3s ease-in-out infinite;
                filter: drop-shadow(0 10px 20px rgba(255, 117, 143, 0.25));
            }

            .kitty-icon {
                font-size: 100px;
                animation: rotateCute 4s ease-in-out infinite;
            }

            @keyframes floatKitty {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
            }

            @keyframes rotateCute {
                0%, 100% { transform: rotate(0deg) scale(1); }
                50% { transform: rotate(5deg) scale(1.05); }
            }

            .hearts {
                font-size: 24px;
                animation: floatHearts 3s ease-in-out infinite;
                margin: 0 5px;
            }

            @keyframes floatHearts {
                0%, 100% { opacity: 0; transform: translateY(0) scale(0.5); }
                50% { opacity: 1; transform: translateY(-20px) scale(1); }
            }

            .heart-left { animation-delay: 0s; margin-right: 30px; }
            .heart-right { animation-delay: 0.5s; margin-left: 30px; }

            h1 {
                font-size: 1.8rem;
                color: #ff758f;
                margin-bottom: 8px;
                font-weight: 600;
                letter-spacing: 0.5px;
                animation: fadeInText 0.8s ease-out 0.3s both;
            }

            .subtitle {
                font-size: 1rem;
                color: #b8a5c8;
                margin-bottom: 20px;
                font-weight: 300;
                animation: fadeInText 0.8s ease-out 0.5s both;
            }

            @keyframes fadeInText {
                from {
                    opacity: 0;
                    transform: translateY(10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .student-id {
                font-size: 1.15rem;
                color: white;
                background: linear-gradient(135deg, #ff758f 0%, #ff9fb2 100%);
                padding: 12px 24px;
                border-radius: 50px;
                display: inline-block;
                margin-bottom: 25px;
                font-weight: 600;
                letter-spacing: 0.5px;
                box-shadow: 0 8px 20px rgba(255, 117, 143, 0.3);
                animation: fadeInText 0.8s ease-out 0.6s both;
                line-height: 1.6;
            }

            .info-box {
                background: linear-gradient(135deg, rgba(255, 215, 230, 0.6) 0%, rgba(230, 245, 255, 0.6) 100%);
                padding: 18px;
                border-radius: 16px;
                margin-bottom: 20px;
                border-left: 4px solid #ff758f;
                animation: fadeInText 0.8s ease-out 0.7s both;
            }

            .info-box p {
                font-size: 1.05rem;
                line-height: 1.7;
                color: #5a5a7a;
                margin: 0;
                font-weight: 400;
            }

            .status-badge {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                font-size: 1rem;
                color: white;
                background: linear-gradient(135deg, #2a9d8f 0%, #1a7f7a 100%);
                padding: 10px 20px;
                border-radius: 50px;
                box-shadow: 0 6px 20px rgba(42, 157, 143, 0.3);
                animation: fadeInText 0.8s ease-out 0.8s both;
                font-weight: 600;
            }

            .pulse-dot {
                width: 10px;
                height: 10px;
                background-color: #4dd9cc;
                border-radius: 50%;
                display: inline-block;
                animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                box-shadow: 0 0 0 rgba(77, 217, 204, 0.7);
            }

            @keyframes pulse {
                0%, 100% {
                    opacity: 1;
                    box-shadow: 0 0 0 0 rgba(77, 217, 204, 0.7);
                }
                50% {
                    opacity: 0.8;
                }
                70% {
                    box-shadow: 0 0 0 10px rgba(77, 217, 204, 0);
                }
            }

            /* Decorative elements */
            .decoration {
                position: absolute;
                font-size: 40px;
                opacity: 0.1;
                animation: float 6s ease-in-out infinite;
            }

            .deco-1 { top: -10px; right: 20px; animation-delay: 0s; }
            .deco-2 { bottom: 20px; left: -10px; animation-delay: 2s; }
            .deco-3 { top: 50%; right: -10px; animation-delay: 1s; }

            @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(10deg); }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="card">
                <div class="decoration deco-1">✨</div>
                <div class="decoration deco-2">🌸</div>
                <div class="decoration deco-3">💫</div>
                
                <div class="content">
                    <div class="kitty-container">
                        <span class="hearts heart-left">💗</span>
                        <span class="kitty-icon">🐈‍⬛</span>
                        <span class="hearts heart-right">💗</span>
                    </div>

                    <h1>✨ สวัสดีค่ะ! ✨</h1>
                    <div class="subtitle">นี่คือ Web Server ของ</div>

                    <div class="student-id">
                        นางสาว หทัยภัทร อินสำราญ<br>
                        📚 69319010571
                    </div>

                    <div class="info-box">
                        <p>🚀 เครื่องแม่ข่ายทำงานปกติบนระบบ Railway แล้วค่ะ!</p>
                    </div>

                    <div class="status-badge">
                        <span class="pulse-dot"></span>
                        Server Online
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
  `);
});

// 4. สั่งให้เซิร์ฟเวอร์เริ่มต้นเปิดรับฟังการเชื่อมต่อตาม Port ที่กำหนดไว้
server.listen(port, () => {
  console.log(`Server is running! 🚀 เครื่องแม่ข่ายเปิดทำงานแล้วที่ช่องทาง: ${port}`);
});
