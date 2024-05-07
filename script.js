// Get references to the image, buttons, and h1 element for the smiley emoji
const smileyImage = document.getElementById('smiley');
const smileyButton = document.getElementById('toggleButton');
const h1 = document.querySelector('h1');

// Add click event listener to the smiley button
smileyButton.addEventListener('click', function() {
    // Toggle between smiley and sad images
    if (smileyImage.src.includes('https://t4.ftcdn.net/jpg/01/15/20/75/360_F_115207580_US2etunH78I7iMYHOoNVvxQTCIdoPdRj.jpg')) {
        smileyImage.src = 'https://t4.ftcdn.net/jpg/00/86/18/25/360_F_86182546_Gy93hyoCFXmK0JlXYnOekv05v66MUmfb.jpg';
        document.body.style.backgroundColor = '#ffcccc'; // Change background color to light red
        h1.textContent = "He is sad";
    } else {
        smileyImage.src = 'https://t4.ftcdn.net/jpg/01/15/20/75/360_F_115207580_US2etunH78I7iMYHOoNVvxQTCIdoPdRj.jpg';
        document.body.style.backgroundColor = '#f0f0f0'; // Restore original background color
        h1.textContent = "He is happy";
    }
});

// Get references to the images for the mad and annoyed emojis
const madImage = document.getElementById('mad');
const annoyedImage = document.getElementById('annoyed');

// Get references to the buttons for emoji 1 and 2
const madButton = document.getElementById('madButton');
const annoyedButton = document.getElementById('annoyedButton');

// Add click event listener to the mad button
// Add click event listener to the mad button
// Add click event listener to the mad button
madButton.addEventListener('click', function() {
    // Toggle between mad and calm images
    if (madImage.src.includes('https://as1.ftcdn.net/v2/jpg/04/50/34/70/1000_F_450347015_Ies9bLWVqyGB7oju4gm6RlYz9JQggo4m.jpg')) {
        madImage.src = 'https://t3.ftcdn.net/jpg/02/16/61/12/360_F_216611200_XH37SaNS1S3kpcKhafU9HtlDj4IdtNoH.jpg';
        document.body.style.backgroundColor = '#f0f0f0'; // Restore original background color
        h1.textContent = "He is mad";
    } else {
        madImage.src = 'https://as1.ftcdn.net/v2/jpg/04/50/34/70/1000_F_450347015_Ies9bLWVqyGB7oju4gm6RlYz9JQggo4m.jpg';
        document.body.style.backgroundColor = '#ffcccc'; // Change background color to light red
        h1.textContent = "He is calm";
    }
});

// Add click event listener to the annoyed button
annoyedButton.addEventListener('click', function() {
    // Toggle between annoyed and cool images
    if (annoyedImage.src.includes('https://t3.ftcdn.net/jpg/04/13/72/48/360_F_413724806_2bDOfoNCAE01541AlSb1XlVduMmbliZd.jpg')) {
        annoyedImage.src = 'https://t3.ftcdn.net/jpg/05/20/49/54/360_F_520495441_YiNTg3wI4DaCPl158SBwf1ZyaLONkymt.jpg';
        document.body.style.backgroundColor = '#f0f0f0'; // Restore original background color
        h1.textContent = "He is annoyed";
    } else {
        annoyedImage.src = 'https://t3.ftcdn.net/jpg/04/13/72/48/360_F_413724806_2bDOfoNCAE01541AlSb1XlVduMmbliZd.jpg';
        document.body.style.backgroundColor = '#ccffcc'; // Change background color to light green
        h1.textContent = "He is cool";
    }
});
