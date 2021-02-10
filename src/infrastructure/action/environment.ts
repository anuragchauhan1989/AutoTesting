export interface Envrionment {
  createSite: (_: {
    siteId: number;
    admin: string;
    modules: string[];
    features: string[];
  }) => Promise<object>;
  createAgent: (_: {
    name: string;
    isAdmin: boolean;
    permission: string[];
  }) => Promise<object>;
  createEntity: (name: string) => object;
  login: (_: { email: string; password: string }) => string;
}
