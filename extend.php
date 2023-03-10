<?php

/*
 * This file is part of peruguitar/user-portrait.
 *
 * Copyright (c) 2023 Peru Guitar.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace PeruGuitar\UserPortrait;

use Flarum\Extend;

return [
    (new Extend\Settings)
    ->serializeToForum('pgUserPortraitExcludeFromMobile', 'peruguitar.user-portrait.exclude_from_mobile'),
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),
];
