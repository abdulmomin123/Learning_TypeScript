type outputOptions = 'return' | 'save';

function add(w1: string, w2: string, outputAs: outputOptions) {
  if (outputAs === 'return') {
    return w1 + w2;
  } else {
    console.log(w1 + w2);
  }
}

add('type', 'script', 'save');
