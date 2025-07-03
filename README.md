# Gera Dado BR 🇧🇷

Uma extensão do Chrome que gera CPF, CNPJ e UUID válidos para desenvolvimento e testes.

## 🤖 Projeto 100% Gerado por IA

Este projeto foi criado inteiramente usando inteligência artificial, como parte de um experimento para testar os limites e capacidades das IAs atuais no desenvolvimento de software.

### IAs Utilizadas
- **Claude (Anthropic)**: Responsável pela estruturação inicial, lógica de negócio e documentação
- **AI Studio Gemini Pro 2.5 (Google)**: Contribuiu com refinamentos de interface e otimizações de código

### Objetivo do Experimento
- **Testar limites da IA**: Verificar até onde a IA consegue desenvolver um projeto completo
- **Estudar evolução**: Documentar o processo de criação e as capacidades demonstradas
- **Validar qualidade**: Analisar se o código gerado pela IA atende aos padrões profissionais
- **Explorar autonomia**: Verificar o nível de independência da IA no desenvolvimento

## 🚀 Funcionalidades

- **Geração de CPF**: Números válidos com algoritmo de verificação correto
- **Geração de CNPJ**: Números válidos seguindo as regras brasileiras
- **Geração de UUID**: Identificadores únicos universais (v4)
- **Formatação**: Opção de gerar com ou sem formatação
- **Cópia rápida**: Botão para copiar diretamente para a área de transferência
- **Interface responsiva**: Design moderno com tema brasileiro

## 📦 Instalação

1. Baixe ou clone este repositório
2. Abra o Chrome e vá para `chrome://extensions/`
3. Ative o "Modo do desenvolvedor" no canto superior direito
4. Clique em "Carregar extensão sem compactação"
5. Selecione a pasta do projeto
6. A extensão aparecerá na barra de ferramentas

## 🛠️ Estrutura do Projeto

```
gera-dado-br/
├── manifest.json          # Configuração da extensão
├── popup.html             # Interface do usuário
├── popup.js               # Lógica de geração e interação
├── package.json           # Configuração do projeto
├── icons/                 # Ícones da extensão (não inclusos)
└── README.md             # Este arquivo
```

## 🎯 Uso

1. Clique no ícone da extensão na barra de ferramentas
2. Escolha o tipo de dado que deseja gerar (CPF, CNPJ ou UUID)
3. Configure as opções de formatação se necessário
4. Clique no botão "Gerar"
5. Use o botão "Copiar" para copiar o resultado

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura da interface
- **CSS3**: Estilização com gradientes e animações
- **JavaScript**: Algoritmos de geração e manipulação do DOM
- **Chrome Extension API**: Integração com o navegador

## 🧮 Algoritmos Implementados

### CPF
- Geração de 9 dígitos aleatórios
- Cálculo do primeiro dígito verificador
- Cálculo do segundo dígito verificador
- Formatação opcional (000.000.000-00)

### CNPJ
- Geração de 8 dígitos aleatórios + 0001 (matriz)
- Cálculo dos dígitos verificadores com pesos específicos
- Formatação opcional (00.000.000/0001-00)

### UUID v4
- Geração de identificador único seguindo RFC 4122
- Formato: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
- Opção de maiúsculas/minúsculas

## 🎨 Design

A interface utiliza as cores da bandeira brasileira:
- **Verde**: #009639 (botões e destaques)
- **Amarelo**: #FFDF00 (títulos e acentos)
- **Azul**: #002776 (gradientes de fundo)

## ⚠️ Aviso Legal

Os dados gerados são **apenas para fins de desenvolvimento e testes**. Não devem ser utilizados para:
- Cadastros reais
- Documentos oficiais
- Atividades fraudulentas
- Qualquer uso que viole a legislação brasileira

## 🔬 Resultados do Experimento com IA

Este projeto demonstra que as IAs atuais (Claude e Gemini Pro 2.5) são capazes de:
- ✅ Criar código funcional e bem estruturado
- ✅ Implementar algoritmos complexos (validação de CPF/CNPJ)
- ✅ Desenvolver interfaces responsivas e atraentes
- ✅ Seguir boas práticas de desenvolvimento
- ✅ Criar documentação completa
- ✅ Entender contextos específicos (documentos brasileiros)
- ✅ Colaborar entre diferentes modelos de IA

### Divisão de Trabalho entre IAs
- **Claude**: Focou na arquitetura, algoritmos de validação e documentação técnica
- **Gemini Pro 2.5**: Especializou-se em design visual, animações CSS e experiência do usuário

## 🚀 Evolução Observada

Durante o desenvolvimento colaborativo com Claude e Gemini Pro 2.5, as IAs demonstraram:
- Compreensão de requisitos complexos
- Capacidade de correção e refinamento
- Conhecimento de padrões web modernos
- Adaptação a contextos locais (Brasil)
- **Sinergia entre modelos**: Cada IA contribuiu com suas especialidades
- **Iteração produtiva**: Melhorias contínuas baseadas no feedback mútuo

## 📄 Licença

Este projeto é de domínio público e pode ser usado livremente para fins educacionais e experimentais.

## 🤝 Contribuições

Como este é um projeto experimental sobre IA, contribuições são bem-vindas para:
- Melhorar a documentação do experimento
- Adicionar novas funcionalidades
- Otimizar o código existente
- Reportar bugs ou problemas

---

**Projeto criado em 2025 como experimento de desenvolvimento colaborativo com IA** 🤖✨

*Desenvolvido com Claude (Anthropic) e AI Studio Gemini Pro 2.5 (Google)*
