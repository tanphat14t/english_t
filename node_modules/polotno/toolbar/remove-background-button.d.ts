/// <reference types="react" />
export declare function setRemoveBackgroundFunc(func: any): void;
export declare const RemoveBackgroundDialog: (({ isOpen, onClose, element, }: {
    isOpen: boolean;
    onClose: () => void;
    element: any;
}) => JSX.Element) & {
    displayName: string;
};
export declare const RemoveBackgroundButton: ({ element }: {
    element: any;
}) => JSX.Element;
