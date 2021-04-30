document.addEventListener('DOMContentLoaded', () => {
  const orderForm = document.querySelectorAll('.form_order');
  const query = new URLSearchParams(window.location.search);
  let clickid = '';

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

  for (let param of query.entries()) {
    if (param[0] === 'clickid') {
      clickid = param[1];
      createHiddenInput('clickid', clickid);
    }
  }

  if (!clickid) {
    const asub = document.createElement('a');
      asub.href = 'https://www.google.com/';
      asub.id = 'asub';
      document.body.append(asub);
  }
  

  const asubElem = document.getElementById('asub');
      const arr = asubElem.href.split('?');
      if (/sub1/.test(arr[1])) {
        const subs = arr[1].split('&');
        const sub1 = subs[0];
        sub1Value = sub1.split('=')[1];
      }
});


  