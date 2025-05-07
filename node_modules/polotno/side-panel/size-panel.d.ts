/// <reference types="react" />
import { StoreType } from '../model/store';
export declare const DEFAULT_SIZES: Array<[string, number, number, any]>;
export declare const SizePanel: (({ store }: {
    store: StoreType;
}) => JSX.Element) & {
    displayName: string;
};
