const input = document.querySelector("#input");
const defaultText = document.querySelector("#default");
const debounceText = document.querySelector("#debounce");
const throttleText = document.querySelector("#throttle");

const updateDebounceText = debounce((text) => {
  debounceText.textContent = text;
});

input.addEventListener("input", (e) => {
  defaultText.textContent = e.target.value;
  updateDebounceText(e.target.value);
});

function debounce(cb, delay = 1000) {
  let timeOut;
  return (...args) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
