import * as React from 'react';
import { ReactElement } from 'react';
export declare const PreferencesEditorContext: React.Context<PreferencesEditorContextValue>;
export declare type PreferencesEditorContextValue = {
    editor: ReactElement | null;
    setEditor: React.Dispatch<React.SetStateAction<ReactElement>>;
    preferenceKey?: string;
    setPreferenceKey: React.Dispatch<React.SetStateAction<string>>;
    title: string | null;
    titleOptions?: any;
    setTitle: (title: string, titleOptions?: any) => void;
    isEnabled: boolean;
    enable: () => void;
    disable: () => void;
    path: string | null;
    setPath: (path: string) => void;
};
//# sourceMappingURL=PreferencesEditorContext.d.ts.map