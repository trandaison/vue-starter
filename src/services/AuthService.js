import Cookies from 'js-cookie';

export default class AuthService {
  static cridentials() {
    return JSON.parse(Cookies.get('auth') || null);
  }

  static clearCridentials() {
    Cookies.remove('auth');
  }

  static storeCridentials(auth) {
    Cookies.set('auth', JSON.stringify(auth));
  }

  static isLoggedIn = () => !!this.cridentials()

  static doLogin() {
    return new Promise((resolve) => {
      // we simulate the async request with timeout.
      setTimeout(() => {
        const cridentials = {
          accessToken: 'an-awesome-token-from-ajax-api',
          refreshToken: 'a-refresh-token',
          accessTokenExpDate: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes from then
        };
        resolve(cridentials);
      }, 1000);
    });
  }
}
