require('dotenv').config();
const app = require('./src/app');

const PORT = Number(process.env.PORT) || 5001;

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

startServer(typeof PORT !== 'undefined' ? PORT : 5001);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        const nextPort = PORT + 1;
        console.warn(`⚠️ Port ${PORT} is in use, retrying on port ${nextPort}...`);
        server.listen(nextPort);
    } else {
        console.error('Server error:', err);
    }
});
