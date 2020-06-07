// "start:tsdx:postcss": "npm run develop:tsdx:postcss",
// "start:tsdx:static": "npm run develop:tsdx:static",

// "develop:tsdx:postcss": "postcss src/component-library/global.css -o dist/$(node -p \"require('./package.json').name\").css --env development -w",
// "develop:tsdx:static": "copyfiles -f \"./foo/**/*.txt\" out",

// "build:tsdx:postcss": "postcss src/component-library/global.css -o dist/$(node -p \"require('./package.json').name\").css --env production",
// "build:tsdx:static": "",
const path = require('path');

const WATCH = process.env.WATCH === 'true' ? true : false;
const pkg = require(path.join(__dirname, './package.json'));
const STATIC_INPUT = path.join(__dirname, './static');
const STATIC_OUTPUT = path.join(__dirname, './dist/static');
const CSS_INPUT = path.join(
  __dirname,
  './src/component-library/global.css',
);
const CSS_OUTPUT = path.join(__dirname, './dist/index.css');
const chalk = require('chalk');
const execa = require('execa');
// execa colors https://github.com/sindresorhus/execa/issues/69
const fs = require('fs-extra');
const chokidar = require('chokidar');
const debounce = require('lodash.debounce');

let subprocess;
if (!WATCH) {
  console.log(chalk.green('Initial compiling…'));
  fs.removeSync(STATIC_OUTPUT);
  fs.ensureDirSync(STATIC_OUTPUT);

  console.log(chalk.green('Copying static files…'));
  fs.copySync(STATIC_INPUT, STATIC_OUTPUT, {
    overwrite: true,
  });

  console.log(chalk.green('Running PostCSS…'));
  subprocess = execa
    .command(
      `postcss ${CSS_INPUT} -o ${CSS_OUTPUT} --env ${process.env.NODE_ENV} --verbose`,
      {
        env: { FORCE_COLOR: true },
      },
    )
    .stdout.pipe(process.stdout);
} else {
  // css
  subprocess = execa.command(
    `postcss ${CSS_INPUT} -o ${CSS_OUTPUT} --env ${process.env.NODE_ENV} -w --verbose`,
    {
      env: { FORCE_COLOR: true },
    },
  );
  // duplicate output
  // subprocess.stdout.pipe(cyan).pipe(process.stdout);
  subprocess.stderr.pipe(process.stderr);

  // watcher
  const watcher = chokidar.watch(STATIC_INPUT, {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true,
    ignoreInitial: true,
  });

  // file change functions
  const add = (filePath) => {
    const relativePath = filePath.split('static')[
      filePath.split('static').length - 1
    ];
    fs.copyFileSync(
      filePath,
      path.join(STATIC_OUTPUT, relativePath),
      { overwrite: true },
    );
    console.log(
      chalk.cyan(`File ${filePath} has been added`),
    );
  };
  const change = (filePath) => {
    const relativePath = filePath.split('static')[
      filePath.split('static').length - 1
    ];
    fs.copyFileSync(
      filePath,
      path.join(STATIC_OUTPUT, relativePath),
      { overwrite: true },
    );
    console.log(
      chalk.cyan(`File ${filePath} has been changed`),
    );
  };
  const unlink = (filePath) => {
    const relativePath = filePath.split('static')[
      filePath.split('static').length - 1
    ];
    fs.removeSync(path.join(STATIC_OUTPUT, relativePath));
    console.log(
      chalk.cyan(`File ${filePath} has been removed`),
    );
  };

  // debounced file change functions
  const debouncedAdd = debounce(add, 200, {
    maxWait: 1000,
  });
  const debouncedChange = debounce(change, 200, {
    maxWait: 1000,
  });
  const debouncedUnlink = debounce(unlink, 200, {
    maxWait: 1000,
  });

  // watcher events
  watcher
    .on('add', debouncedAdd)
    .on('change', debouncedChange)
    .on('unlink', debouncedUnlink);
}
