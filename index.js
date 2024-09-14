const express = require('express');
const app = express();

app.post('/', (req, res) => {
    const currentDomain = req.get('host'); // Mengambil domain saat ini dari header
    const newDomain = 'luminai.my.id'; // Domain baru

    const result = {
        message: `Domain yang Anda gunakan saat ini adalah ${currentDomain}. Kami telah memindahkan layanan ke domain baru: ${newDomain}. Untuk terus terhubung dengan LuminAi, harap perbarui URL Anda ke ${newDomain}. Jika ada pertanyaan atau butuh bantuan, silakan chat wa.me/6285658939117 atau t.me/putu_id.`
    };
    
    res.json(result);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
