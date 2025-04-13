# 🧪 Projeto de Testes de Performance com k6

Este projeto contém exemplos de testes de performance utilizando o [k6](https://k6.io/), ferramenta de código aberto para testes de carga.

## 🔧 Pré-requisitos

- [Instalar k6](https://k6.io/docs/getting-started/installation/)

## 📁 Estrutura

- `scripts/`: contém os arquivos de teste
- `results/`: onde ficam os resultados (se desejar exportar)

## 🚀 Como rodar os testes

```bash
k6 run scripts/smoke-test.js
k6 run scripts/load-test.js
k6 run scripts/stress-test.js
```

Exportar resultado:

```bash
k6 run --out json=results/smoke.json scripts/smoke-test.js
```

## ✅ Tipos de Testes

- **Smoke Test**: Verifica se a API está no ar e responde corretamente
- **Load Test**: Testa com volume constante
- **Stress Test**: Testa os limites de carga da aplicação

---

Feito com 💻 por [Seu Nome](https://linkedin.com/in/seunome)
