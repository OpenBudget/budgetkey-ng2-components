import { Injectable } from '@angular/core'
import * as BudgetKeyTheme from '../themes/BudgetKey.json';
import * as OpenProcurementTheme from '../themes/OpenProcurement.json';
declare const process: any;


@Injectable()
export class ThemeService {
    public constructor() {
        if (process.env.BUDGETKEY_THEME == 'OpenProcurement') {
            this.theme = OpenProcurementTheme;
        } else {
            this.theme = BudgetKeyTheme;
        }
    }

    public theme: object;

    public get siteName() {return this.theme["siteName"];};
}
