# budgetkey-ng2-components

This library contains a set of Angular 2 components and assets for building all
OpenBudget applications with a common look and feel.

## Quickstart

Install library with `npm install --save budgetkey-n2-components`.

TypeScript and Less sources are available in `src` folder, precompiled sources 
and stylesheets are in `lib` folder. All necessary assets (images, fonts, etc.) 
are available in `assets` folder.

### Adding styles and assets

Include all stylesheets from `lib/styles` into your HTML page (preferred) 
or add them as `styleUrls` to your component. Also, do not forget to put 
`assets` folder in some place accessible with browser (actual place depends on
location of stylesheets).

If you want to customize stylesheets, or use predefined variables, you can find 
the Less sources in the `sources/styles` folder. Just `@import` files that you 
need and do everything you want with it. 

### Using library components

In your application, import and provide library's module:
```javascript
import { BudgetKeyCommonModule } from 'budgetkey-ng2-components';

@NgModule({
  imports: [
    BudgetKeyCommonModule,
    // other imports
  ],
  // other declarations
})
class AppModule {
} 
``` 

Then wrap all your application with `<budgetkey-container>`:
```javascript
@Component({
  ...
  template: `
    <budgetkey-container>
      Hello, World!
    </budgetkey-container>
  `
  ...
})
class AppComponent {  
}
```

The `<budgetkey-container>` component also has two optional parameters:
- `showHeader` (defaults to `True`) - show/hide default header, and
- `showFooter` (defaults to `True`) - show/hide default footer.

Example:
```html
<budgetkey-container [showHeader]="false" [showFooter]="false">
  Your template here
</budgetkey-container>
```

## Development and contributing

If you have an issue using this library and don't know how to solve it - 
[let us know](https://github.com/OpenBudget/budgetkey-ng2-components/issues), 
and we will try to help you. 

If you want to help us to improve the library, fix the bug or add new features - 
you are welcome! To implement the conceived, follow this simple instruction:

- clone repository with `git clone git@github.com:OpenBudget/budgetkey-ng2-components.git` or
`git clone https://github.com/OpenBudget/budgetkey-ng2-components.git` 
(you may need to fork it first).
- write some code :smiley:
- use `npm start` to run local server - this will allow you to test your changes easily
without necessity to create a project for testing (you are free to edit files in
the `app` folder if needed).
By default, dev server is running on the port `:4000`, but you can change it using 
environment variable: `PORT=8080 npm start` will start dev server on the port `:8080`.
- once you're happy with your code - push it to GitHub and create a 
[pull request](https://github.com/OpenBudget/budgetkey-ng2-components/pulls). 

If you want to test your changes with some external project - assuming you have the following directory structure:

* `budgetkey-ng2-components/`
  * directory containing a copy of the budgetkey-ng2-components project
* `budgetkey-app-example/`
  * directory containing the budgetkey app you want to test with

Run the following from your app's directory:

```
pushd ../budgetkey-ng2-components && npm run prepublish && popd && npm install ../budgetkey-ng2-components/
```

App is now integrated with the local copy of budgetkey-ng2-components.

Pay attention that if you make changes to budgetkey-ng2-components you should run the above code again.


## Customizable styles / configurations

The components support customization to allow reusability.

An example app - `app-proure` demonstrates this functionality, to run it locally (on a different port then regular app):

`PORT=4001 npm run start-procure`

The customized site is available at http://localhost:4001/
