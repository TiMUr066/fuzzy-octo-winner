document.addEventListener('DOMContentLoaded', () => {
    // --- 1. ЛОГИКА БУРГЕР-МЕНЮ ---
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav a');

    
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
    });

   
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            nav.classList.remove('active');
        });
    });


    
    const searchForm = document.querySelector(".search-form");

    if (searchForm) {
        searchForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const location = searchForm.querySelector("select").value;
            const date = searchForm.querySelector('input[type="date"]').value;
            const people = searchForm.querySelectorAll("select")[1].value;

            if (location === "Локация для тура") {
                alert("Пожалуйста, выберите локацию для тура.");
                return;
            }

            if (date === "") {
                alert("Пожалуйста, выберите дату похода.");
                return;
            }

            if (people === "Участники") {
                alert("Пожалуйста, выберите количество участников.");
                return;
            }

            alert(
                "Ваш поиск:\n" +
                "Локация: " + location + "\n" +
                "Дата: " + date + "\n" +
                "Участники: " + people
            );
        });
    }


    // --- 3. ВАЛИДАЦИЯ ФОРМЫ ПОДПИСКИ ---
    const subscribeForm = document.querySelector("#subscribe-form");

    if (subscribeForm) {
        subscribeForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const email = document.querySelector("#email").value;

            if (email.trim() === "") {
                alert("Введите ваш email.");
                return;
            }

            alert("Спасибо за подписку!");
            subscribeForm.reset();
        });
    }


    
    const consultationButton = document.querySelector(".header .dark-button");

    if (consultationButton) {
        consultationButton.addEventListener("click", function() {
            const contactsSection = document.querySelector("#contacts");
            if (contactsSection) {
                contactsSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }
});