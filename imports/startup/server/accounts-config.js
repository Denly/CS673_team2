ServiceConfiguration.configurations.update(
      { "service": "facebook" },
      {
        $set: {
          "appId": "303809510001753",
          "secret": "be6ca26e6766d7820b889b78d9d4143a"
        }
      },
      { upsert: true }
    );

/*ServiceConfiguration.configurations.remove({
    service: 'facebook'
});

ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '303809510001753',
    secret: 'be6ca26e6766d7820b889b78d9d4143a'
});
*/
