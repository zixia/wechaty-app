import {
  Injectable
  , OnInit
  , OnDestroy
} from '@angular/core'
import { User } from '../shared/user'

@Injectable()
export class AuthService implements OnInit, OnDestroy {
  private authStatus = false

  private token: string
  private user: User

  constructor() {
    console.log('AuthService.constructor()')
  }

  ngOnInit() {
    console.log('AuthService.ngOnInit()')
  }

  ngOnDestroy() {
    console.log('AuthService.ngOnDestroy()')
  }

  authed() { return this.authStatus }

  auth(username: string, password: string): boolean {
    this.authStatus = false

    if (password) {
      if (username === 'zixia') {
        this.authStatus = true
      }
    } else {
      const token = username
      if (token === 'wechaty') {
        this.authStatus = true
      }
    }
    return this.authStatus
  }

  setToken(token:string): string {
    return this.token = token
  }

  getToken() {
    return this.token
  }

  logout() {
    this.authStatus = false
    this.token = ''
    this.user = null
    console.log('authService.logout()')
  }
}
