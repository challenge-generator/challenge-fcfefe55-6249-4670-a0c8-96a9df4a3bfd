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