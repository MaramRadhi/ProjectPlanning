import { AuthKitStateInterface } from '../types';
/**
  *@function
  *@name isAuthenticated
  *@description A utility function to check
  * weather the auth state is justified as athenticated
  * or not
  *
  * It checks if the state in null or not,
  * It the state is not NULL, it checks the expires time.
  */
declare function isAuthenticated(auth: AuthKitStateInterface): boolean;
export { isAuthenticated };
