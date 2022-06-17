const chokidar = require('chokidar');
const { exec } = require('child_process');

/* -------------------------------------------------------------------------- */

const argv = require('minimist')(process.argv.slice(2));
const INPUT_DIR = argv.i || argv.input || 'assets/svgs';
const OUT_DIR = argv.o || argv.outdir || 'public/sprites';
const FILENAME = argv.f || argv.filename || 'sprites';

/* -------------------------------------------------------------------------- */

async function generateSvgSprite() {
  await exec(`rimraf -rf ${OUT_DIR}`);
  await exec(
    `npx svg-sprite --svg-xmldecl=false --svg-doctype=false -v --view-prefix='' --vs='${FILENAME}' --view-bust=false --vx=false -s --symbol-prefix='' --symbol-sprite='${FILENAME}' --symbol-bust=false --symbol-example=false --dest=${OUT_DIR} '${INPUT_DIR}/**/*.svg'`, 
    errorCallback
  );
}

function errorCallback(error, stdout, stderr) {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  // console.log(`stdout: ${stdout}`);
  // console.log(`${OUT_DIR} 디렉토리에 SVG Sprites 이미지가 생성되었습니다.`);
}

/* -------------------------------------------------------------------------- */

const log = console.log.bind(console);

const watcher = chokidar.watch(INPUT_DIR, {
  persistent: true,
});

watcher
  .on('add', (path) => {
    log(`${path} 파일 추가`);
    generateSvgSprite();
  })
  .on('change', (path) => {
    log(`${path} 파일 수정`);
    generateSvgSprite();
  })
  .on('unlink', (path) => {
    log(`${path} 파일 제거`);
    generateSvgSprite();
  });