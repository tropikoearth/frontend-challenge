declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MAPBOX_TOKEN: string;
      NODE_ENV: "development" | "production";
    }
  }
}

export {};
