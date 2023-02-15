console.log(app.translator);

app.initializers.add('peruguitar/user-portrait', () => {
  // TODO: add extran option to hide user portrait from mobile
  // app.extensionData.for('peruguitar-user-portrait').registerSetting(
  //   {
  //     setting: 'peruguitar.user-portrait.available_for_mobile',
  //     label: app.translator.trans('peruguitar-user-portrait.admin.available_for_mobile_label'),
  //     help: app.translator.trans('peruguitar-user-portrait.admin.available_for_mobile_help'),
  //     type: 'boolean',
  //   },
  //   30 // Optional: Priority
  // );
});
