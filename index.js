const donationBtn = document.querySelectorAll('#donation-btn');
const donationPopUp = document.getElementById('donation-popup')

donationBtn.forEach((b) => {
    b.addEventListener('click', () => {
        donationPopUp.classList.toggle('donation-popup-show')
    })
})