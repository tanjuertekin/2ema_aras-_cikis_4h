const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Ana sayfa isteğinde doğrudan HTML dosyasını sunar
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '2ema arası cıkıs.html'));
});

// Arka planda 7/24 tetiklenebilecek örnek bir durum kontrol endpoint'i
app.get('/api/status', (req, res) => {
    res.json({ status: "running", time: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda başarıyla çalışıyor.`);
});