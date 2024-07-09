export class IncorrectValueTypeException extends Error {
    constructor(matchedPluginNamespace: string, type: string) {
        super(`The specified type is not valid for the matched plugins: ${matchedPluginNamespace}. Please ensure the type ${type || "undefined"} is one of the supported types for the plugins.`);
        this.name = 'PluginNotFoundException';
    }
}