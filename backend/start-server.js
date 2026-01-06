// Wrapper to ensure server stays running
const { spawn } = require('child_process');

console.log('🔄 Starting ExpenseFlow backend server...\n');

const serverProcess = spawn('node', ['server.js'], {
    stdio: 'inherit',
    cwd: __dirname
});

serverProcess.on('exit', (code) => {
    console.log(`\n❌ Server process exited with code ${code}`);
    process.exit(code);
});

serverProcess.on('error', (err) => {
    console.error('❌ Failed to start server:', err);
    process.exit(1);
});

// Keep process alive
process.stdin.resume();
