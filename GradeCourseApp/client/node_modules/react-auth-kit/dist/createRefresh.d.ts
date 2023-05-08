import { createRefreshParamInterface } from './types';
/**
 * This function doesn't really "do anything" at runtime,
 * it's just help to organize the code base
 * Use this function to create the refresh token system
 */
declare function createRefresh(param: createRefreshParamInterface): createRefreshParamInterface;
export default createRefresh;
