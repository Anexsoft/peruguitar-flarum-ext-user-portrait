app.initializers.add('peruguitar/user-portrait', () => {
    app.extensionData.for('peruguitar-user-portrait').registerSetting(
        {
            setting: 'peruguitar.user-portrait.exclude_from_mobile',
            label: app.translator.trans('peruguitar-user-portrait.admin.exclude_from_mobile_label'),
            help: app.translator.trans('peruguitar-user-portrait.admin.exclude_from_mobile_help'),
            type: 'boolean',
        },
        30 // Optional: Priority
    );
});
