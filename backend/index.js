const express = require('express');
const cors = require('cors');

const REVIEWS = [
  {
    user: {
      name: 'Nathália Pissuti',
      picture: 'https://github.com/nathipg.png',
    },
    text: 'Minha experiência com a Meteoro foi incrível, graças a solução deles pude mudar minha vida pra melhor de maneiras indescritíveis. Soluções maravilhosas, não encomendaria uma solução de outra empresa de forma alguma. Para descrever a empresa da forma mais precisa possível, devo citar uma grande pensadora contemporânea: Melhor do mundooooooo.',
  },
  {
    user: {
      name: 'Cauê S.J.',
      picture: 'https://github.com/caueSJ.png',
    },
    text: 'Estava querendo uma solução, mas não tinha referências de boas empresas que fazem soluções, foi então que a minha busca começou. Pesquisei por 3 anos para ter certeza que escolheria a empresa certa, ainda assim estava em dúvida entre algumas empresas de soluções, entre elas a Meteoro. Entrei em contato com as empresas, mas algumas nem me responderam, outras disseram que minha solução era impossível, mas a Meteoro não, a Meteoro disse que iria fazer sem problemas. Fiquei receoso depois de tantas recusas de outras empresas, mas confiei na Meteoro e foi a melhor coisa que já fiz na minha vida. Até hoje a solução me ajuda no dia-a-dia, evoluindo conforme necessário e sempre entregando resultados. Amo a Meteoro!',
  },
  {
    user: {
      name: 'Laionel L.',
      picture: 'https://github.com/DarkLaion.png',
    },
    text: 'Analisei o benchmark de diversas soluções, e vi que a solução da Meteoro performava melhor. Aguardei por pouco mais de um ano por uma promoção e quando rolou um desconto de 50% comprei minha solução. Como peguei por SEDEX chegou bem rápido e veio em bom estado. Estou usando há alguns meses e funciona perfeitamente. Os detalhes vermelhos são bem estilosos e combinam com minha decoração. Excelente.',
  },
  {
    user: {
      name: 'Matheus M.',
      picture: 'https://github.com/teusito.png',
    },
    text: 'A solução chegou no prazo, ainda não testei, mas parece que vai funcionar.',
  },
];

const app = express();

app.use(cors());
app.use(express.json());

app.get('/review', async (req, res) => {
  res.send(REVIEWS);
});

app.post('/client', (req, res) => {
  res.statusCode = 201;
  res.send({
    message: 'Client added',
  });
});

app.listen(3001, () => {
  console.log('app is running');
});
