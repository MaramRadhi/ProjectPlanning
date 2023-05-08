/// <reference types="react" />
/**
 * This is a storybook decorator that wrap the story inside a fake browser.
 * It features an editable address bar with back and forward buttons.
 *
 * @example Usage in a storybook
 * export default {
 *     title: 'ra-core/Admin/CustomRoutes/Authenticated',
 *     decorators: [FakeBrowserDecorator],
 *     parameters: {
 *         // You can pass the react-router history initial entries like this
 *         initialEntries: ['/authenticated'],
 *     },
 * };
 *
 * const MyStory = (args, context) => (
 *     // Don't forget to pass the history to the Admin component so that
 *     // user changes from the fake browser address bar can impact the application
 *     <Admin history={context.history}>
 *     </Admin>
 * );
 */
export declare const FakeBrowserDecorator: (Story: any, context: any) => JSX.Element;
//# sourceMappingURL=FakeBrowser.d.ts.map