export function notNullFilter<T>(value: T | null | undefined): value is T {
    return value != null
}

export function getEnvironmentVariable(name: string, fallback?: string): string {
    if (name in process.env === false) {
        if (fallback != null) return fallback;

        throw new Error(`The .env value of ${name} was not found`);
    }

    return process.env[name] ?? '';
}
