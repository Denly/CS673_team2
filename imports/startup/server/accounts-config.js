//Your service which we are trying to connect is facebook
ServiceConfiguration.configurations.update(
      { "service": "facebook" },
      {
        $set: {
          "appId": "238509353247410",//Corresponding app ID to connect to facebook
          "secret": "ba3038b777acf39b53589862f7da09c4"//corresponding secret key to connect to facebook
        }
      },
      { upsert: true }//if rows already exist update them else add them
    );
