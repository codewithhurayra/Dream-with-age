function clickme() {
    const input = document.getElementById('input-box').value;
    const age = parseInt (input, 10);


    if (age >= 18 && age <= 23) {
        document.getElementById('result').textContent = ' A perfect college day: gaming (PUBG, Red Dead Redemption 2) and starting my coding journey with faith and focus.';
        document.getElementById('result').style.color ='gold';
    }
    if (age >= 23 && age <= 30) {
        document.getElementById('result').textContent = 'I’m Hurayra, learning JavaScript to become a full-stack developer. Coding is my passion and goal.';/*dil pa nae lena ok */
        document.getElementById('result').style.color ='grey';
    }
    if (age > 30 ) {
        document.getElementById('result').textContent = 'Hard work turns dreams into success. I’m growing into a professional programmer.';
        document.getElementById('result').style.color ='gold';
    }
    if (age > 15 && age < 18) {
        document.getElementById('result').textContent = 'Noob huryra with school learing.';
        document.getElementById('result').style.color ='red';
    }
    if (age < 15 ) {
        document.getElementById('result').textContent = 'Who is try to chek my Childhuood Tum bacha ho abi';
        document.getElementById('result').style.color ='green';
}
};
/* <div class="girl">
<h1 id="name"></h1>
<button id="text-display"></button> */
const button = document.getElementById('text-display');
button.addEventListener('click', function() {
    document.getElementById('name').innerText = 'Maria';
})
document.getElementById('year').textContent = new Date().getFullYear();