# 🐶 Virtual Pet — Sistema de Alimentação com Firebase

Este projeto implementa um **pet virtual interativo**, onde o usuário pode alimentar um cachorro, visualizar o estoque de comida e acompanhar o horário da última refeição.  
A aplicação utiliza **JavaScript**, **p5.js** e **Firebase Realtime Database** para sincronização dos dados.

---

## 🎮 Funcionalidades

- Exibe um cachorro **triste** quando está com fome e **feliz** após ser alimentado.
- Mostra o **estoque de comida** disponível.
- Registra e exibe o **horário da última alimentação**.
- Permite:
  - **Alimentar o cachorro**.
  - **Adicionar comida ao estoque**.
- Atualiza o Firebase em tempo real.
- Usa a classe `Food` para gerenciar visualmente e logicamente o estoque.

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript**
- **p5.js** (para renderização gráfica)
- **Firebase Realtime Database**
- **HTML5 + Canvas**
- **Classes ES6** (para modularização)

---

## 🚀 Como Executar o Projeto

### 1. Clonar o repositório
### 2. Adicionar o firebase no projeto
No index.html, inclua sua configuração:
<script>
  const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

  firebase.initializeApp(firebaseConfig);
</script>

### 3. Iniciar o projeto
Você pode usar Live Server no VS Code ou qualquer servidor local.
O projeto não funciona abrindo o arquivo HTML diretamente, pois o Firebase exige ambiente de servidor.

---

## 🐛 Correções Implementadas

- `FeedTime` estava sobrescrevendo o valor `Food`.  
- Leitura do horário da última refeição estava ausente.  
- Estoque sendo decrementado diretamente sem checagens.  
- Exibição do horário estava vazia.  
- Evitada alimentação com valores negativos.  
- Sincronização via Firebase reorganizada.  

---

## 💡 Possíveis Melhorias Futuras

- Adicionar sistema de níveis do pet.  
- Criar animações para o cachorro.  
- Exibir histórico dos horários de alimentação.  
- Adicionar novos tipos de comida.  
- Implementar sistema de notificações.  

---

## 👩‍💻 Autoria

Projeto desenvolvido e mantido por **Camila Cardoso de Menezes**, como parte dos estudos de **JavaScript, Firebase e programação gráfica com p5.js**.


```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
