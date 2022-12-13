export {};

// Create a "close" button and append it to each list item
const myNodelist: HTMLCollectionOf<Element> =
  document.getElementsByTagName('LI');
const span: HTMLElement = document.createElement('SPAN');
const txt: Text = document.createTextNode('\u00D7');
const addBtn: HTMLElement | null = document.getElementById('addBtn');
let i;

for (i = 0; i < myNodelist.length; i++) {
  span.className = 'close';
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let closeButtons: HTMLCollectionOf<Element> =
  document.getElementsByClassName('close');

for (i = 0; i < closeButtons.length; i++) {
  let closeButton: Element = closeButtons[i];

  closeButton.addEventListener('click', () => {
    const li = closeButton.parentElement;

    if (!!li) {
      li.style.display = 'none';
    }
  });
}

// Add a "checked" symbol when clicking on a list item
const list: HTMLUListElement | null = document.querySelector('ul');

if (list) {
  list.addEventListener(
    'click',
    function (ev: Event): void {
      let target: HTMLElement = <HTMLElement>ev.target;
      if (target) {
        if (target.tagName === 'LI') {
          target.classList.toggle('checked');
        }
      }
    },
    false
  );
}

// Create a new list item when clicking on the "Add" button
function newElement(): void {
  const li: HTMLLIElement = document.createElement('li');
  const input: HTMLInputElement = <HTMLInputElement>(
    document.getElementById('myInput')
  );

  if (!input) return;

  const inputValue = input.value;
  const textNode: Text = document.createTextNode(inputValue);

  li.appendChild(textNode);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    const ul = document.getElementById('myUL');

    ul && ul.appendChild(li);
  }

  input.value = '';

  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);

  span.addEventListener('click', () => {
    const li = span.parentElement;
    if (!!li) {
      li.style.display = 'none';
    }
  });
}

addBtn?.addEventListener('click', () => {
  newElement();
});
