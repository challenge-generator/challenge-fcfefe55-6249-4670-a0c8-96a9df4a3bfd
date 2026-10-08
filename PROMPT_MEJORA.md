# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener un ZIP con el proyecto completo y arrancable.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Lo que le falta a este proyecto

Esto NO lo tenes que adivinar: salio de comparar el proyecto contra la arquitectura declarada del reto y de un analisis estatico del codigo. Completalo TODO.

### Archivos que la arquitectura del reto declara y no estan

Creálos con implementacion real, en la capa que les corresponde:

- `src/app/shared/components/transaction-card/transaction-card.component.ts`
- `src/app/shared/components/transaction-card/transaction-card.component.html`
- `src/app/shared/directives/highlight.directive.ts`
- `src/app/app.routes.ts`

## Como saber que terminaste

```bash
npm install && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología Angular, Junior

### Brecha de conocimiento
Revisa el código de otros y da feedback técnico oportuno y valioso (revisión de pares). Brecha: Calidad de código y revisión de pares. Candidato Junior con experiencia inicial en Angular, necesita desarrollar habilidades críticas en revisión de código y calidad de software.

### Reto
- Tema: calidad-de-código-revisión-de-pares
- Seniority: junior-l1
- Tipo: practical
- Título: Revisión de pares en calidad de código
- Tiempo estimado: 4 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Exploración del código — objetivo: Identificar y comprender los componentes del código — entregable (NO resolver): Lista de componentes con una breve descripción de sus responsabilidades.
- Fase 2: Identificación de problemas técnicos — objetivo: Detectar problemas técnicos en el código — entregable (NO resolver): Documento con una lista de problemas técnicos encontrados y posibles soluciones.
- Fase 3: Feedback constructivo — objetivo: Proporcionar feedback constructivo a tus compañeros — entregable (NO resolver): Feedback constructivo con sugerencias para mejorar la calidad del código.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "fintech-frontend",
  "version": "0.0.1",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "~20.2.0",
    "@angular/cdk": "~20.2.0",
    "@angular/common": "~20.2.0",
    "@angular/compiler": "~20.2.0",
    "@angular/core": "~20.2.0",
    "@angular/forms": "~20.2.0",
    "@angular/material": "~20.2.0",
    "@angular/platform-browser": "~20.2.0",
    "@angular/platform-browser-dynamic": "~20.2.0",
    "@angular/router": "~20.2.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.14.4"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~20.2.0",
    "@angular/cli": "~20.2.0",
    "@angular/compiler-cli": "~20.2.0",
    "@types/jasmine": "~5.1.0",
    "jasmine-core": "~5.1.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "typescript": "~5.4.2"
  },
  "browserslist": [
    "last 1 Chrome version",
    "last 1 Firefox version",
    "last 2 Edge major versions",
    "last 2 Safari major versions",
    "last 2 iOS major versions"
  ]
}

// === ARCHIVO: angular.json ===
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "fintech-frontend": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:application": {
          "standalone": true,
          "strict": true,
          "inlineStyle": false,
          "inlineTemplate": false
        },
        "@schematics/angular:component": {
          "standalone": true,
          "style": "scss"
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "outputPath": "dist/fintech-frontend",
            "index": "src/index.html",
            "browser": "src/main.ts",
            "polyfills": [
              "zone.js"
            ],
            "tsConfig": "tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss",
              "node_modules/@angular/material/prebuilt-themes/indigo-pink.css"
            ],
            "scripts": []
          },
          "configurations": {
            "development": {
              "optimization": false,
              "outputHashing": "all",
              "sourceMap": true,
              "namedChunks": true,
              "extractLicenses": false,
              "vendorChunk": true
            },
            "production": {
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false,
              "namedChunks": false,
              "extractLicenses": true,
              "vendorChunk": false,
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ]
            }
          }
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "fintech-frontend:build"
          },
          "configurations": {
            "development": {
              "browserTarget": "fintech-frontend:build:development"
            },
            "production": {
              "browserTarget": "fintech-frontend:build:production"
            }
          }
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "fintech-frontend:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "polyfills": [
              "zone.js",
              "zone.js/testing"
            ],
            "tsConfig": "tsconfig.spec.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss",
              "node_modules/@angular/material/prebuilt-themes/indigo-pink.css"
            ],
            "scripts": []
          }
        },
        "lint": {
          "builder": "@angular-devkit/build-angular:tslint",
          "options": {
            "tsConfig": [
              "tsconfig.app.json",
              "tsconfig.spec.json"
            ],
            "exclude": [
              "**/node_modules/**"
            ]
          }
        },
        "e2e": {
          "builder": "@angular-devkit/build-angular:protractor",
          "options": {
            "protractorConfig": "e2e/protractor.conf.js",
            "devServerTarget": "fintech-frontend:serve"
          },
          "configurations": {
            "production": {
              "devServerTarget": "fintech-frontend:serve:production"
            }
          }
        }
      }
    }
  },
  "defaultProject": "fintech-frontend",
  "cli": {
    "schematicCollections": [
      "@schematics/angular"
    ],
    "analytics": false
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": false,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "useDefineForClassFields": false,
    "lib": [
      "ES2022",
      "dom",
      "dom.iterable"
    ],
    "paths": {
      "@angular/*": [
        "./node_modules/@angular/*"
      ]
    }
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  },
  "exclude": [
    "node_modules",
    "**/*.spec.ts",
    "**/*.stories.ts"
  ]
}

// === ARCHIVO: src/app/core/services/data.service.ts ===
import { Injectable, signal, effect, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Transaction } from '../models/transaction.model';
import { environment } from '../../../environments/environment';

/**
 * Servicio central para manejo de datos y consumo de APIs.
 * Proporciona métodos para obtener, crear y actualizar transacciones financieras.
 * Implementa manejo de errores y caching básico utilizando Angular Signals.
 */
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiBaseUrl}/transactions`;

  // Signals para manejo reactivo de estado
  private transactions = signal<Transaction[]>([]);
  private loading = signal<boolean>(false);
  private error = signal<string | null>(null);

  constructor() {
    // Efecto para reiniciar error cuando se carga nueva data
    effect(() => {
      if (this.loading()) {
        this.error.set(null);
      }
    });
  }

  /**
   * Obtiene todas las transacciones con opciones de filtrado y paginación.
   * @param params Parámetros de filtrado (opcional)
   * @returns Observable de Transaction[]
   */
  getTransactions(params?: {
    page?: number;
    limit?: number;
    type?: string;
    status?: string;
    minAmount?: number;
    maxAmount?: number;
    dateFrom?: string;
    dateTo?: string;
  }): Observable<Transaction[]> {
    this.loading.set(true);
    let httpParams = new HttpParams();

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          httpParams = httpParams.append(key, value.toString());
        }
      });
    }

    return this.http.get<Transaction[]>(this.apiUrl, { params: httpParams }).pipe(
      catchError((err) => {
        this.error.set(`Error al obtener transacciones: ${err.message}`);
        this.loading.set(false);
        return throwError(() => new Error(err));
      })
    );
  }

  /**
   * Obtiene una transacción específica por ID.
   * @param id ID de la transacción
   * @returns Observable de Transaction
   */
  getTransactionById(id: string): Observable<Transaction> {
    this.loading.set(true);
    return this.http.get<Transaction>(`${this.apiUrl}/${id}`).pipe(
      catchError((err) => {
        this.error.set(`Error al obtener transacción ${id}: ${err.message}`);
        this.loading.set(false);
        return throwError(() => new Error(err));
      })
    );
  }

  /**
   * Crea una nueva transacción.
   * @param transaction Datos de la transacción a crear
   * @returns Observable de Transaction
   */
  createTransaction(transaction: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>): Observable<Transaction> {
    this.loading.set(true);
    return this.http.post<Transaction>(this.apiUrl, transaction).pipe(
      catchError((err) => {
        this.error.set(`Error al crear transacción: ${err.message}`);
        this.loading.set(false);
        return throwError(() => new Error(err));
      })
    );
  }

  /**
   * Actualiza una transacción existente.
   * @param id ID de la transacción a actualizar
   * @param transaction Datos actualizados de la transacción
   * @returns Observable de Transaction
   */
  updateTransaction(id: string, transaction: Partial<Transaction>): Observable<Transaction> {
    this.loading.set(true);
    return this.http.patch<Transaction>(`${this.apiUrl}/${id}`, transaction).pipe(
      catchError((err) => {
        this.error.set(`Error al actualizar transacción ${id}: ${err.message}`);
        this.loading.set(false);
        return throwError(() => new Error(err));
      })
    );
  }

  /**
   * Señal que indica si se están cargando datos.
   * @returns Signal<boolean>
   */
  isLoading() {
    return this.loading.asReadonly();
  }

  /**
   * Señal que contiene el último error ocurrido.
   * @returns Signal<string | null>
   */
  getError() {
    return this.error.asReadonly();
  }

  /**
   * Señal que contiene las transacciones cargadas.
   * @returns Signal<Transaction[]>
   */
  getTransactionsSignal() {
    return this.transactions.asReadonly();
  }

  /**
   * Refresca manualmente las transacciones.
   * @param params Parámetros de filtrado (opcional)
   */
  refreshTransactions(params?: {
    page?: number;
    limit?: number;
    type?: string;
    status?: string;
    minAmount?: number;
    maxAmount?: number;
    dateFrom?: string;
    dateTo?: string;
  }) {
    this.getTransactions(params).subscribe({
      next: (data) => {
        this.transactions.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
      }
    });
  }
}

// === ARCHIVO: src/app/core/models/transaction.model.ts ===
/**
 * Modelo de datos para transacciones financieras.
 * Representa una operación monetaria entre cuentas o entidades.
 */
export interface Transaction {
  /**
   * Identificador único de la transacción.
   */
  id: string;

  /**
   * Tipo de transacción (ej: transferencia, pago, depósito).
   */
  type: 'transfer' | 'payment' | 'deposit' | 'withdrawal' | 'refund';

  /**
   * Estado actual de la transacción.
   */
  status: 'pending' | 'completed' | 'failed' | 'reversed' | 'cancelled';

  /**
   * Monto de la transacción.
   */
  amount: number;

  /**
   * Moneda en formato ISO (ej: USD, EUR).
   */
  currency: string;

  /**
   * Descripción opcional de la transacción.
   */
  description?: string;

  /**
   * Cuenta origen de la transacción.
   */
  sourceAccount: string;

  /**
   * Cuenta destino de la transacción.
   */
  destinationAccount: string;

  /**
   * Fecha de creación de la transacción en formato ISO.
   */
  createdAt: string;

  /**
   * Fecha de última actualización de la transacción en formato ISO.
   */
  updatedAt: string;

  /**
   * Metadatos adicionales asociados a la transacción.
   */
  metadata?: {
    [key: string]: unknown;
  };
}

/**
 * Modelo para creación de transacciones (sin IDs ni fechas generadas).
 */
export type CreateTransaction = Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>;

/**
 * Modelo para filtrado de transacciones.
 */
export interface TransactionFilter {
  page?: number;
  limit?: number;
  type?: string;
  status?: string;
  minAmount?: number;
  maxAmount?: number;
  dateFrom?: string;
  dateTo?: string;
}

// === ARCHIVO: src/main.ts ===
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// === ARCHIVO: src/index.html ===
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>FinTech - Gestión de Transacciones</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Plataforma de gestión de transacciones financieras. Administra tus transacciones con seguridad y eficiencia.">
  <meta name="keywords" content="fintech, transacciones, gestión financiera, banking">
  <meta name="author" content="FinTech Team">
  <meta name="robots" content="index, follow">
  <meta property="og:title" content="FinTech - Gestión de Transacciones">
  <meta property="og:description" content="Plataforma de gestión de transacciones financieras">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#1976d2">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
  <app-root></app-root>
  <noscript>
    <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
      <h1>JavaScript requerido</h1>
      <p>Por favor, habilite JavaScript en su navegador para usar esta aplicación.</p>
    </div>
  </noscript>
</body>
</html>

// === ARCHIVO: src/app/app.config.ts ===
import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouterStore, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { transactionReducer } from './core/store/transaction.reducer';
import { TransactionEffects } from './core/store/transaction.effects';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { DataService } from './core/services/data.service';
import { NotificationService } from './core/services/notification.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withViewTransitions()
    ),
    provideHttpClient(
      withFetch(),
      withInterceptors([authInterceptor, errorInterceptor])
    ),
    provideAnimationsAsync(),
    provideStore({ transactions: transactionReducer }),
    provideEffects([TransactionEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    {
      provide: DataService,
      useClass: DataService,
      deps: []
    },
    {
      provide: NotificationService,
      useClass: NotificationService,
      deps: []
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: authInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: errorInterceptor,
      multi: true
    }
  ]
};

// Validación de invariantes de configuración
const APP_CONFIG_VALIDATION = {
  validate(): void {
    const requiredProviders = [
      'DataService',
      'NotificationService',
      'HTTP_INTERCEPTORS'
    ];
    console.log('[AppConfig] Proveedores registrados:', requiredProviders.length);
  }
};

APP_CONFIG_VALIDATION.validate();

// === ARCHIVO: src/app/features/transaction-list/transaction-list.component.ts ===
import { Component, OnInit, OnDestroy, signal, computed, effect, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Subject, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs';

import { Transaction, TransactionFilter } from '../../core/models/transaction.model';
import { DataService } from '../../core/services/data.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionListComponent implements OnInit, OnDestroy {
  private readonly dataService = inject(DataService);
  private readonly notificationService = inject(NotificationService);
  private readonly fb = inject(FormBuilder);
  private readonly snackBar = inject(MatSnackBar);
  private readonly destroy$ = new Subject<void>();

  // Señales para estado reactivo
  readonly transactions = signal<Transaction[]>([]);
  readonly loading = signal<boolean>(false);
  readonly error = signal<string | null>(null);
  readonly currentPage = signal<number>(0);
  readonly pageSize = signal<number>(10);
  readonly totalTransactions = signal<number>(0);
  readonly sortField = signal<string>('createdAt');
  readonly sortDirection = signal<'asc' | 'desc'>('desc');

  // Filtros
  readonly filterForm: FormGroup = this.fb.group({
    search: ['', [Validators.minLength(2), Validators.maxLength(100)]],
    status: [''],
    type: [''],
    dateFrom: [''],
    dateTo: [''],
    minAmount: [null, [Validators.min(0)]],
    maxAmount: [null, [Validators.min(0)]]
  });

  // Computed signals
  readonly filteredTransactions = computed(() => {
    const txs = this.transactions();
    const filter = this.filterForm.value;
    
    return txs.filter(tx => {
      if (filter.status && tx.status !== filter.status) return false;
      if (filter.type && tx.type !== filter.type) return false;
      if (filter.search) {
        const search = filter.search.toLowerCase();
        const matchesSearch = 
          tx.id.toLowerCase().includes(search) ||
          tx.description?.toLowerCase().includes(search) ||
          tx.recipientName?.toLowerCase().includes(search);
        if (!matchesSearch) return false;
      }
      if (filter.minAmount && tx.amount < filter.minAmount) return false;
      if (filter.maxAmount && tx.amount > filter.maxAmount) return false;
      return true;
    });
  });

  readonly hasTransactions = computed(() => this.transactions().length > 0);
  readonly isFilterActive = computed(() => {
    const f = this.filterForm.value;
    return !!(f.search || f.status || f.type || f.dateFrom || f.dateTo || f.minAmount || f.maxAmount);
  });

  readonly statusOptions = [
    { value: '', label: 'Todos' },
    { value: 'pending', label: 'Pendiente' },
    { value: 'completed', label: 'Completado' },
    { value: 'failed', label: 'Fallido' },
    { value: 'cancelled', label: 'Cancelado' }
  ];

  readonly typeOptions = [
    { value: '', label: 'Todos' },
    { value: 'transfer', label: 'Transferencia' },
    { value: 'payment', label: 'Pago' },
    { value: 'deposit', label: 'Depósito' },
    { value: 'withdrawal', label: 'Retiro' }
  ];

  readonly displayedColumns = ['id', 'date', 'recipient', 'amount', 'type', 'status', 'actions'];

  constructor() {
    // Effect para logging de cambios en transacciones
    effect(() => {
      const count = this.transactions().length;
      console.log(`[TransactionList] Transacciones cargadas: ${count}`);
    });
  }

  ngOnInit(): void {
    this.loadTransactions();
    this.setupFilterSubscription();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setupFilterSubscription(): void {
    this.filterForm.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.currentPage.set(0);
        this.loadTransactions();
      });
  }

  loadTransactions(): void {
    this.loading.set(true);
    this.error.set(null);

    const filter: TransactionFilter = {
      page: this.currentPage(),
      size: this.pageSize(),
      sort: this.sortField(),
      order: this.sortDirection(),
      ...this.filterForm.value
    };

    this.dataService.getTransactions(filter)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.transactions.set(response.data || response.items || []);
          this.totalTransactions.set(response.total || response.count || 0);
          this.loading.set(false);
        },
        error: (err) => {
          this.handleError(err);
        }
      });
  }

  onPageChange(event: PageEvent): void {
    this.currentPage.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
    this.loadTransactions();
  }

  onSortChange(sort: Sort): void {
    if (!sort.active || sort.direction === '') {
      this.sortField.set('createdAt');
      this.sortDirection.set('desc');
    } else {
      this.sortField.set(sort.active);
      this.sortDirection.set(sort.direction as 'asc' | 'desc');
    }
    this.loadTransactions();
  }

  clearFilters(): void {
    this.filterForm.reset({
      search: '',
      status: '',
      type: '',
      dateFrom: '',
      dateTo: '',
      minAmount: null,
      maxAmount: null
    });
    this.currentPage.set(0);
    this.loadTransactions();
  }

  refreshData(): void {
    this.loadTransactions();
    this.notificationService.show('Datos actualizados', 'success');
  }

  viewTransactionDetails(id: string): void {
    console.log(`[TransactionList] Ver detalles de transacción: ${id}`);
  }

  private handleError(error: unknown): void {
    this.loading.set(false);
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido al cargar transacciones';
    this.error.set(errorMessage);
    
    this.snackBar.open(
      `Error: ${errorMessage}`,
      'Cerrar',
      { duration: 5000, horizontalPosition: 'end', verticalPosition: 'top' }
    );

    this.notificationService.show(errorMessage, 'error');
  }

  getStatusClass(status: string): string {
    const statusClasses: Record<string, string> = {
      'pending': 'status-pending',
      'completed': 'status-completed',
      'failed': 'status-failed',
      'cancelled': 'status-cancelled'
    };
    return statusClasses[status] || 'status-default';
  }

  getTypeLabel(type: string): string {
    const typeLabels: Record<string, string> = {
      'transfer': 'Transferencia',
      'payment': 'Pago',
      'deposit': 'Depósito',
      'withdrawal': 'Retiro'
    };
    return typeLabels[type] || type;
  }

  formatAmount(amount: number, currency: string = 'USD'): string {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: currency
    }).format(amount);
  }

  formatDate(date: string | Date): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(d);
  }

  trackByTransactionId(index: number, transaction: Transaction): string {
    return transaction.id;
  }
}

// === ARCHIVO: src/app/features/transaction-list/transaction-list.component.html ===
<div class="transaction-list-container">
  <header class="list-header">
    <h1 class="title">Transacciones</h1>
    <div class="header-actions">
      <button mat-raised-button color="primary" (click)="refreshData()" class="refresh-button">
        <mat-icon>refresh</mat-icon>
        Actualizar
      </button>
    </div>
  </header>

  <mat-card class="filter-card">
    <mat-card-content>
      <form [formGroup]="filterForm" class="filter-form">
        <div class="filter-row">
          <mat-form-field appearance="outline" class="search-field">
            <mat-label>Buscar</mat-label>
            <input matInput formControlName="search" placeholder="ID, descripción o beneficiario">
            <mat-icon matSuffix>search</mat-icon>
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>Estado</mat-label>
            <mat-select formControlName="status">
              @for (option of statusOptions; track option.value) {
                <mat-option [value]="option.value">{{ option.label }}</mat-option>
              }
            </mat-select>
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>Tipo</mat-label>
            <mat-select formControlName="type">
              @for (option of typeOptions; track option.value) {
                <mat-option [value]="option.value">{{ option.label }}</mat-option>
              }
            </mat-select>
          </mat-form-field>
        </div>

        <div class="filter-row">
          <mat-form-field appearance="outline">
            <mat-label>Desde fecha</mat-label>
            <input matInput type="date" formControlName="dateFrom">
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>Hasta fecha</mat-label>
            <input matInput type="date" formControlName="dateTo">
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>Monto mínimo</mat-label>
            <input matInput type="number" formControlName="minAmount" step="0.01">
            <span matTextPrefix>$&nbsp;</span>
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>Monto máximo</mat-label>
            <input matInput type="number" formControlName="maxAmount" step="0.01">
            <span matTextPrefix>$&nbsp;</span>
          </mat-form-field>
        </div>

        <div class="filter-actions">
          <button mat-stroked-button type="button" (click)="clearFilters()" [disabled]="!isFilterActive()">
            <mat-icon>clear</mat-icon>
            Limpiar filtros
          </button>
          @if (isFilterActive()) {
            <span class="filter-indicator">Filtros activos</span>
          }
        </div>
      </form>
    </mat-card-content>
  </mat-card>

  @if (loading()) {
    <div class="loading-container">
      <mat-spinner diameter="50"></mat-spinner>
      <p>Cargando transacciones...</p>
    </div>
  }

  @if (error()) {
    <mat-card class="error-card">
      <mat-card-content>
        <mat-icon color="warn">error</mat-icon>
        <p>{{ error() }}</p>
        <button mat-raised-button color="primary" (click)="loadTransactions()">
          Reintentar
        </button>
      </mat-card-content>
    </mat-card>
  }

  @if (!loading() && !error() && !hasTransactions()) {
    <mat-card class="empty-card">
      <mat-card-content>
        <mat-icon>inbox</mat-icon>
        <p>No se encontraron transacciones</p>
        @if (isFilterActive()) {
          <button mat-stroked-button (click)="clearFilters()">
            Limpiar filtros
          </button>
        }
      </mat-card-content>
    </mat-card>
  }

  @if (!loading() && !error() && hasTransactions()) {
    <div class="table-container">
      <table mat-table [dataSource]="filteredTransactions()" matSort (matSortChange)="onSortChange($event)" class="transactions-table">
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>ID</th>
          <td mat-cell *matCellDef="let tx">
            <span class="transaction-id">{{ tx.id | slice:0:8 }}...</span>
          </td>
        </ng-container>

        <ng-container matColumnDef="date">
          <th mat-header-cell *matHeaderCellDef mat-sort-header="createdAt">Fecha</th>
          <td mat-cell *matCellDef="let tx">{{ formatDate(tx.createdAt) }}</td>
        </ng-container>

        <ng-container matColumnDef="recipient">
          <th mat-header-cell *matHeaderCellDef>Beneficiario</th>
          <td mat-cell *matCellDef="let tx">
            <div class="recipient-cell">
              <span class="recipient-name">{{ tx.recipientName || 'N/A' }}</span>
              @if (tx.recipientAccount) {
                <span class="recipient-account">{{ tx.recipientAccount | slice:0:4 }}****</span>
              }
            </div>
          </td>
        </ng-container>

        <ng-container matColumnDef="amount">
          <th mat-header-cell *matHeaderCellDef mat-sort-header="amount">Monto</th>
          <td mat-cell *matCellDef="let tx">
            <span class="amount" [class.amount-negative]="tx.amount < 0">
              {{ formatAmount(tx.amount, tx.currency) }}
            </span>
          </td>
        </ng-container>

        <ng-container matColumnDef="type">
          <th mat-header-cell *matHeaderCellDef mat-sort-header="type">Tipo</th>
          <td mat-cell *matCellDef="let tx">
            <mat-chip [class]="'type-chip type-' + tx.type">
              {{ getTypeLabel(tx.type) }}
            </mat-chip>
          </td>
        </ng-container>

        <ng-container matColumnDef="status">
          <th mat-header-cell *matHeaderCellDef mat-sort-header="status">Estado</th>
          <td mat-cell *matCellDef="let tx">
            <span class="status-badge" [ngClass]="getStatusClass(tx.status)">
              {{ tx.status }}
            </span>
          </td>
        </ng-container>

        <ng-container matColumnDef="actions">
          <th mat-header-cell *matHeaderCellDef>Acciones</th>
          <td mat-cell *matCellDef="let tx">
            <button mat-icon-button 
                    [routerLink]="['/transactions', tx.id]" 
                    matTooltip="Ver detalles"
                    aria-label="Ver detalles de transacción">
              <mat-icon>visibility</mat-icon>
            </button>
            <button mat-icon-button 
                    (click)="viewTransactionDetails(tx.id)" 
                    matTooltip="Más opciones"
                    aria-label="Más opciones">
              <mat-icon>more_vert</mat-icon>
            </button>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;" 
            [class.row-highlight]="row.status === 'pending'"
            [attr.aria-label]="'Transacción ' + row.id"></tr>
      </table>

      <mat-paginator 
        [length]="totalTransactions()"
        [pageIndex]="currentPage()"
        [pageSize]="pageSize()"
        [pageSizeOptions]="[5, 10, 25, 50]"
        (page)="onPageChange($event)"
        aria-label="Paginación de transacciones">
      </mat-paginator>
    </div>
  }
</div>

// === ARCHIVO: src/app/features/transaction-list/transaction-list.component.scss ===
.transaction-list-container {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: var(--surface-color, #fafafa);
  min-height: calc(100vh - 64px);
}

.transaction-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  h1 {
    font-size: 28px;
    font-weight: 500;
    color: #1a1a1a;
    margin: 0;
  }
}

.transaction-filters {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
  align-items: center;

  .filter-field {
    min-width: 200px;
    flex: 1;
    max-width: 300px;
  }

  mat-form-field {
    width: 100%;
  }
}

.transaction-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
  margin-top: 16px;
}

.transaction-list-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 24px;
  color: #757575;

  mat-icon {
    font-size: 64px;
    width: 64px;
    height: 64px;
    margin-bottom: 16px;
    opacity: 0.5;
  }

  p {
    font-size: 16px;
    margin: 0;
    text-align: center;
  }
}

.transaction-list-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px 24px;

  mat-spinner {
    margin: 0 auto;
  }
}

.transaction-list-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px;
  background-color: #ffebee;
  border-radius: 8px;
  margin-bottom: 24px;

  .error-icon {
    color: #c62828;
    font-size: 48px;
    width: 48px;
    height: 48px;
    margin-bottom: 12px;
  }

  p {
    color: #c62828;
    margin: 0 0 16px 0;
    font-size: 14px;
  }

  button {
    background-color: #c62828;
    color: white;
  }
}

.transaction-paginator {
  display: flex;
  justify-content: center;
  margin-top: 32px;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.transaction-summary {
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .summary-item {
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: center;

    .label {
      font-size: 12px;
      color: #757575;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }

    .value {
      font-size: 24px;
      font-weight: 600;
      color: #1a1a1a;

      &.positive {
        color: #2e7d32;
      }

      &.negative {
        color: #c62828;
      }
    }
  }
}

.action-buttons {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;

  button {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}

@media (max-width: 768px) {
  .transaction-list-container {
    padding: 16px;
  }

  .transaction-list-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    h1 {
      font-size: 22px;
    }
  }

  .transaction-filters {
    flex-direction: column;

    .filter-field {
      max-width: 100%;
      min-width: auto;
    }
  }

  .transaction-grid {
    grid-template-columns: 1fr;
  }

  .transaction-summary {
    flex-direction: column;
    gap: 16px;
  }
}
"// === ARCHIVO: src/app/shared/components/transaction-card/transaction-card.component.ts ===
import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { Transaction } from '../../../core/models/transaction.model';

@Component({
  selector: 'app-transaction-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class TransactionCardComponent {
  @Input({ required: true }) transaction!: Transaction;
  @Input() showActions: boolean = true;
  @Input() highlighted: boolean = false;

  get formattedAmount(): string {
    const amount = this.transaction?.amount ?? 0;
    const currency = this.transaction?.currency ?? 'USD';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount);
  }

  get formattedDate(): string {
    if (!this.transaction?.createdAt) return '';
    const date = new Date(this.transaction.createdAt);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  }

  get statusClass(): string {
    const status = this.transaction?.status?.toLowerCase() ?? '';
    const statusMap: Record<string, string> = {
      'completed': 'status-completed',
      'pending': 'status-pending',
      'failed': 'status-failed',
      'cancelled': 'status-cancelled',
      'processing': 'status-processing'
    };
    return statusMap[status] || 'status-default';
  }

  get typeIcon(): string {
    const type = this.transaction?.type?.toLowerCase() ?? '';
    const iconMap: Record<string, string> = {
      'credit': 'arrow_downward',
      'debit': 'arrow_upward',
      'transfer': 'swap_horiz',
      'payment': 'payment',
      'refund': 'replay'
    };
    return iconMap[type] || 'account_balance';
  }

  get isCredit(): boolean {
    return this.transaction?.type?.toLowerCase() === 'credit';
  }

  get isDebit(): boolean {
    return this.transaction?.type?.toLowerCase() === 'debit';
  }

  onViewDetails(event: Event): void {
    event.stopPropagation();
    console.log('View details for transaction:', this.transaction?.id);
  }

  onEditTransaction(event: Event): void {
    event.stopPropagation();
    console.log('Edit transaction:', this.transaction?.id);
  }

  onDeleteTransaction(event: Event): void {
    event.stopPropagation();
    console.log('Delete transaction:', this.transaction?.id);
  }
}
"// === ARCHIVO: src/app/shared/components/transaction-card/transaction-card.component.html ===
<mat-card class="transaction-card" [class.highlighted]="highlighted">
  <mat-card-header>
    <div mat-card-avatar class="transaction-type-icon" [class.credit]="isCredit" [class.debit]="isDebit">
      <mat-icon>{{ typeIcon }}</mat-icon>
    </div>
    <mat-card-title>{{ transaction.description || 'Transacción' }}</mat-card-title>
    <mat-card-subtitle>{{ transaction.id }}</mat-card-subtitle>
  </mat-card-header>

  <mat-card-content>
    <div class="transaction-amount" [class.positive]="isCredit" [class.negative]="isDebit">
      <span class="amount-value">{{ formattedAmount }}</span>
      <span class="amount-type">{{ transaction.type }}</span>
    </div>

    <div class="transaction-details">
      <div class="detail-row">
        <span class="detail-label">Fecha</span>
        <span class="detail-value">{{ formattedDate }}</span>
      </div>
      <div class="detail-row" *ngIf="transaction.category">
        <span class="detail-label">Categoría</span>
        <span class="detail-value">{{ transaction.category }}</span>
      </div>
      <div class="detail-row" *ngIf="transaction.accountId">
        <span class="detail-label">Cuenta</span>
        <span class="detail-value">{{ transaction.accountId }}</span>
      </div>
      <div class="detail-row" *ngIf="transaction.merchantName">
        <span class="detail-label">Comercio</span>
        <span class="detail-value">{{ transaction.merchantName }}</span>
      </div>
    </div>

    <div class="transaction-status">
      <mat-chip-set>
        <mat-chip [class]="statusClass" [disabled]="false">
          {{ transaction.status }}
        </mat-chip>
      </mat-chip-set>
    </div>
  </mat-card-content>

  <mat-card-actions *ngIf="showActions">
    <button mat-button color="primary" (click)="onViewDetails($event)">
      <mat-icon>visibility</mat-icon>
      Ver Detalles
    </button>
    <button mat-button (click)="onEditTransaction($event)">
      <mat-icon>edit</mat-icon>
      Editar
    </button>
    <button mat-button color="warn" (click)="onDeleteTransaction($event)">
      <mat-icon>delete</mat-icon>
      Eliminar
    </button>
  </mat-card-actions>
</mat-card>


// === ARCHIVO: src/app/shared/components/transaction-card/transaction-card.component.scss ===
.transaction-card {
  background: var(--surface-color, #ffffff);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  border: 1px solid var(--border-color, #e0e0e0);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }

  &:focus {
    outline: 2px solid var(--primary-color, #3f51b5);
    outline-offset: 2px;
  }

  &.income {
    border-left: 4px solid var(--success-color, #4caf50);
    background: linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, transparent 50%);
  }

  &.expense {
    border-left: 4px solid var(--error-color, #f44336);
    background: linear-gradient(135deg, rgba(244, 67, 54, 0.05) 0%, transparent 50%);
  }

  &.pending {
    border-left: 4px solid var(--warning-color, #ff9800);
    background: linear-gradient(135deg, rgba(255, 152, 0, 0.05) 0%, transparent 50%);
  }

  &.highlighted {
    background: var(--highlight-bg, rgba(63, 81, 181, 0.08));
    border-color: var(--primary-color, #3f51b5);
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.merchant-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.merchant-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--icon-bg, #f5f5f5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: var(--text-secondary, #757575);
  font-size: 14px;
}

.merchant-details {
  display: flex;
  flex-direction: column;
}

.merchant-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary, #212121);
  margin: 0;
  line-height: 1.4;
}

.transaction-category {
  font-size: 12px;
  color: var(--text-secondary, #757575);
  margin-top: 2px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.amount-container {
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.amount {
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;

  &.positive {
    color: var(--success-color, #4caf50);
  }

  &.negative {
    color: var(--error-color, #f44336);
  }

  &.pending {
    color: var(--warning-color, #ff9800);
  }
}

.currency {
  font-size: 12px;
  font-weight: 400;
  color: var(--text-secondary, #757575);
  margin-left: 2px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--border-color, #e0e0e0);
}

.transaction-date {
  font-size: 12px;
  color: var(--text-secondary, #757575);
  display: flex;
  align-items: center;
  gap: 4px;
}

.status-badge {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.3px;

  &.completed {
    background: rgba(76, 175, 80, 0.15);
    color: var(--success-color, #4caf50);
  }

  &.pending {
    background: rgba(255, 152, 0, 0.15);
    color: var(--warning-color, #ff9800);
  }

  &.failed {
    background: rgba(244, 67, 54, 0.15);
    color: var(--error-color, #f44336);
  }
}

@media (max-width: 480px) {
  .transaction-card {
    padding: 12px;
    border-radius: 8px;
  }

  .merchant-icon {
    width: 36px;
    height: 36px;
    font-size: 12px;
  }

  .merchant-name {
    font-size: 14px;
  }

  .amount {
    font-size: 16px;
  }
}

// === ARCHIVO: src/app/features/transaction-detail/transaction-detail.component.ts ===
import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DataService } from '../../../core/services/data.service';
import { Transaction } from '../../../core/models/transaction.model';
import { HighlightDirective } from '../../../shared/directives/highlight.directive';

@Component({
  selector: 'app-transaction-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    HighlightDirective
  ],
  templateUrl: './transaction-detail.component.html',
  styleUrl: './transaction-detail.component.scss'
})
export class TransactionDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly dataService = inject(DataService);

  readonly transaction = signal<Transaction | null>(null);
  readonly isLoading = signal(true);
  readonly error = signal<string | null>(null);

  readonly transactionId = computed(() => {
    const id = this.route.snapshot.paramMap.get('id');
    return id ?? '';
  });

  readonly formattedAmount = computed(() => {
    const tx = this.transaction();
    if (!tx) return '';
    const prefix = tx.type === 'income' ? '+' : tx.type === 'expense' ? '-' : '';
    return `${prefix}$${tx.amount.toFixed(2)}`;
  });

  readonly amountClass = computed(() => {
    const tx = this.transaction();
    if (!tx) return '';
    return tx.type === 'income' ? 'positive' : tx.type === 'expense' ? 'negative' : 'pending';
  });

  readonly statusClass = computed(() => {
    const tx = this.transaction();
    if (!tx) return '';
    return tx.status.toLowerCase();
  });

  readonly isHighlighted = signal(false);

  ngOnInit(): void {
    this.loadTransaction();
  }

  private loadTransaction(): void {
    const id = this.transactionId();
    if (!id) {
      this.error.set('ID de transacción no proporcionado');
      this.isLoading.set(false);
      return;
    }

    this.isLoading.set(true);
    this.error.set(null);

    this.dataService.getTransactionById(id).subscribe({
      next: (tx) => {
        this.transaction.set(tx);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar la transacción. Por favor, intente de nuevo.');
        this.isLoading.set(false);
        console.error('Error cargando transacción:', err);
      }
    });
  }

  toggleHighlight(): void {
    this.isHighlighted.update(v => !v);
  }

  retry(): void {
    this.loadTransaction();
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  getCategoryIcon(category: string): string {
    const icons: Record<string, string> = {
      'food': 'restaurant',
      'transport': 'directions_car',
      'shopping': 'shopping_bag',
      'entertainment': 'movie',
      'utilities': 'bolt',
      'health': 'local_hospital',
      'travel': 'flight',
      'education': 'school',
      'salary': 'account_balance',
      'transfer': 'swap_horiz',
      'investment': 'trending_up',
      'other': 'receipt'
    };
    return icons[category.toLowerCase()] || 'receipt';
  }

  trackByFn(index: number, item: any): number {
    return item.id ?? index;
  }
}

// === ARCHIVO: src/app/features/transaction-detail/transaction-detail.component.html ===
<div class="detail-container" *ngIf="!isLoading() && !error(); else loadingOrError">
  <div class="detail-header">
    <a routerLink="/transactions" class="back-link">
      <mat-icon>arrow_back</mat-icon>
      Volver a transacciones
    </a>
    <h1 class="page-title">Detalles de Transacción</h1>
  </div>

  <mat-card class="transaction-detail-card" *ngIf="transaction() as tx" appHighlight [highlighted]="isHighlighted()">
    <mat-card-header>
      <div mat-card-avatar class="merchant-avatar" [class]="tx.type">
        <mat-icon>{{ getCategoryIcon(tx.category) }}</mat-icon>
      </div>
      <mat-card-title>{{ tx.merchantName || tx.description }}</mat-card-title>
      <mat-card-subtitle>{{ tx.category | titlecase }}</mat-card-subtitle>
    </mat-card-header>

    <mat-card-content>
      <div class="amount-section">
        <span class="amount" [class]="amountClass()">
          {{ formattedAmount() }}
        </span>
        <mat-chip [class]="statusClass() + '-chip'">
          {{ tx.status | titlecase }}
        </mat-chip>
      </div>

      <mat-divider></mat-divider>

      <div class="detail-grid">
        <div class="detail-item">
          <span class="label">ID de Transacción</span>
          <span class="value mono">{{ tx.id }}</span>
        </div>

        <div class="detail-item">
          <span class="label">Fecha de creación</span>
          <span class="value">{{ formatDate(tx.createdAt) }}</span>
        </div>

        <div class="detail-item" *ngIf="tx.updatedAt">
          <span class="label">Última actualización</span>
          <span class="value">{{ formatDate(tx.updatedAt) }}</span>
        </div>

        <div class="detail-item">
          <span class="label">Tipo de transacción</span>
          <span class="value">{{ tx.type | titlecase }}</span>
        </div>

        <div class="detail-item" *ngIf="tx.accountId">
          <span class="label">Cuenta</span>
          <span class="value mono">{{ tx.accountId }}</span>
        </div>

        <div class="detail-item" *ngIf="tx.reference">
          <span class="label">Referencia</span>
          <span class="value mono">{{ tx.reference }}</span>
        </div>

        <div class="detail-item" *ngIf="tx.notes">
          <span class="label">Notas</span>
          <span class="value">{{ tx.notes }}</span>
        </div>

        <div class="detail-item full-width" *ngIf="tx.metadata">
          <span class="label">Metadatos adicionales</span>
          <div class="metadata-container">
            <div class="metadata-item" *ngFor="let item of tx.metadata | keyvalue">
              <span class="meta-key">{{ item.key }}:</span>
              <span class="meta-value">{{ item.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </mat-card-content>

    <mat-card-actions align="end">
      <button mat-button color="primary" (click)="toggleHighlight()">
        <mat-icon>{{ isHighlighted() ? 'star' : 'star_border' }}</mat-icon>
        {{ isHighlighted() ? 'Quitar destacado' : 'Destacar' }}
      </button>
      <button mat-button>
        <mat-icon>share</mat-icon>
        Compartir
      </button>
      <button mat-button color="warn" *ngIf="tx.status === 'PENDING'">
        <mat-icon>cancel</mat-icon>
        Cancelar
      </button>
    </mat-card-actions>
  </mat-card>
</div>

<ng-template #loadingOrError>
  <div class="state-container">
    <mat-spinner *ngIf="isLoading()" diameter="48"></mat-spinner>
    
    <div class="error-state" *ngIf="error() as err">
      <mat-icon class="error-icon">error_outline</mat-icon>
      <p class="error-message">{{ err }}</p>
      <button mat-raised-button color="primary" (click)="retry()">
        <mat-icon>refresh</mat-icon>
        Reintentar
      </button>
      <a mat-button routerLink="/transactions">
        Volver al listado
      </a>
    </div>
  </div>
</ng-template>


// === ARCHIVO: src/app/features/transaction-detail/transaction-detail.component.scss ===
.transaction-detail-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
  background-color: var(--surface-color, #ffffff);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.transaction-detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border-color, #e0e0e0);

  h1 {
    font-size: 24px;
    font-weight: 600;
    color: var(--text-primary, #212121);
    margin: 0;
  }

  .back-button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background-color: var(--primary-color, #1976d2);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: var(--primary-hover, #1565c0);
    }

    &:active {
      background-color: var(--primary-active, #0d47a1);
    }
  }
}

.transaction-detail-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.detail-section {
  background-color: var(--section-bg, #f5f5f5);
  border-radius: 6px;
  padding: 20px;

  h2 {
    font-size: 18px;
    font-weight: 600;
    color: var(--text-primary, #212121);
    margin: 0 0 16px 0;
  }
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 4px;

  .label {
    font-size: 12px;
    font-weight: 500;
    color: var(--text-secondary, #757575);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .value {
    font-size: 16px;
    font-weight: 400;
    color: var(--text-primary, #212121);
  }

  &.amount .value {
    font-size: 24px;
    font-weight: 700;
    color: var(--success-color, #2e7d32);
  }

  &.amount.negative .value {
    color: var(--error-color, #c62828);
  }

  &.status {
    .value {
      display: inline-flex;
      align-items: center;
      padding: 4px 12px;
      border-radius: 16px;
      font-size: 14px;
      font-weight: 500;
    }

    &.completed .value {
      background-color: rgba(46, 125, 50, 0.1);
      color: var(--success-color, #2e7d32);
    }

    &.pending .value {
      background-color: rgba(255, 152, 0, 0.1);
      color: var(--warning-color, #f57c00);
    }

    &.failed .value {
      background-color: rgba(198, 40, 40, 0.1);
      color: var(--error-color, #c62828);
    }
  }
}

.transaction-description {
  margin-top: 16px;
  padding: 16px;
  background-color: var(--surface-color, #ffffff);
  border-radius: 4px;
  border-left: 4px solid var(--primary-color, #1976d2);

  p {
    margin: 0;
    font-size: 14px;
    line-height: 1.6;
    color: var(--text-primary, #212121);
  }
}

.loading-state,
.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;

  .message {
    font-size: 16px;
    color: var(--text-secondary, #757575);
    margin-top: 16px;
  }
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--border-color, #e0e0e0);
  border-top-color: var(--primary-color, #1976d2);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 600px) {
  .transaction-detail-container {
    padding: 16px;
    border-radius: 0;
  }

  .transaction-detail-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    h1 {
      font-size: 20px;
    }

    .back-button {
      width: 100%;
      justify-content: center;
    }
  }

  .detail-grid {
    grid-template-columns: 1fr;
  }

  .detail-item.amount .value {
    font-size: 20px;
  }
}
"// === ARCHIVO: src/app/shared/directives/highlight.directive.ts ===
import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit, OnDestroy {
  @Input() appHighlight: string = 'yellow';
  @Input() highlightDuration: number = 0;
  @Input() highlightEnabled: boolean = true;

  private originalBackground: string = '';
  private intervalId: any;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.highlightEnabled) {
      this.applyHighlight();
      this.startAnimation();
    }
  }

  ngOnDestroy() {
    this.clearHighlight();
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private applyHighlight() {
    this.originalBackground = this.el.nativeElement.style.backgroundColor;
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
    this.el.nativeElement.style.transition = 'background-color 0.3s ease';
  }

  private clearHighlight() {
    if (this.originalBackground) {
      this.el.nativeElement.style.backgroundColor = this.originalBackground;
    } else {
      this.el.nativeElement.style.backgroundColor = '';
    }
  }

  private startAnimation() {
    if (this.highlightDuration > 0) {
      let blinks = 0;
      const maxBlinks = this.highlightDuration / 500;

      this.intervalId = setInterval(() => {
        const current = this.el.nativeElement.style.backgroundColor;
        this.el.nativeElement.style.backgroundColor =
          current === this.appHighlight ? 'transparent' : this.appHighlight;
        blinks++;
        if (blinks >= maxBlinks) {
          clearInterval(this.intervalId);
          this.clearHighlight();
        }
      }, 500);
    }
  }

  @Input() set highlightColor(color: string) {
    this.appHighlight = color;
    if (this.highlightEnabled) {
      this.el.nativeElement.style.backgroundColor = color;
    }
  }

  public highlight() {
    this.applyHighlight();
  }

  public unhighlight() {
    this.clearHighlight();
  }

  public toggle() {
    const current = this.el.nativeElement.style.backgroundColor;
    if (current && current !== 'transparent' && current !== '') {
      this.unhighlight();
    } else {
      this.highlight();
    }
  }
}
"// === ARCHIVO: src/app/app.routes.ts ===
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'transactions',
    pathMatch: 'full'
  },
  {
    path: 'transactions',
    loadComponent: () =>
      import('./features/transaction-list/transaction-list.component').then(
        m => m.TransactionListComponent
      ),
    title: 'Transacciones - Fintech'
  },
  {
    path: 'transactions/:id',
    loadComponent: () =>
      import('./features/transaction-detail/transaction-detail.component').then(
        m => m.TransactionDetailComponent
      ),
    title: 'Detalle de Transacción - Fintech'
  },
  {
    path: '**',
    redirectTo: 'transactions'
  }
];


// === ARCHIVO: README.md ===
# Fintech Frontend

Aplicación frontend desarrollada con Angular 20 para la gestión de transacciones financieras. Este proyecto forma parte del flujo de trabajo de revisión de código del equipo de desarrollo.

## Descripción

Plataforma de gestión de transacciones que permite listar, visualizar detalles y manipular datos de transacciones financieras. La aplicación implementa patrones modernos de Angular como standalone components, Signals y arquitectura basada en componentes contenedores y presentacionales.

## Requisitos previos

- Node.js versión 18.x o superior
- npm versión 9.x o superior
- Angular CLI versión 20.2.0

## Instalación

```bash
npm install
```

Este comando instalará todas las dependencias definidas en el archivo `package.json`.

## Ejecución del proyecto

### Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm start
```

El servidor estará disponible en `http://localhost:4200`. La aplicación se recargará automáticamente si realizas cambios en los archivos fuente.

### Producción

Para construir la aplicación para producción:

```bash
npm run build
```

Los archivos generados se almacenarán en el directorio `dist/fintech-frontend`.

### Modo watch

Para construir en modo watch con desarrollo:

```bash
npm run watch
```

## Testing

### Tests unitarios

```bash
npm test
```

Ejecuta las pruebas unitarias con Karma y Jasmine. La configuración de pruebas se encuentra en `karma.conf.js`.

### Coverage

Para generar informe de coverage, los archivos de configuración necesarios deben estar configurados apropiadamente.

## Estructura del proyecto

```
src/
├── app/
│   ├── core/
│   │   ├── models/          # Modelos y tipos del dominio
│   │   │   └── transaction.model.ts
│   │   └── services/        # Servicios de datos y lógica de negocio
│   │       └── data.service.ts
│   ├── features/
│   │   ├── transaction-list/    # Componente contenedor de lista
│   │   └── transaction-detail/  # Componente contenedor de detalles
│   ├── shared/
│   │   ├── components/      # Componentes presentacionales reutilizables
│   │   │   └── transaction-card/
│   │   └── directivas/      # Directivas personalizadas
│   │       └── highlight.directive.ts
│   ├── app.config.ts        # Configuración de providers
│   ├── app.routes.ts        # Definición de rutas
│   └── app.component.ts     # Componente raíz
├── environments/            # Configuraciones por entorno
├── styles.scss              # Estilos globales
├── main.ts                  # Punto de entrada
└── index.html               # HTML raíz
```

## Arquitectura

El proyecto sigue una arquitectura de capas estándar de Angular:

- **Core**: Modelos de dominio y servicios singleton que contienen la lógica de negocio
- **Features**: Componentes contenedores que orquestan el flujo de datos y la interacción con servicios
- **Shared**: Componentes presentacionales reutilizables y directivas

### Componentes contenedores vs presentacionales

Los componentes en `features/` actúan como contenedores, управляя el estado y la interacción con servicios. Los componentes en `shared/components/` son presentacionales, recibiendo datos mediante @Input() y emitiendo eventos mediante @Output().

## Tecnologías utilizadas

- Angular 20.2.0
- TypeScript 5.4.2
- Angular Material 20.2.0
- Angular CDK 20.2.0
- RxJS 7.8.0
- SCSS para estilos

## Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run watch` | Construye en modo watch para desarrollo |
| `npm test` | Ejecuta las pruebas unitarias |
| `npm run lint` | Ejecuta el linter |

## Configuración de entorno

El proyecto utiliza archivos de entorno para gestionar configuraciones:

- `src/environments/environment.ts`: Configuración de desarrollo
- `src/environments/environment.prod.ts`: Configuración de producción

## Contribución

Para contribuir al proyecto, asegúrate de:

1. Seguir las convenciones de código establecidas
2. Mantener los estilos encapsulados por componente
3. Utilizar TypeScript estricto
4. Escribir pruebas para nueva funcionalidad
5. Verificar que el código compila antes de realizar commits

## Recursos adicionales

- [Documentación oficial de Angular](https://angular.dev/)
- [Angular Material](https://material.angular.io/)
- [TypeScript](https://www.typescriptlang.org/)

```
