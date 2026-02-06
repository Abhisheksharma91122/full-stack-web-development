console.log("Hello from script")

console.log(window)

console.log(screen.width);
console.log(screen.height);

if (screen.width < 768) {
  console.log('Mobile view');
}

// const ok = confirm('Are you sure you want to delete?');

// if (ok) {
//   console.log('Deleted');
// }

// const name = prompt('Enter your name');
// console.log(name);

// if (!navigator.onLine) {
//   alert('No internet connection');
// }

// const visits = Number(localStorage.getItem('visits') || 0);
// localStorage.setItem('visits', visits + 1);

// console.log(`You visited ${visits + 1} times`);


console.log(window.document.getElementsByTagName("h1")[0].innerHTML)