// @generated
// fingerprint: sha256:810005d967503b21bd906d61329499b22c06db57ab2ce42ff3f0527432d87ace
// DO NOT EDIT: generated file; changes will be overwritten.
export type Supplier<T> = T | Promise<T> | (() => T | Promise<T>);

export const Supplier = {
    get: async <T>(supplier: Supplier<T>): Promise<T> => {
        if (typeof supplier === "function") {
            return (supplier as () => T)();
        } else {
            return supplier;
        }
    },
};
