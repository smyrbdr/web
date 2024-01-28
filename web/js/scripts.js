document.addEventListener('DOMContentLoaded', function () {
    var toggleDetailsButtons = document.querySelectorAll('.toggle-details');
    var closeDetailsButtons = document.querySelectorAll('.close-details');

    toggleDetailsButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var details = button.nextElementSibling;
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
        });
    });

    closeDetailsButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var details = button.parentElement;
            details.style.display = 'none';
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var languageDropdown = document.getElementById('navbarDropdown');
    var defaultLanguage = 'Türkçe'; // Başlangıçta Türkçe dilini varsayalım

    languageDropdown.addEventListener('click', function (event) {
        var target = event.target;
        if (target.classList.contains('dropdown-item')) {
            var selectedLanguage = target.textContent.trim();
            if (selectedLanguage === 'Türkçe' && defaultLanguage !== 'tr') {
                translateToTurkish();
            } else if (selectedLanguage === 'English' && defaultLanguage !== 'en') {
                translateToEnglish();
            }
        }
    });

    function translateToTurkish() {
        // Türkçe metinleri güncelle
        document.title = 'Matematik';
        // Örnek olarak, diğer metinleri de güncelleyebiliriz
        defaultLanguage = 'tr'; // Dil değişikliğini güncelle
    }

    function translateToEnglish() {
        // İngilizce metinleri güncelle
        document.title = 'Math Courses';
        // Örnek olarak, diğer metinleri de güncelleyebiliriz
        defaultLanguage = 'en'; // Dil değişikliğini güncelle
    }
});
