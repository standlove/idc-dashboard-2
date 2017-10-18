# IDCDASHBOARD

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## File Stucture 
TS
`src/app/components` contail all the components of the project
`src/app/services` contail all the services of the project
`src/app/pipes` contail all the pipes of the project

SCSS
`src/scss` folder contains all the scss fies
_base.scss - this contins all the common custom styles 
_ui-components.scss - this contins all the components related styles
_fonts.scss - this contains all the scss files
bootstrap.scss - this has imported all the boootstrap files
_variables.scss - this contains all the scss variables

Fonts
`src/assets/fonts` contain all the fonts files

Images
`src/assets/images` contain all the images and icons

## Sample data
 All the data related to the UI is fetching from json files located in `src/assets/data` folder.
 `plant.json`              
    plant related data for map view 
 `decisiontree.json`  
    Decision tree data
 `miq.json` 
    MIQ view data               
 `notification.json`  
    Alerts and notification data     
 `processmining.json`
    Process mining data
This will easy to intregrate with the server without changing much of the front end code.
`src/services/app-data.services.ts` has implementsd data loading functions

Firstly focus on the required functionality of the system and then styling. With the time line it was not able to finalize.
I've used font-awsome icons for all untill icons get. 

## 3rd party modules
For the map https://angular-maps.com
For graps https://valor-software.com/ng2-charts/
Graph can customize as the given prototype but could not make it with the time
https://ng-bootstrap.github.io/#/home


