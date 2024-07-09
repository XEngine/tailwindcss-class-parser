export class PluginNotFoundException extends Error {
    constructor(base: string) {
        super(`Unable to identify the plugin based on ${base}. This could be due to a misspelling, an invalid plugin, or the plugin is not yet included in the supported plugins list.`);
        this.name = 'PluginNotFoundException';
    }
}