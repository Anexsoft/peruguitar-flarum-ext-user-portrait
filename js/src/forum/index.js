import app from 'flarum/forum/app';
import { extend } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';

import addUserPortrait from './components/UserPortrait';

app.initializers.add('peruguitar/user-portrait', () => {
    extend(IndexPage.prototype, 'sidebarItems', (items) => {
        if (!app.session.user) {
            return;
        }

        items.add('UserPortrait', addUserPortrait(), 1);
    });
});
