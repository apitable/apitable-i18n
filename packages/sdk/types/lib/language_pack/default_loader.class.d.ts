import { ILanguagePack, ILanguagePacks } from './packs.interface';
import { ILanguagePackerLoader } from './loader.interface';
/**
 * Default Language Packer loader, just pass the JSON data to constructor
 *
 * You can custom the loader by implements ILanguagePackerLoader.
 *
 * Example Use case: dynamic load to reduce the download size.
 *
 */
export declare class DefaultLanguagePackLoader implements ILanguagePackerLoader {
    private _languagePacks;
    constructor(langPacks: ILanguagePacks);
    load(lang: string): ILanguagePack;
}
