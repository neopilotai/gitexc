declare module '@babel/core' {
  interface ConfigAPI {
    cache: {
      using: (callback: () => string | undefined) => void;
    };
  }

  interface PresetObject {
    (api: ConfigAPI, options?: Record<string, unknown>): {
      presets?: any[];
      plugins?: any[];
      sourceMaps?: boolean;
      retainLines?: boolean;
    };
  }

  const preset: PresetObject;
  export = preset;
}
