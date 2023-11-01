declare module 'fs-extra' {
    export function copy(src: string, dest: string): Promise<void>;
}
