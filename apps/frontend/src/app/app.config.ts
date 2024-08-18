import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideHttpClient} from '@angular/common/http';
import {environment} from "../environments/environment";
import {BASE_PATH} from "./generated/openapi";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideHttpClient(),
    {provide: BASE_PATH, useValue: environment.baseUrl}
  ],
};
