document.addEventListener('DOMContentLoaded', function() {
    const smileyImage = document.getElementById('smiley');
    const smileyButton = document.querySelector('.toggleButton');
    const h1 = document.querySelector('h2');

    smileyButton.addEventListener('click', function() {
        if (smileyImage.src.includes('https://t4.ftcdn.net/jpg/01/15/20/75/360_F_115207580_US2etunH78I7iMYHOoNVvxQTCIdoPdRj.jpg')) {
            smileyImage.src = 'https://t4.ftcdn.net/jpg/00/86/18/25/360_F_86182546_Gy93hyoCFXmK0JlXYnOekv05v66MUmfb.jpg';
            document.body.style.backgroundColor = '#ffcccc'; // Light red background
            h1.textContent = "He is sad";
        } else {
            smileyImage.src = 'https://t4.ftcdn.net/jpg/01/15/20/75/360_F_115207580_US2etunH78I7iMYHOoNVvxQTCIdoPdRj.jpg';
            document.body.style.backgroundColor = '#f0f0f0'; // Default background color
            h1.textContent = "He is happy";
        }
    });

    const madImage = document.getElementById('mad');
    const annoyedImage = document.getElementById('annoyed');

    const madButton = document.querySelector('#emoji1 .toggleButton');
    const annoyedButton = document.querySelector('#emoji2 .toggleButton');

    madButton.addEventListener('click', function() {
        if (madImage.src.includes('https://t3.ftcdn.net/jpg/02/16/61/12/360_F_216611200_XH37SaNS1S3kpcKhafU9HtlDj4IdtNoH.jpg')) {
            madImage.src = 'https://as1.ftcdn.net/v2/jpg/04/50/34/70/1000_F_450347015_Ies9bLWVqyGB7oju4gm6RlYz9JQggo4m.jpg';
            document.body.style.backgroundColor = 'green'; 
            h1.textContent = "He is calm";
        } else {
            madImage.src = 'https://t3.ftcdn.net/jpg/02/16/61/12/360_F_216611200_XH37SaNS1S3kpcKhafU9HtlDj4IdtNoH.jpg';
            document.body.style.backgroundColor = 'blue'; 
            h1.textContent = "He is mad";
        }
    });

    annoyedButton.addEventListener('click', function() {
        if (annoyedImage.src.includes('https://t3.ftcdn.net/jpg/05/20/49/54/360_F_520495441_YiNTg3wI4DaCPl158SBwf1ZyaLONkymt.jpg')) {
            annoyedImage.src = 'https://t3.ftcdn.net/jpg/04/13/72/48/360_F_413724806_2bDOfoNCAE01541AlSb1XlVduMmbliZd.jpg';
            document.body.style.backgroundColor = 'yellow'; 
            h1.textContent = "He is cool";
        } else {
            annoyedImage.src = 'https://t3.ftcdn.net/jpg/05/20/49/54/360_F_520495441_YiNTg3wI4DaCPl158SBwf1ZyaLONkymt.jpg';
            document.body.style.backgroundColor = 'purple';
            h1.textContent = "He is annoyed";
        }
    });
});
