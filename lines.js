var through = require('through2');
var stream = through(write, end);
var count = 0;

function write (buffer, encoding, next) {

  if(count%2 !== 0){
    this.push(buffer.toString().toUpperCase());
  }else {
    this.push(buffer.toString().toLowerCase());
  }
  count+=1;
  next();
}

function end (done) {
  done();
}

process.stdin.pipe(stream).pipe(process.stdout);
