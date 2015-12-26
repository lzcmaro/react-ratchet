import 'colors';
import lib from './lib/build';
import dist from './dist/build';
// import { distRoot, bowerRoot } from './constants';
import { exec } from 'child-process-promise';

function forkAndBuildDocs({verbose}) {
  console.log('Building: '.cyan + 'docs'.green);

  const verboseOption = verbose ? '--verbose' : '';

  return exec(`npm run docs-build -- ${verboseOption}`)
    .then(() => console.log('Built: '.cyan + 'docs'.green));
}

export default function Build(options) {
  return lib(), dist(), forkAndBuildDocs(options)
}
