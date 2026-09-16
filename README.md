# 🛒 Mini Projeto — Checkout React

Projeto desenvolvido como parte do **Mini-Projeto Avaliativo — Módulo 2**, utilizando React para criar uma aplicação de checkout de compras.

A aplicação simula o fluxo de uma compra, desde a visualização do carrinho até o preenchimento dos dados de pagamento e o resultado da tentativa de pagamento.

> **Observação:** este projeto é apenas uma simulação. Não existe pagamento real, integração com banco de dados ou processamento de cartão verdadeiro.

---

## 📌 Sobre o projeto

O objetivo do projeto é desenvolver uma aplicação **Single Page Application (SPA)** utilizando React, aplicando conceitos estudados durante o módulo.

O sistema possui um carrinho de compras fixo com produtos cadastrados diretamente no projeto e permite:

* Visualizar os produtos do carrinho;
* Visualizar preço, quantidade e subtotal dos produtos;
* Calcular o valor total da compra;
* Avançar para a tela de pagamento;
* Preencher os dados do cartão;
* Validar os dados utilizando **React Hook Form + Zod**;
* Simular o processamento de uma compra;
* Identificar cartões considerados suspeitos pela regra definida no projeto;
* Exibir uma tela de compra aprovada;
* Exibir uma tela de falha;
* Retornar ao carrinho ou tentar o pagamento novamente.

---

# 🚀 Tecnologias utilizadas

## React

Utilizado para construção da interface e organização da aplicação em componentes reutilizáveis.

Principais conceitos utilizados:

* Componentes funcionais;
* JSX;
* Props;
* `useState`;
* Eventos;
* Renderização condicional;
* `map()`;
* `reduce()`;
* Arrays e objetos;
* Composição de componentes.

---

## Vite

Utilizado para criação e execução do projeto React durante o desenvolvimento.

O Vite fornece o ambiente de desenvolvimento e o processo de build da aplicação.

---

## React Router DOM

Utilizado para criar as rotas da aplicação e permitir a navegação entre as diferentes telas.

Rotas utilizadas:

| Rota         | Página             |
| ------------ | ------------------ |
| `/`          | Carrinho           |
| `/pagamento` | Pagamento          |
| `/sucesso`   | Compra aprovada    |
| `/falha`     | Falha no pagamento |

Também foi utilizado `useNavigate()` para realizar navegação programática após o processamento do pagamento.

---

## React Hook Form

Utilizado para controlar e gerenciar o formulário de pagamento.

O formulário utiliza recursos como:

* `useForm()`;
* `handleSubmit()`;
* `formState`;
* `isSubmitting`;
* mensagens de erro;
* controle do estado de envio.

Isso evita a necessidade de controlar manualmente cada campo utilizando vários `useState`.

---

## Zod

Utilizado para criar o **schema de validação** do formulário.

São validados:

* Nome do titular;
* Número do cartão;
* Validade;
* CVV.

Também são aplicadas regras específicas para o formato dos dados.

---

## CSS

Utilizado para estilização da aplicação.

O projeto possui:

* Layout responsivo;
* Formulários estilizados;
* Cards;
* Botões;
* Estados de erro;
* Estados de foco;
* Modal de processamento;
* Tela de sucesso;
* Tela de falha.

---

# 🧠 Lógicas utilizadas

## Carrinho

Os produtos são armazenados em um array de objetos.

Cada produto possui:

```javascript
{
  id: 1,
  nome: "Teclado Mecânico",
  preco: 250.00,
  quantidade: 1
}
```

O carrinho é renderizado utilizando `map()`.

Cada produto possui uma chave única utilizando seu `id`:

```jsx
{produtos.map((produto) => (
  <ItemCarrinho
    key={produto.id}
    nome={produto.nome}
    preco={produto.preco}
    quantidade={produto.quantidade}
  />
))}
```

---

## Cálculo do total

O valor total da compra é calculado utilizando `reduce()`.

A lógica multiplica o preço do produto pela quantidade e soma todos os produtos:

```javascript
const total = produtos.reduce(
  (soma, produto) => soma + produto.preco * produto.quantidade,
  0
)
```

Dessa forma, o total é calculado automaticamente a partir dos produtos do carrinho.

---

## Props

Os componentes recebem informações através de props.

Por exemplo:

```jsx
<ItemCarrinho
  nome={produto.nome}
  preco={produto.preco}
  quantidade={produto.quantidade}
/>
```

Isso permite reutilizar o mesmo componente para diferentes produtos.

---

## Componentização

A aplicação foi dividida em componentes para facilitar a organização e reutilização do código.

Alguns dos componentes utilizados:

* `ItemCarrinho`
* `ResumoCompra`

As páginas também foram separadas:

* `CarrinhoPage`
* `PagamentoPage`
* `SucessoPage`
* `FalhaPage`

---

# 💳 Validação do pagamento

A validação do formulário é realizada utilizando **React Hook Form + Zod**.

### Titular

O nome do titular é obrigatório.

### Número do cartão

O cartão precisa possuir **16 dígitos**.

Espaços e hífens são ignorados.

Exemplos aceitos:

``1234567890123456

-- 1234 5678 9012 3456

-- 1234-5678-9012-3456

### Validade

A validade deve seguir o formato e deve estar entre `01` e `12`.

-- MM/AA => 10/29

### CVV

O CVV deve possuir exatamente 3 dígitos.

-- 123 


---

# 🔎 Regra do cartão

Além das validações do formulário, existe uma regra específica para simular a análise do cartão.

Caso os 16 dígitos do cartão sejam todos iguais, o pagamento é considerado suspeito.

-- 1111111111111111

-- 2222222222222222

Nesse caso, a aplicação direciona o usuário para a tela de falha. `("/falha)`

Um cartão com 16 dígitos diferentes pode seguir para a tela de aprovação. `(/sucesso)`

> Esta é apenas uma regra de simulação definida para o projeto e não representa uma validação real de cartões.

---

# ⏳ Simulação de processamento

O projeto possui uma simulação de processamento assíncrono.

Após o envio do formulário, a aplicação aguarda alguns segundos antes de apresentar o resultado.

Foi utilizado:

* `Promise`;
* `setTimeout()`;
* `async/await`;
* `useState`.

Durante esse período, a aplicação exibe um aviso de processamento e o botão de pagamento fica desabilitado para evitar múltiplos envios.

---

# 🪝 Custom Hook

Foi criado um Hook personalizado chamado:

-- usePagamento.js

Ele é responsável por concentrar a lógica relacionada ao processamento do pagamento.

O Hook utiliza:

* `useState`;
* `useNavigate`;
* `Promise`;
* `async/await`;
* regras de validação do cartão;
* navegação para sucesso ou falha.

Exemplo de utilização:

```javascript
const { processarPagamento, processando } = usePagamento()
```

A criação desse Hook ajuda a separar a lógica de processamento da estrutura visual da página.

---

# ♿ Acessibilidade

Foram aplicados alguns recursos de acessibilidade na interface, principalmente no formulário de pagamento.

Entre eles:

* Uso de elementos semânticos;
* `label` associado aos campos;
* `htmlFor`;
* `aria-invalid`;
* `aria-describedby`;
* mensagens de erro;
* `role="alert"`;
* `role="dialog"` no modal;
* `aria-modal`;
* estados de foco nos campos.

Esses recursos ajudam usuários que utilizam tecnologias de acessibilidade e também melhoram a experiência de navegação pelo teclado.

---

# 📱 Responsividade

A aplicação foi desenvolvida para funcionar em diferentes tamanhos de tela.

O layout possui regras específicas para dispositivos menores, reorganizando os elementos principalmente na tela de pagamento.

---

## 🛒 Carrinho

### Desktop

<img width="1919" height="910" alt="image" src="https://github.com/user-attachments/assets/6cb5401b-8729-4515-b7bb-a6705335851f" />

---

### Mobile

<img width="659" height="902" alt="image" src="https://github.com/user-attachments/assets/194c654e-7b93-4433-8b3d-292ff1552d5b" />

**Descrição:**
Tela inicial da aplicação contendo os produtos, quantidades, valores individuais, subtotais e valor total da compra.

---

## 💳 Tela de pagamento

[INSIRA AQUI O PRINT DA TELA DE PAGAMENTO]

**Descrição:**
Tela responsável pelo preenchimento dos dados do cartão e visualização do resumo da compra.

### Desktop

<img width="1918" height="909" alt="image" src="https://github.com/user-attachments/assets/2aca2ab8-ca10-4e22-8adf-e7e24e326a49" />

### Mobile

<img width="650" height="890" alt="image" src="https://github.com/user-attachments/assets/789f617d-7958-4395-ae6e-f85aa0612bab" />

---

## ⏳ Processamento

<img width="1120" height="631" alt="image" src="https://github.com/user-attachments/assets/71dc8120-2ea7-4c50-ada3-30266ef9669b" />

**Descrição:**
Durante o envio do pagamento, a aplicação apresenta um aviso de processamento e impede novos envios.

---

## ✅ Compra aprovada

<img width="1918" height="908" alt="image" src="https://github.com/user-attachments/assets/439176ee-a4f0-43a6-9b8c-e630ebb128a1" />

**Descrição:**
Tela apresentada quando o cartão passa pelas regras definidas para aprovação.

---

## ❌ Falha no pagamento

<img width="1917" height="910" alt="image" src="https://github.com/user-attachments/assets/cc5c73c6-40d0-4838-965e-45814a749683" />

**Descrição:**
Tela apresentada quando o cartão é considerado suspeito pela regra de cartões com todos os dígitos iguais.

---

# 📂 Estrutura do projeto

A estrutura principal do projeto está organizada da seguinte forma:

```text
src/
│
├── assets/
│   └── styles/
│       ├── pagamento.css
│       ├── ResumoCompra.css
│       └── ...
│
├── components/
│   ├── ItemCarrinho.jsx
│   └── ResumoCompra.jsx
│
├── data/
│   └── produtos.js
│
├── hooks/
│   └── usePagamento.js
│
├── pages/
│   ├── CarrinhoPage.jsx
│   ├── PagamentoPage.jsx
│   ├── SucessoPage.jsx
│   └── FalhaPage.jsx
│
├── schemas/
│   └── pagamentoSchema.js
│
├── utils/
│   └── valildarCartao.js
│
├── App.jsx
└── main.jsx
```

---

# ▶️ Como executar o projeto

## 1. Clonar o repositório

```bash
git clone https://github.com/LuizMirandaJr/mini-projeto-md2.git
```

---

## 2. Entrar na pasta do projeto

```bash
cd mini-projeto-md2/mini-projeto-modulo2
```

---

## 3. Instalar as dependências

```bash
npm install
```

---

## 4. Executar o projeto

```bash
npm run dev
```

Após executar o comando, o Vite disponibilizará o endereço local da aplicação no terminal.

Normalmente será algo semelhante a:

```text
http://localhost:5173
```

---

# 🧪 Como testar

É possível testar diferentes cenários diretamente pela aplicação.

### Compra aprovada

Utilize um cartão com 16 dígitos que não sejam todos iguais.

Exemplo:

```text
1234567890123456
```

---

### Compra recusada

Utilize um cartão com os 16 dígitos iguais.

Exemplo:

```text
1111111111111111
```

A aplicação deverá direcionar para a tela de falha.

---

### Cartão com espaços

```text
1234 5678 9012 3456
```

Os espaços são removidos antes da análise.

---

### Cartão com hífens

```text
1234-5678-9012-3456
```

Os hífens também são removidos antes da análise.

---

# 🐞 Debugger

Durante o desenvolvimento foram utilizados recursos de **debug do navegador** para acompanhar a execução da aplicação e identificar possíveis problemas no fluxo.

### Exemplo de ponto analisado

A lógica de processamento do pagamento pode ser acompanhada dentro do Hook:

```text
src/hooks/usePagamento.js
```

Um breakpoint pode ser colocado na função:

```javascript
async function processarPagamento(dados) {
```

A partir desse ponto é possível acompanhar:

* Os dados enviados pelo formulário;
* O início do processamento;
* A limpeza do número do cartão;
* A verificação da regra do cartão;
* A navegação para sucesso ou falha.

### Print do Debugger

<img width="881" height="390" alt="image" src="https://github.com/user-attachments/assets/1e084ed7-bcf2-47b6-876e-de20a55d9057" />

---

# 📋 Trello

Quadro utilizado para organização e acompanhamento das tarefas do projeto.

🔗 **Trello:**

https://trello.com/invite/b/6aa32f7af632d7790f49a2b9/ATTI5b9998d212864cfb20146088d376f41dB49B9D55/mini-projeto-carrinho-e-commerce

---

# 🎥 Vídeo de apresentação

Vídeo demonstrando o funcionamento do projeto e os principais pontos desenvolvidos.

🔗 **Vídeo:**

https://drive.google.com/file/d/112Wdm95FhcN7K0MHWCeS2y7dxQ1FsV7r/view?usp=drive_link

---

# 🔗 Repositório

Código-fonte do projeto:

🔗 **GitHub:**
https://github.com/LuizMirandaJr/mini-projeto-md2

---

# 🤖 Uso de Inteligência Artificial

Durante o desenvolvimento do projeto foram utilizadas ferramentas de Inteligência Artificial como apoio ao processo de aprendizagem e desenvolvimento.

As IA's foram utilizada principalmente para:

### Chat GPT
* Sugestões de implementação;
* Organização e documentação do projeto.

### Claude
* Esclarecimento de dúvidas;
* Auxílio na compreensão de conceitos;
* Identificação de possíveis problemas;
* Revisão de código;

Todo o código utilizado no projeto foi analisado , testado e validado durante o desenvolvimento, buscando compreender o funcionamento das soluções utilizadas.

---

# 🔮 Possíveis melhorias

Apesar de atender à proposta do projeto, algumas funcionalidades poderiam ser adicionadas em uma versão futura:

* Cadastro de produtos;
* Adição e remoção de produtos do carrinho;
* Alteração de quantidade;
* Persistência do carrinho;
* Página de confirmação com dados do pedido.

---

# 📚 Conceitos praticados

Este projeto permitiu colocar em prática diversos conceitos estudados durante o módulo:

* React;
* JSX;
* Componentes funcionais;
* Props;
* Composição;
* `useState`;
* Hooks personalizados;
* Eventos;
* Renderização condicional;
* Arrays;
* Objetos;
* `map()`;
* `reduce()`;
* React Router;
* Navegação programática;
* React Hook Form;
* Zod;
* Validação de formulários;
* `Promise`;
* `async/await`;
* Simulação de processamento assíncrono;
* CSS;
* Responsividade;
* Acessibilidade;
* Debugger;
* Git e GitHub.

---

# 👨‍💻 Autor

**Luiz Carlos Gomes de Miranda Junior**

Projeto desenvolvido para fins acadêmicos e de aprendizado em desenvolvimento Front-End com React.
