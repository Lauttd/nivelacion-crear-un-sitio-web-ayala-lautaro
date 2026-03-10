import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// Configuración necesaria para ES Modules
const pene= fileURLToPath(import.meta.url);
const dick = path.dirname(pene);

// Servir archivos estáticos (HTML, CSS, JS) desde la carpeta 'public'
app.use(express.static(path.join(dick, 'public')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(dick, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log('---------------   ----------------------------');
    console.log(`🚀 Servidor EXPRESS activo en: http://localhost:${PORT}`);
    console.log(`👀 Modo WATCH activado: el servidor se reiniciará al guardar cambios.`);
    console.log('-------------------------------------------');
});