
export default {
  TitleBar:                  require('fs').readFileSync(__dirname + '/../examples/TitleBar.js', 'utf8'),
  TitleBarWithButtons:       require('fs').readFileSync(__dirname + '/../examples/TitleBarWithButtons.js', 'utf8'),
  TitleBarWithIcons:         require('fs').readFileSync(__dirname + '/../examples/TitleBarWithIcons.js', 'utf8'),
  ButtonTypes:               require('fs').readFileSync(__dirname + '/../examples/ButtonTypes.js', 'utf8'),
  ButtonsWithIcons:          require('fs').readFileSync(__dirname + '/../examples/ButtonsWithIcons.js', 'utf8'),
  ButtonsBadges:             require('fs').readFileSync(__dirname + '/../examples/ButtonsBadges.js', 'utf8'),
  Badge:                     require('fs').readFileSync(__dirname + '/../examples/Badge.js', 'utf8'),
  Icon:                      require('fs').readFileSync(__dirname + '/../examples/Icon.js', 'utf8')
};