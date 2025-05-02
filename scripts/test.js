import { run } from 'jest-cli';

process.env.RNVC_ENV = 'test';

const argv = process.argv.slice(2);

if (process.env.CI) {
  argv.push('--runInBand');
}

run(argv);
