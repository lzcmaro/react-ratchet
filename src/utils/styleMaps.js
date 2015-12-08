let constant = obj => {
    return Object.assign(
        Object.create({
            values() {
                return Object.keys(this).map(k => this[k]);
            }
        }), obj);
};


export const BAR_STYLES = constant({
    NAV: 'nav',
    TAB: 'tab',
    STANDARD: 'standard'
});


export const BUTTON_STYLES = constant({
    PRIMARY: 'primary',
    POSITIVE: 'positive',
    NEGATIVE: 'negative',
    LINK: 'link'
});

export const BADGE_STYLES = constant({
    PRIMARY: 'primary',
    POSITIVE: 'positive',
    NEGATIVE: 'negative'
});

export const ICON_STYLES = constant({
    BACK: 'back',
    BARS: 'bars',
    CARET: 'caret',
    CHECK: 'check',
    CLOSE: 'close',
    CODE: 'code',
    COMPOSE: 'compose',
    DOWNLOAD: 'download',
    EDIT: 'edit',
    FORWARD: 'forward',
    GEAR: 'gear',
    HOME: 'home',
    INFO: 'info',
    LIST: 'list',
    MORE_VERTICAL: 'more-vertical',
    MORE: 'more',
    PAGES: 'pages',
    PAUSE: 'pause',
    PERSON: 'person',
    PLAY: 'play',
    PLUS: 'plus',
    REFRESH: 'refresh',
    SEARCH: 'search',
    SHARE: 'share',
    SOUND: 'sound',
    SOUND2: 'sound2',
    SOUND3: 'sound3',
    SOUND4: 'sound4',
    STAR_FILLED: 'star-filled',
    STAR: 'star',
    STOP: 'stop',
    TRASH: 'trash',
    UP_NAV: 'up-nav',
    UP: 'up',
    RIGHT_NAV: 'right-nav',
    RIGHT: 'right',
    DOWN_NAV: 'down-nav',
    DOWN: 'down',
    LEFT_NAV: 'left-nav',
    LEFT: 'left'
})