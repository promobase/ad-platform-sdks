// @generated
// fingerprint: sha256:9f707ab37ae9e6b5ecc4d5b663c7e00f868ce2911a9ecaef6b0b2bb3c2f24826
// DO NOT EDIT: generated file; changes will be overwritten.
export function encodePathParam(param: unknown): string {
    if (param === null) {
        return "null";
    }
    const typeofParam = typeof param;
    switch (typeofParam) {
        case "undefined":
            return "undefined";
        case "string":
        case "number":
        case "boolean":
            break;
        default:
            param = String(param);
            break;
    }
    return encodeURIComponent(param as string | number | boolean);
}
