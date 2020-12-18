class Environment {

  getEnviromentsConfig(){
    let env = {
      uri_api : '',
      clientId : '9c3391ce-a5c4-4feb-af81-7d69202faa9e',
      production: false,
    };

    let test = window.location.origin;
    if(test.includes('localhost')){
      env.uri_api = 'http://localhost:44358/api/';
    }

    return env;
  }
}

export const environment = new Environment().getEnviromentsConfig();
