//Your service which we are trying to connect is facebook
ServiceConfiguration.configurations.update(
      { "service": "facebook" },
      {
        $set: {
          "appId": "238509353247410",//Corresponding app ID to connect to facebook
          "secret": "be6ca26e6766d7820b889b78d9d4143a"//corresponding secret key to connect to facebook
        }
      },
      { upsert: true }//if rows already exist update them else add them
    );