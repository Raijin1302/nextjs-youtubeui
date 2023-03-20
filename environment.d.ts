declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GOOGLE_CLIENT_ID: string; // this is the line you want
      NODE_ENV: "development" | "production";
      API_KEY?: string | undefined;
      BASE_URL?: string | undefined;
    }
  }
}

export {};
