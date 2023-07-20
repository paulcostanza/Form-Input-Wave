// Gives us a node list of all the labels
const labels = document.querySelectorAll('.form-control label');

// Seperates the letters, wraps a span around each letter, then puts it back together
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 69}ms">${letter}</span>`)
        .join('')
})