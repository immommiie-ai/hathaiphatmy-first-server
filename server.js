// 1. เรียกใช้งาน Module ที่ชื่อว่า 'http' ซึ่งเป็นระบบพื้นฐานของ Node.js สําหรับทําเซิร์ฟเวอร์
const http = require('http');

// 2. กําหนดช่องทาง (Port) ที่เซิร์ฟเวอร์จะใช้สื่อสาร โดยใหใชของที่ Cloud กําหนดมา(process.env.PORT) ถ้าไม่มีให้ใช้ 3000
const port = process.env.PORT || 3000;

// 3. สร้างเครื่องแม่ข่าย (Server) ที่คอยรับคําขอ (req) และตอบกลับ (res)
const server = http.createServer((req, res) => {

  // 3.1 ตั้งรหัสสถานะ 200 หมายถึง "ทํางานสําเร็จ (OK)"
  res.statusCode = 200;

  // 3.2 บอกเบราว์เซอร์ของผู้ใช้ว่า สิ่งที่ส่งกลับไปคือไฟล์ข้อความแบบ HTML และรองรับภาษาไทย (utf-8)
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // 3.3 ส่งข้อมูลหน้าเว็บกลับไปหาผู้ใช้ (ตกแต่งสไตล์ พาสเทลสีชมพู พร้อมการ์ตูนน่ารักๆ)
  res.end(`
    <!DOCTYPE html>
    <html lang="th">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Web Server - Hathaiphat</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500&display=swap');
            
            body {
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                background: linear-gradient(135deg, #ffe5ec 0%, #ffc2d1 100%);
                font-family: 'Kanit', sans-serif;
                color: #4a4a4a;
            }
            .card {
                background: rgba(255, 255, 255, 0.85);
                backdrop-filter: blur(10px);
                padding: 40px 30px;
                border-radius: 24px;
                box-shadow: 0 10px 30px rgba(255, 182, 193, 0.4);
                text-align: center;
                max-width: 450px;
                width: 90%;
                border: 2px solid #fff;
            }
            .avatar {
                width: 120px;
                height: 120px;
                background-color: #ffe5ec;
                border-radius: 50%;
                margin: 0 auto 20px auto;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 65px;
                box-shadow: 0 8px 16px rgba(255, 154, 162, 0.3);
                animation: float 3s ease-in-out infinite;
            }
            h1 {
                font-size: 1.6rem;
                color: #ff758f;
                margin-bottom: 10px;
                font-weight: 500;
            }
            .student-id {
                font-size: 1.1rem;
                color: #a37081;
                background: #fff0f3;
                padding: 6px 16px;
                border-radius: 50px;
                display: inline-block;
                margin-bottom: 20px;
                font-weight: bold;
                letter-spacing: 1px;
            }
            p {
                font-size: 1rem;
                line-height: 1.6;
                color: #6c757d;
                margin-bottom: 0;
            }
            .status-badge {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                font-size: 0.9rem;
                color: #2a9d8f;
                background-color: #e8f5e9;
                padding: 6px 12px;
                border-radius: 12px;
                margin-top: 15px;
            }
            .dot {
                width: 8px;
                height: 8px;
                background-color: #2a9d8f;
                border-radius: 50%;
                display: inline-block;
                animation: blink 1.5s infinite;
            }
            @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
                100% { transform: translateY(0px); }
            }
            @keyframes blink {
                0% { opacity: 0.4; }
                50% { opacity: 1; }
                100% { opacity: 0.4; }
            }
        </style>
    </head>
    <body>
        <div class="card">
            <div class="avatar">🌸</div>
            <h1>สวัสดีค่ะ! นี่คือ Web Server ของ</h1>
            <div class="student-id">นางสาว หทัยภัทร อินสำราญ<br>69319010571</div>
            <p>เครื่องแม่ข่ายทํางานปกติบนระบบ Railway แล้วค่ะ!</p>
            <div class="status-badge">
                <span class="dot"></span> Server Online
            </div>
        </div>
    </body>
    </html>
  `);
});

// 4. สั่งให้เซิร์ฟเวอร์เริ่มต้นเปิดรับฟังการเชื่อมต่อตาม Port ที่กําหนดไว้
server.listen(port, () => {
  console.log(`Server is running! เครื่องแม่ข่ายเปิดทำงานแล้วที่ช่องทาง: ${port}`);
});
