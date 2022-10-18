<div align='center'>
    <img height='400px' src="./.github/login-desktop.png">
</div>


<p align="center">
  <a href="#-keepalive">🔐 Projeto</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-Tecnologias"> 👩‍💻 Tecnologias</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-Configurações"> 🔑  Configurações </a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-Requisitos-funcionais">  📝 Requisitos  </a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-Como-rodar-a-aplicação">  👷‍♀️ Como rodar  </a>&nbsp;&nbsp;
</p>

## 🔐 keepalive
**Keepalive** é o projeto da **4ª Sprint** e o **Desafio 4** do programa de bolsas da Compass Uol. O objetivo é construir um website com sistema de login seguro que promova a integração e centralização de funcionalidade para colaboradores na Compass, seguindo os requisitos passados. 

### ✒ **Layout**

[![Figma](https://img.shields.io/badge/acessar%20layout%20no%20figma-222222?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/file/DqSemG9Z09LG9cAf8L8nUm/keepalive)



## 👩‍💻 Tecnologias
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)![SCSS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)![Firebase](https://img.shields.io/badge/firebase-039BE5?style=for-the-badge&logo=firebase&logoColor=F2C22D)![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)

### 📔 Bibliotecas

- Axios
### ⚙ **APIs**
| **API**              |
| -------------------- | 
| [WeatherAPI](https://www.weatherapi.com/docs/)             | 
| [NominationReverseGeolocation](https://nominatim.org/release-docs/develop/api/Reverse/)     |  

## 🔑 Configurações

Para rodar esse projeto, você vai precisar adicionar as seguintes informações em um objeto e exportá-lo no seu arquivo de configuração em `js/firebaseConfig.js`

| **KEY**              | Valor                                                            |
| -------------------- | ---------------------------------------------------------------- |
| `apiKey`             | `AIzaSyAxzebOeaZnwi2psHtZxYTSFP64-zk59yU`                        |
| `authDomain`         |  `localhost`                                                     |
| `projectId`          |  `keepalive-7b265`                                               |
| `storageBucket`      |  `keepalive-7b265.appspot.com`                                   |
| `messagingSenderId`  |  `993226167032`                                                  |
| `appId`              |  `1:993226167032:web:f6b9876a1869a8743ea10d`                     |

Os usuários e senhas disponíveis no projeto são:

| **Usuário**           | **Senha**        |
| -------------------- | ----------------- |
| admin@compassouol.com.br  | `admin123`   |
| fabi@compassouol.com.br  | `fabi123`     |
| nico@compassouol.com.br  | `nico123`     |
| leandro@compassouol.com.br  | `leandro123` |

 ## 📝 Requisitos funcionais

### ✔ Requisitos Principais

- [X] Telas
  - [X] Login (Preenchido, Vazio e Erro)
  - [X] Home
- [X] Validação login com usuário e senha
- [X] Data e horário em tempo real
- [X] Exibir informação de Clima/Tempo conforme geolocalização do usuário
- [X] Cronômetro ao acessar a página Home.
- [X] Redirecionar o usuário ao término do cronômetro para página Login
- [X] Logout do usuário
- [X] Armazenar dados no LocalStorage
- [X] Controlar o estado do usuário de Logout e Login
    - [X] Caso o usuário realize o logout, deverá aparecer um Pop-up que perguntará ao usuário se deseja continuar logado
    - [X] Caso deseje continuar logado, o login será automático sem a necessidade de preencher os campos novamente
    - [X] Caso deseje sair, o local storage deverá ser resetado e o usuário deslogado.
- [X] Navegação para página da UOL

### ✨ Funcionalidades adicionais
- [X] Autenticação com Firebase
  - [X] Login
  - [X] Logout
  - [X] Redirecionamento do usuário, caso logado.
  - [X] Continuar conectado
- [X] Animação na página Home
- [X] Responsividade para diversos aparelhos
- [ ] Tela de Carregamento ([loading.io](https://loading.io/css/))
- [ ] Refatoração
  - [ ] JS
  - [ ] SCSS

### 📱 Responsividade  
- [X] Mobile
- [X] Tablet
- [X] Laptop
- [X] Desktop


## 🎨 Documentação de Cores

- Você pode consultar a documentação das cores através desse link [Styleguide](./styleguide.md).

## 👷‍♀️ Como rodar a aplicação

```bash
# Clone o projeto
$ git clone https://github.com/pedrovinhas/keepalive.git

# Acesse a pasta
$ cd keepalive

# Crie o arquivo firebaseConfig.js e copie as chaves.

# Abra o Live Server

```

---
<blockquote> Feito por Pedro Henrique Vinhas 🪐 </blockquote>