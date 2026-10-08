# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Revisión de pares en calidad de código**.

| | |
|---|---|
| Tema | calidad-de-código-revisión-de-pares |
| Nivel | junior-l1 |
| Chapter | Frontend |
| Especialidad | Angular |
| Stack | TypeScript / Angular 20 |
| Patron arquitectonico | capas estándar con componentes contenedores y presentacionales |
| Tiempo estimado | 4 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json, angular.json y tsconfig.json en la raiz`
- `src/main.ts con bootstrapApplication`
- `src/app/app.config.ts con los providers`
- `src/app/core con servicios y modelos`
- `src/app/features con componentes contenedores`
- `src/app/shared con componentes presentacionales`

Trampas conocidas:

- No inventes versiones de npm: una version inexistente hace fallar `npm install` con ETARGET y el proyecto no instala. Usa rango con caret sobre una version que exista.
- El `package.json` tiene que ser JSON valido y UNICO: nada despues de la llave de cierre.
- Angular necesita `angular.json` y `tsconfig.json` ademas del `package.json`, o `ng build` no corre.

Dependencias:

- @angular/core 20.2.0
- @angular/common 20.2.0
- @angular/forms 20.2.0
- @angular/router 20.2.0
- @angular/platform-browser 20.2.0
- @angular/platform-browser-dynamic 20.2.0
- rxjs 7.8.0
- @angular/material 20.2.0
- typescript 5.4.2
- zone.js 0.14.4
- @angular/cli n/a
- @angular/compiler-cli n/a
- jasmine-core n/a
- karma n/a
- karma-jasmine n/a
- karma-chrome-launcher n/a

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Exploración del código**: Lista de componentes con una breve descripción de sus responsabilidades.
- **Fase 2 — Identificación de problemas técnicos**: Documento con una lista de problemas técnicos encontrados y posibles soluciones.
- **Fase 3 — Feedback constructivo**: Feedback constructivo con sugerencias para mejorar la calidad del código.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Lo que falta y tenes que completar

### 1. Archivos que la arquitectura declara (4 de 18)

La propuesta arquitectonica del reto los lista y no llegaron al repo. Crealos con implementacion real, respetando la capa en la que viven:

- [ ] `src/app/shared/components/transaction-card/transaction-card.component.ts`
- [ ] `src/app/shared/components/transaction-card/transaction-card.component.html`
- [ ] `src/app/shared/directives/highlight.directive.ts`
- [ ] `src/app/app.routes.ts`

### Presentes (16)

- `package.json`
- `angular.json`
- `tsconfig.json`
- `src/app/core/services/data.service.ts`
- `src/app/core/models/transaction.model.ts`
- `src/main.ts`
- `src/index.html`
- `src/app/app.config.ts`
- `src/app/features/transaction-list/transaction-list.component.ts`
- `src/app/features/transaction-list/transaction-list.component.html`
- `src/app/features/transaction-list/transaction-list.component.scss`
- `src/app/shared/components/transaction-card/transaction-card.component.scss`
- `src/app/features/transaction-detail/transaction-detail.component.ts`
- `src/app/features/transaction-detail/transaction-detail.component.html`
- `src/app/features/transaction-detail/transaction-detail.component.scss`
- `README.md`

### Capas del patron declarado

Cada una tiene que existir como directorio real con al menos un archivo. Codigo plano en la raiz no satisface el patron.

- `src/app/core`
- `src/app/features`
- `src/app/shared`
- `src/app/models`
- `src/assets`
- `src/environments`

## Verificacion

```bash
npm install && npm run build
```

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **capas estándar con componentes contenedores y presentacionales**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Frontend, Especialidad Desarrollador, Tecnología Angular, Junior
- Brecha que el reto ataca: Revisa el código de otros y da feedback técnico oportuno y valioso (revisión de pares). Brecha: Calidad de código y revisión de pares. Candidato Junior con experiencia inicial en Angular, necesita desarrollar habilidades críticas en revisión de código y calidad de software.

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
