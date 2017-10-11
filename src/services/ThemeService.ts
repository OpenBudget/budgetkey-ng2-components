import { Injectable } from '@angular/core'
declare const process: any;


@Injectable()
export class ThemeService {
    public constructor() {
        // TODO: load themes from json files
        // I couldn't get it to work properly so that files are accessible from external app
        if (process.env.BUDGETKEY_THEME == 'OpenProcurement') {
            this.theme = {
                "siteName": "רכש פתוח"
            }
        } else {
            this.theme = {
                "siteName": "מפתח התקציב"
            }
        }
    }

    public theme: object;

    public get siteName() {return this.theme["siteName"];};
}
