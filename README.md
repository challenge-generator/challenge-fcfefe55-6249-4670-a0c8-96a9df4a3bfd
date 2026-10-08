# Revisión de pares en calidad de código

Como parte del equipo de desarrollo frontend en una fintech, necesitas revisar el código de tus compañeros para asegurar la calidad del software. Tu tarea es identificar problemas técnicos y proporcionar feedback constructivo. El sistema de frontend utiliza Angular para desarrollar componentes reutilizables y eficientes. Los componentes deben ser legibles, mantenibles y cumplir con las mejores prácticas de Angular.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | calidad-de-código-revisión-de-pares |
| **Nivel** | junior-l1 |
| **Tipo** | practical |
| **Tiempo estimado** | 4 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Exploración del código

**Objetivo:** Identificar y comprender los componentes del código

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Revisa un conjunto de componentes Angular proporcionados por tus compañeros.
- Identifica los componentes principales y sus responsabilidades.

**Entregable:** Lista de componentes con una breve descripción de sus responsabilidades.

<details>
<summary>Pistas de conocimiento</summary>

- Fíjate en la estructura del código y en cómo se organizan los componentes.
- Considera la legibilidad y la mantenibilidad del código.

</details>

### Fase 2: Identificación de problemas técnicos

**Objetivo:** Detectar problemas técnicos en el código

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Analiza el código para identificar problemas técnicos como errores de sintaxis, malas prácticas, o ineficiencias.
- Documenta cada problema encontrado con una descripción clara y una posible solución.

**Entregable:** Documento con una lista de problemas técnicos encontrados y posibles soluciones.

<details>
<summary>Pistas de conocimiento</summary>

- Revisa las mejores prácticas de Angular y cómo se aplican en el código.
- Considera la eficiencia y la mantenibilidad del código.

</details>

### Fase 3: Feedback constructivo

**Objetivo:** Proporcionar feedback constructivo a tus compañeros

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Escribe un feedback constructivo para cada problema técnico identificado.
- Incluye sugerencias para mejorar la calidad del código.

**Entregable:** Feedback constructivo con sugerencias para mejorar la calidad del código.

<details>
<summary>Pistas de conocimiento</summary>

- Sé específico y claro en tu feedback.
- Proporciona ejemplos de código mejorado si es necesario.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es la revisión de pares en el contexto de la calidad de código?
- **paraQueSirve**: ¿Para qué sirve la revisión de pares en el desarrollo de software?
- **erroresComunes**: ¿Cuáles son los errores comunes que se pueden encontrar en el código de Angular?
- **queDecisionesImplica**: ¿Qué decisiones implica proporcionar feedback constructivo en la revisión de pares?

## Criterios de Evaluacion

- Identificación de componentes y sus responsabilidades.
- Detección de problemas técnicos en el código.
- Provisión de feedback constructivo con sugerencias para mejorar la calidad del código.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT). Devuelve un ZIP con el proyecto. Sirve si no tenes un agente en el IDE.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
