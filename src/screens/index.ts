export * from './Player';
export { default as LandingScreen } from './Landing';
export { default as LoginScreen } from './Login';
export { default as SignupScreen } from './Signup';
export * from './Role';

export const pageList = ['/login', '/signup', '/role', '/player'];
export const backPaths = {
  '/login': '/',
  '/signup': '/login',
  '/role': '/',
  '/player': '/role',
  '/master': '/role'
};
