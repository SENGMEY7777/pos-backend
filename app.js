const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = Number(process.env.PORT) || 5001;

app.disable('x-powered-by');
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.get('/', (req, res) => {
    res.json({
        name: 'POS',
        version: '1.0.0',
        status: 'online',
        health: '/health'
    });
});

app.get('/health', (req, res) => {
    res.status(200).json({ success: true, status: 'UP', timestamp: new Date().toISOString() });
});

app.use((err, req, res, next) => {
    console.error('Unhandled Error:', err.message);
    const status = err.statusCode || err.status || 500;
    res.status(status).json({
        success: false,
        message: err.message || 'Internal Server Error'
    });
});

const startServer = (port) => {
    const server = app.listen(port, () => {
        console.log(`🚀 Server running on http://localhost:${port}`);
    });

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            const nextPort = port + 1;
            console.warn(`⚠️ Port ${port} is in use, retrying on port ${nextPort}...`);
            startServer(nextPort);
        } else {
            console.error('Server error:', err);
        }
    });
};

if (require.main === module) {
    startServer(PORT);
}

module.exports = app;
