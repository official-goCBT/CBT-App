document.addEventListener('DOMContentLoaded', () => {
    // 1. Counter Logic
    const counter = document.getElementById('amount-counter');
    const target = +counter.getAttribute('data-target');
    const goal = 500000;
    
    const updateCount = () => {
        const count = +counter.innerText;
        const speed = 200; 
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target.toLocaleString();
        }
    };

    updateCount();

    // 2. Progress Bar Logic
    const progress = (target / goal) * 100;
    const bar = document.getElementById('progress-bar');
    const percentText = document.getElementById('percent-text');
    
    setTimeout(() => {
        bar.style.width = `${progress}%`;
        percentText.innerText = `${Math.round(progress)}%`;
    }, 500);

    // 3. Fake Donation Feed for Demo
    const wall = document.getElementById('donation-wall');
    const donations = [
        { name: "Anonymous", amount: 50, time: "2 mins ago" },
        { name: "Sarah J.", amount: 250, time: "15 mins ago" },
        { name: "Saint Mark's Parish", amount: 1000, time: "1 hour ago" },
        { name: "David O.", amount: 20, time: "3 hours ago" }
    ];

    donations.forEach(don => {
        const item = document.createElement('div');
        item.className = 'feed-item';
        item.innerHTML = `
            <span><strong>${don.name}</strong> donated</span>
            <span>$${don.amount} <small style="color:#888; margin-left:10px">${don.time}</small></span>
        `;
        wall.appendChild(item);
    });
});
