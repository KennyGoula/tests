fetch('testAjax.json')
    .then(rep => rep.json())
    .then(data => console.log(data[1]))