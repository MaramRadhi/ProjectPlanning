/**
 * Internal hook used to handle mutation middlewares.
 *
 * @example
 * // We have a form creating an order for a new customer.
 * // The form contains the customer fields in addition to the order fields
 * // but they should be saved as a new customer resource record
 * // and the order should only reference this new customer
 * type Order = { id: string; reference: string };
 * type OrderCreateFormData = { id: string; reference: string; customer: Customer };
 * type Customer = { id: string; email: string; firstName: string; lastName: string };
 *
 * const CustomerForm = props => {
 *     const [createCustomer] = useCreate<Customer>();
 *     const middleware: Middleware<UseCreateResult<OrderCreateFormData>[0]> = useCallback(async (resource, params, options, next) => {
 *         const { data } = params;
 *         const { user, ...orderData } = data;
 *         await createCustomer(
 *             'customers',
 *             { data: user },
 *             {
 *                 onSuccess: (newCustomer) => {
 *                     const orderDataWithCustomer = { ...orderData, customerId: newCustomer.id };
 *                     next(resource, { data: orderDataWithCustomer }, options);
 *                 },
 *             }
 *         });
 *     }, [createCustomer]);
 *     useRegisterMutationMiddleware(middleware);
 *
 *     return (
 *         <>
 *             <TextInput source="user.email" />
 *             <TextInput source="user.firstName" />
 *             <TextInput source="user.lastName" />
 *         </>
 *     );
 * }
 */
export declare const useMutationMiddlewares: <MutateFunc extends (...args: any[]) => any = (...args: any[]) => any>() => UseMutationMiddlewaresResult<MutateFunc>;
export interface UseMutationMiddlewaresResult<MutateFunc extends (...args: any[]) => any = (...args: any[]) => any> {
    registerMutationMiddleware: (callback: Middleware<MutateFunc>) => void;
    getMutateWithMiddlewares: (mutate: MutateFunc) => (...args: Parameters<MutateFunc>) => ReturnType<MutateFunc>;
    unregisterMutationMiddleware: (callback: Middleware<MutateFunc>) => void;
}
export declare type Middleware<MutateFunc> = MutateFunc extends (...a: any[]) => infer R ? (...a: [...U: Parameters<MutateFunc>, next: MutateFunc]) => R : never;
//# sourceMappingURL=useMutationMiddlewares.d.ts.map