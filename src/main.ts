import { bootstrap }      from '@angular/platform-browser-dynamic'
import { enableProdMode } from '@angular/core'
import { HTTP_PROVIDERS } from '@angular/http'
import {disableDeprecatedForms, provideForms} from '@angular/forms'

import { AppComponent, environment, APP_ROUTER_PROVIDERS }  from './app'

import { AuthService } from './app/auth.service/index'

if (environment.production) {
  enableProdMode()
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS
  , APP_ROUTER_PROVIDERS
  , AuthService
  , disableDeprecatedForms()
  , provideForms()
])
.catch(err => console.error(err))
