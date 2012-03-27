for (var i = 0, ps = $$('p'), l = ps.length; i < l; i++) {
  console.group('p n°' + i);
  console.log(ps[i].innerText);
  console.warn('offsetLeft = ', ps[i].offsetLeft);
  console.log(ps[i]);
  console.groupEnd();
}

