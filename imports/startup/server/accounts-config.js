//Your service which we are trying to connect is facebook
ServiceConfiguration.configurations.update(
      { "service": "facebook" },
      {
        $set: {
          "appId": "238509353247410",     //Corresponding app ID to connect to facebook
          "secret": "ba3038b777acf39b53589862f7da09c4"//corresponding secret key to connect to facebook
        }
      },
      { upsert: true }//if rows already exist update them else add them
    );
/*
Test App -
344617442587626
5b5107316fd65a29bc072ee3e05484fb

Product App -
303809510001753
be6ca26e6766d7820b889b78d9d4143a

new App meetcutecute
238509353247410
ba3038b777acf39b53589862f7da09c4
*/
