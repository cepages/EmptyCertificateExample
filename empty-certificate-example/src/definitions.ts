declare module "@capacitor/core" {
  interface PluginRegistry {
    EmptyCertificateExample: EmptyCertificateExamplePlugin;
  }
}

export interface EmptyCertificateExamplePlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
