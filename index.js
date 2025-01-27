document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const offset = targetSection.offsetLeft;
        document.querySelector('.content').style.transform = `translateX(-${offset}px)`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.number');
    const speed = 200; // Adjust the speed as needed

    // Make the counts visible after the page loads
    const counts = document.querySelectorAll('.count');
    counts.forEach(count => count.classList.add('visible'));

    const updateCount = (counter, callback) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => updateCount(counter, callback), 450); // Increase the delay for a slower count
        } else {
            counter.innerText = target;
            if (callback) callback();
        }
    };

    const startCounting = (index) => {
        if (index < counters.length) {
            updateCount(counters[index], () => startCounting(index + 1));
        }
    };

    startCounting(0); // Start counting from the first counter
});
