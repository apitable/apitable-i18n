import { ILanguagePacks } from './language_pack/packs.interface';
import { ILanguagePackerLoader } from './language_pack/loader.interface';
export declare class I18N {
    private _langPackLoader;
    private _language;
    /**
     * I18N factory that create a I18N object with static languages packs json data.
     *
     * @param langPkgs
     * @param defaultLang
     * @returns
     */
    static createByLanguagePacks(langPkgs: ILanguagePacks, defaultLang?: string): I18N;
    static createByLoader(loader: ILanguagePackerLoader, defaultLang?: string): I18N;
    private constructor();
    /**
     * set current language
     *
     * @param language
     */
    setLanguage(language: string): void;
    /**
     * get current language
     */
    get language(): string;
    /**
    * multi-language get, pass key as arguments
    * @param stringKey map the language pack json data
    * @param options JavaScript Object,  support string format, support lodash _.template
    * @example i18n.getText('early_bird')
    */
    getText(stringKey: string, options?: any, isPlural?: boolean): string;
    private plural;
}
