// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
class Environment {

  getEnviromentsConfig(){
    let env = {
      uri_api : '',
      clientId : '9c3391ce-a5c4-4feb-af81-7d69202faa9e',
      production: false,
    };

    let test = window.location.origin;
    if(test.includes('localhost')){
      env.uri_api = 'https://localhost:44358/api/';
    }

    return env;
  }
}

export const environment = new Environment().getEnviromentsConfig();
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
