# Atomic Design – Regras de Classificação de Componentes

Este documento define regras práticas para classificar componentes em Atom, Molecule, Organism, Template e Page dentro do projeto.
O objetivo é manter consistência, legibilidade e escalabilidade.

---

## 1. ATOMS
### O que são
Componentes **mínimos e indivisíveis** da interface.
### Regras para ser um Atom
- Não depende visualmente de outro componente  
- Não renderiza outros componentes do projeto  
- Pode receber `props`, mas não controla fluxo de UI  
- Não conhece layout, página ou contexto  
- Extremamente reutilizável  
### Exemplos
- Button
- Input
- Checkbox
- Text
- Icon
- Link
---
## 2. MOLECULES
### O que são
**Combinação de dois ou mais atoms** que formam uma unidade funcional.
### Regras para ser uma Molecule
- Usa apenas atoms (ou lógica simples)  
- Representa uma função clara da UI  
- Ainda é reutilizável em vários contextos  
- Não representa uma seção inteira  
### Exemplos
- Input + Label + ErrorMessage
- Card simples
- Item de lista
- Grupo de botões
- SkillCard
---
## 3. ORGANISMS
### O que são
Componentes **grandes e específicos**, formados por molecules e atoms.
### Regras para ser um Organism
- Agrupa molecules e atoms  
- Representa uma **seção da interface**  
- Pode depender de contexto (Sidebar, estado, API)  
- Normalmente NÃO é reutilizável em muitos lugares  
### Exemplos
- Sidebar
- Header
- Footer
- AboutSection
- SkillsSection
- ProjectsPanel
### Observação Importante
Um organism **pode funcionar como uma “sub-página”**
dentro de uma SPA, desde que seja renderizado dentro de uma Page.

---
## 4. TEMPLATES
### O que são
Estruturas de **layout**, sem conteúdo final.
### Regras para ser um Template
- Define posicionamento dos organismos  
- NÃO contém texto ou dados finais  
- NÃO contém lógica de negócio  
- Pode ser reutilizado por várias páginas  
### Exemplos
- MainLayout
- SidebarLayout
- AuthLayout
- DashboardLayout

---

## 5. PAGES
### O que são
As telas finais da aplicação.
### Regras para ser uma Page
- Representa uma rota ou tela principal
- Usa templates ou organisms
- Contém dados reais
- Conecta UI com lógica da aplicação
### Exemplos
- Home
- Login
- About
- Dashboard
- Regra Importante
- Pages não devem ser reutilizadas como componentes.