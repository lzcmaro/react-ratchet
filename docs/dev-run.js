/* eslint no-process-exit: 0 */
import 'colors';
import portfinder from 'portfinder';
import {exec} from 'child-process-promise';
// import ip from 'ip';

portfinder.basePort = 3000;

const SIGINT = 'SIGINT';
let processMap = {};

function output(prefix, message) {
    let formattedMessage = message.trim().split('\n')
        .reduce((acc, line) => `${acc}${ acc !== '' ? '\n' : '' }${prefix} ${line}`, '');

    console.log(formattedMessage);
}

function listen({
    stdout, stderr
}, name) {
    stdout.on('data', data => output(`[${name}] `.grey, data));
    stderr.on('data', data => output(`[${name}] `.grey, data));
}

function shutdown() {
    for (let key in processMap) {
        processMap[key].kill(SIGINT);
    }
}

function catchExec(name, err) {
    if (err.killed) {
        console.log('Shutdown: '.cyan + name.green);
        shutdown();
        return false;
    }

    console.log(`${name} -- Failed`.red);
    console.log(err.toString().red);
    return true;
}

function runCmd(name, cmd, options) {
    exec(cmd, options)
        .progress(childProcess => {
            listen(childProcess, name);
            processMap[name] = childProcess;
            return;
        })
        .then(() => console.log('Shutdown: '.cyan + name.green))
        .catch(err => {
            if (catchExec(name, err)) {
                // Restart if not explicitly shutdown
                runCmd(name, cmd, options);
            }
        });
}

console.log('Starting docs in Development mode'.cyan);

process.on(SIGINT, shutdown);

portfinder.getPorts(2, {}, (portFinderErr, [docsPort, webpackPort]) => {
    if (portFinderErr) {
        console.log('Failed to acquire ports'.red);
        process.exit(1);
    }

    runCmd('webpack-dev-server', `nodemon --watch webpack  --exec webpack-dev-server -- --config webpack-docs.config.js --color --port ${webpackPort} --debug --hot`, {
        maxBuffer: 1000 * 1024
    });

    runCmd('docs-server', `nodemon --watch docs --watch src --exec babel-node docs/server.js`, {
        env: {
            PORT: docsPort,
            WEBPACK_DEV_PORT: webpackPort,
            ...process.env
        }
    });
});
