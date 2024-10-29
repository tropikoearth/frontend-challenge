# Tropiko App

## Pré-requisitos

Antes de começar, você precisa ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão recomendada)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [nvm](https://github.com/nvm-sh/nvm) (opcional, mas recomendado para gerenciar versões do Node.js)

## 1. Clonar o repositório

Clone este repositório em sua máquina local:

```bash
git clone https://github.com/tropikoearth/frontend-challenge.git
cd nome-do-projeto
```

## 2. Instalar dependências

### Usando npm

Instale as dependências do projeto com npm:

```bash
npm install
```

### Usando nvm

Se você estiver usando o nvm, siga estas etapas:

1. Instale a versão necessária do Node.js (substitua `20` pela versão desejada):

   ```bash
   nvm install 20
   ```

2. Defina a versão instalada como a versão padrão:

   ```bash
   nvm use 20
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## 3. Criar conta e token no Mapbox

Acesse o site do [Mapbox](https://www.mapbox.com/) e crie uma conta. Após criar a conta, você precisará gerar um token de acesso que será utilizado no seu projeto.

## 4. Configurar variáveis de ambiente

Copie o arquivo `env.example` para um novo arquivo chamado `.env`, que será utilizado para definir as variáveis de ambiente necessárias:

```bash
cp env.example .env
```

Depois de copiar o arquivo, adicione o token do Mapbox e outras variáveis necessárias no arquivo `.env`.

## 5. Executar o projeto em Docker

Para subir o projeto utilizando Docker Compose, siga os passos abaixo:

1. Certifique-se de que o Docker e o Docker Compose estão instalados e em execução.
2. Execute o seguinte comando para iniciar o serviço:

   ```bash
   docker-compose up
   ```

3. Para rodar o projeto em modo detach (em segundo plano), utilize:

   ```bash
   docker-compose up -d
   ```

## 6. Fazer build

Se você precisar fazer o build da aplicação, execute:

```bash
docker-compose build
```

## 7. Testar

Para rodar os testes do projeto, utilize:

```bash
npm test
```

## 8. Parar o Docker

Para parar os containers do Docker, você pode usar:

```bash
docker-compose down
```
