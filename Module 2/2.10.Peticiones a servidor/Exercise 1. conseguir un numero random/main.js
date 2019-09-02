fetch('https://api.rand.fun/number/integer')
    .then(response => response.json())
    .then(data => document.body.innerHTML = data.result);