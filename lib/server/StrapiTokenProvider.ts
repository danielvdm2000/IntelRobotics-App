interface Token {
    jwt: string;
}

interface TokenProviderConfig {
    baseUrl: string;
    identifier: string;
    password: string;
    tokenLifetimeMs: number;
}

class StrapiTokenProvider {
    private baseUrl: string;
    private identifier: string;
    private password: string;
    private tokenLifetimeMs: number;
    private token: Token | undefined;
    private tokenRequestTime: Date | undefined;

    constructor(config: TokenProviderConfig) {
        this.baseUrl = config.baseUrl;
        this.identifier = config.identifier;
        this.password = config.password;
        this.tokenLifetimeMs = config.tokenLifetimeMs;
        this.token = undefined;
        this.tokenRequestTime = undefined;
    }

    public async getToken(): Promise<string> {
        const isExpired = this.tokenIsExpired();

        if (this.token == undefined || isExpired) {
            this.token = await this.fetchToken();
            this.tokenRequestTime = new Date;
        }

        return this.token.jwt;
    }

    private tokenIsExpired(): boolean {
        if (this.tokenRequestTime == undefined) {
            return true;
        }

        const now = Date.now();
        const lastRequest = this.tokenRequestTime.getTime();
        const hasExpired = lastRequest + this.tokenLifetimeMs < now;

        return hasExpired;
    }

    private async fetchToken(): Promise<Token> {
        const response = await fetch(`${this.baseUrl}/auth/local`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                identifier: this.identifier,
                password: this.password,
            }),
        });

        const data = await response.json();

        return data;
    }
}

export default StrapiTokenProvider;