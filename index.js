const express = require('express');
const app = express();

app.post('/', (req, res) => {
    const currentDomain = req.get('host');
    const newDomain = 'luminai.my.id';
    const result = {
        result: `👋 Hai! Sepertinya Anda masih menggunakan domain ${currentDomain}.\n\nKami baru saja memindahkan layanan kami ke domain baru: ${newDomain}. Untuk terus mendapatkan pembaruan dan terhubung dengan LuminAi, pastikan Anda memperbarui URL Anda ke ${newDomain}.\n\n📢 Jangan lewatkan informasi terbaru! Ikuti saluran WhatsApp kami di [sini](https://whatsapp.com/channel/0029VaeVmX74yltNR7UJLk2t).\n\nJika ada pertanyaan atau butuh bantuan, kami siap membantu di wa.me/6285658939117 atau t.me/putu_id.\n\nTerima kasih dan semoga hari Anda menyenangkan! 😊`
    };
    
    res.json(result);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
