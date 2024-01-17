const stringEl = document.getElementById('stringEl')
const ulEl = document.getElementById('ul')
const submit = document.getElementById('submitBtn')
const selectorEl = document.getElementById('separator')
const confirmatoryMessage = document.getElementById('confirmatoryMessage')
const modalEl = document.getElementById('modal')
const mainEl = document.querySelector('main')
const btnElArr = document.querySelectorAll('#btn')


const listenToModal = () => {
  return new Promise((resolve) => {
    confirmatoryMessage.innerHTML = `Are you sure you want to use '<strong>${selectorEl.value == " "? 'Space': selectorEl.value }</strong>' as your separator ?`
    modalEl.style.display = 'block'
    mainEl.style.opacity = '0.1'

    const closeModal = (accepted) => {
      modalEl.style.display = 'none'
      mainEl.style.opacity = '1'
      resolve(accepted);
    };

    btnElArr[0].addEventListener('click', () => closeModal(true));
    btnElArr[1].addEventListener('click', () => closeModal(false));
  });
};

submit.addEventListener('click', async (e) => {
  e.preventDefault();
  const accepted = await listenToModal();

  if (!accepted) {
    return;
  }

  let strings = stringEl.value;

  if (!strings || !strings.includes(selectorEl.value)) {
    alert('Fill the box with appropriate data before proceeding');
    return;
  }

  ulEl.innerHTML = '';
  const strArr = strings.split(',').flatMap((el) => el.split('. '));
  const arr = strings.split(selectorEl.value) || strArr;
  arr.forEach((el) => {
    if (el) {
      const li = document.createElement('li');
      li.append(el.toUpperCase());
      ulEl.append(li);
    }
  });
});
