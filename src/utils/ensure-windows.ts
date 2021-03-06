/**
 * Ensures that the currently running platform is Windows,
 * exiting the process if it is not
 */
function ensureWindows() {
  if (process.platform !== 'win32') {
    console.log('This tool requires Windows.\n');
    process.exit(1);
  }
}

module.exports = { ensureWindows };
