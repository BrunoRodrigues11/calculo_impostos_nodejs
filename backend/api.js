const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Define o diretório onde estão os arquivos estáticos do front-end
app.use(express.static('../frontend'));

// Definição das constantes de alíquota
const ALIQUOTA_ICMS = 0.18; // Exemplo de alíquota de ICMS

// Rota para o cálculo do ICMS
app.post('/api/calculo-icms', (req, res) => {
    const { valorProduto } = req.body;

    // Cálculo do ICMS
    const icms = valorProduto * ALIQUOTA_ICMS;

    res.json({ icms });
});

// Inicialização do servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});