export class UnmatchedValueException extends Error {
    constructor(plugin: string, value: string) {
        super(`Found a matched plugin \`${plugin}\`, but the value \`${value}\` could not matched. This could be due to a misspelling or the given value is not covered by tailwind.config file.`);
        this.name = 'PluginNotFoundException';
    }
}