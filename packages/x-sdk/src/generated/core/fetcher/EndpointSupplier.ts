// @generated
// fingerprint: sha256:5d1dcf7dcc5bb3cc4e9215726ab337a7bfa7a77f8a981c95e3127714064a70ff
// DO NOT EDIT: generated file; changes will be overwritten.
import type { EndpointMetadata } from "./EndpointMetadata.js";
import type { Supplier } from "./Supplier.js";

type EndpointSupplierFn<T> = (arg: { endpointMetadata?: EndpointMetadata }) => T | Promise<T>;
export type EndpointSupplier<T> = Supplier<T> | EndpointSupplierFn<T>;
export const EndpointSupplier = {
    get: async <T>(supplier: EndpointSupplier<T>, arg: { endpointMetadata?: EndpointMetadata }): Promise<T> => {
        if (typeof supplier === "function") {
            return (supplier as EndpointSupplierFn<T>)(arg);
        } else {
            return supplier;
        }
    },
};
