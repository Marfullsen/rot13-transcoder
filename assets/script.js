//$(document).foundation();

let from = document.getElementById('from');
let to = document.getElementById('to');
let python = document.getElementById('python-example');
let fox = document.getElementById('fox-example');
let clear = document.getElementById('clearBtn');
let translate_btn = document.getElementById("transcodeBtn");
let auto_translate_switch =  document.getElementById("automaticTranslateSwitch");

auto_translate_switch.addEventListener('change', function() {
  if (auto_translate_switch.checked) {
    translate_btn.classList.add("invisible")
  } else {
    translate_btn.classList.remove("invisible")
  }
});

translate_btn.addEventListener("click", function(){
  to.innerText = transcode(from.innerText);
});

if (from.addEventListener) {
  from.addEventListener('input', function() {
    if (auto_translate_switch.checked){
      to.innerText = transcode(from.innerText);
    }
  }, false);
  to.addEventListener('input', function() {
    from.innerText = transcode(to.innerText);
  }, false);
} else if (from.attachEvent) {
  // IE Compatibility
  from.attachEvent('onpropertychange', function() {
    to.value = transcode(from.value);
  });
  to.attachEvent('onpropertychange', function() {
    from.value = transcode(to.value);
  });
}

fox.addEventListener("click", function(){
  from.innerText = "The Quick Brown Fox Jumps Over The Lazy Dog."
  to.innerText = transcode(from.innerText);
});

python.addEventListener("click", function(){
  from.innerText = "Gur Mra bs Clguba, ol Gvz Crgref\n\nOrnhgvshy vf orggre guna htyl.\nRkcyvpvg vf orggre guna vzcyvpvg.\nFvzcyr vf orggre guna pbzcyrk.\nPbzcyrk vf orggre guna pbzcyvpngrq.\nSyng vf orggre guna arfgrq.\nFcnefr vf orggre guna qrafr.\nErnqnovyvgl pbhagf.\nFcrpvny pnfrf nera'g fcrpvny rabhtu gb oernx gur ehyrf.\nNygubhtu cenpgvpnyvgl orngf chevgl.\nReebef fubhyq arire cnff fvyragyl.\nHayrff rkcyvpvgyl fvyraprq.\nVa gur snpr bs nzovthvgl, ershfr gur grzcgngvba gb thrff.\nGurer fubhyq or bar-- naq cersrenoyl bayl bar --boivbhf jnl gb qb vg.\nNygubhtu gung jnl znl abg or boivbhf ng svefg hayrff lbh'er Qhgpu.\nAbj vf orggre guna arire.\nNygubhtu arire vf bsgra orggre guna *evtug* abj.\nVs gur vzcyrzragngvba vf uneq gb rkcynva, vg'f n onq vqrn.\nVs gur vzcyrzragngvba vf rnfl gb rkcynva, vg znl or n tbbq vqrn.\nAnzrfcnprf ner bar ubaxvat terng vqrn -- yrg'f qb zber bs gubfr!"
  to.innerText = transcode(from.innerText);
});

clear.addEventListener("click", function(){
  from.innerText = ""
  to.innerText = transcode(from.innerText);
});