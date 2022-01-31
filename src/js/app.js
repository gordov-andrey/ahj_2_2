import data from './data.json';

const arr = JSON.parse(JSON.stringify(data));
const table = document.querySelector('.row');
const id = document.querySelector('#id');
const title = document.querySelector('#title');
const tr = document.querySelectorAll('tr');

const remover = (e) => {
  e.forEach(item => {
    if (item.previousElementSibling === null) {
      return;
    }
    item.remove();
  })
}

const render = () => {
  arr.forEach(item => {
    table.insertAdjacentHTML('afterend', `
      <tr class="row" data-id="id" data-title="title" data-year="year" data-imdb="imdb">
        <td class="col">${item.id}</td>
        <td class="col">${item.title}</td>
        <td class="col">${item.year}</td>
        <td class="col">${'imdb: ' + item.imdb.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
    </tr>`);
  });
}

id.addEventListener('click', () => {
  arr.sort(function (a, b) {
    return b.id - a.id;
  });
  remover(tr);
  id.innerHTML = `id &darr;`;
  title.innerHTML = `title`;

  render();
})

title.addEventListener('click', () => {
  arr.sort(function (a, b) {
    return b.title.localeCompare(a.title);
  });
  remover(tr);
  id.innerHTML = `id`;
  title.innerHTML = `title &darr;`;

  render();
})

render();
