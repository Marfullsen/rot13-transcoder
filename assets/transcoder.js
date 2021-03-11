let d = {};

function chr(numero){
  return String.fromCharCode(numero);
}

for (const c of [65, 97]) {
  for (let i=0; i<26; i++) {
    d[chr(i+c)] = chr((i+13) % 26 + c)
  }  
}

function transcode(msg) {
    let resp = ''
    for (let letter of msg){
        resp += d[letter]? d[letter] : letter;
    }
    return resp;
}