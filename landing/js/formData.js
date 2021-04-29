document.addEventListener('DOMContentLoaded', () => {
  const orderForm = document.querySelectorAll('.form_order');
  const query = new URLSearchParams(window.location.search);
  let clickid = '';
  let sub1Value = '';

  function createHiddenInput(type, value) {
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.name = type;
    hiddenInput.value = value;
    orderForm.forEach(elem => {
      let cloneInput = hiddenInput.cloneNode(true);
      elem.prepend(cloneInput);
    });
  }

  // Эта строки для теста, их нужно потом закомментировать или удалить
  // const init = window.location.pathname + '?prl=123&clickid=2d6111na0468nbdb&uclick=e2irslfe&uclickhash=e2irslfe-1na0468n-2twf-0-8wlp-pmbgbl-pmbgfe-1d664f';
  // console.log(query.entries.length);
  // for (let param of query.entries()) {
  //     if (query.entries.length > 0) {
  //     if (param[0] === 'clickid') {
  //       clickid = param[1];
  //     } 
  //   }
  // }

  for (let param of query.entries()) {
    if (param[0] === 'clickid') {
      clickid = param[1];
    }
  }
  
  // Эта 3 строки для теста, их нужно потом закомментировать или удалить
  const asub = document.createElement('a');
  asub.href = 'http://pomilnd.com/nKBk?sub1=9354f1na046bl8ca&sub2=5';
  document.body.append(asub);

  const allA = document.querySelectorAll('a');
  allA.forEach(elem => {
    if (/http:\/\/pomilnd.com/.test(elem.href)) {
      const arr = elem.href.split('?');
      if (/sub1/.test(arr[1])) {
        const subs = arr[1].split('&');
        const sub1 = subs[0];
        sub1Value = sub1.split('=')[1];
      }
    }
  });
  
  createHiddenInput('clickid', clickid);
  createHiddenInput('sub1', sub1Value);
});


  