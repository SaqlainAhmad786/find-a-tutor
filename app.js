document.addEventListener('DOMContentLoaded', function () {
    let tabs = document.querySelectorAll('.tabBtns');
    let contents = document.querySelectorAll('.tab-content');

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function (e) {
            let targetId = tab.id.replace('Tab', 'Content');

            // Hide all content divs
            contents.forEach(function (content) {
                content.classList.add('hidden');
            });

            // Remove active class from all tabs
            tabs.forEach(function (tab) {
                tab.classList.remove('text-white', 'font-bold', 'bg-greenClr');
                tab.classList.add('text-gray-600', 'font-medium');
            });

            // Show the target content
            document.getElementById(targetId).classList.remove('hidden');

            // Add active class to the clicked tab
            tab.classList.add('text-white', 'font-bold', 'bg-greenClr');
            tab.classList.remove('text-gray-600', 'font-medium');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Splide sliders only if the corresponding element exists
    const initializeSlider = (selector, options) => {
        const element = document.querySelector(selector);
        if (element) {
            new Splide(selector, options).mount();
        }
    };

    // Header Slider 1
    initializeSlider('#tutorSlider', {
        type: 'free',
        gap: '2rem',
        perPage: 3,
        autoplay: false,
        pagination: false,
        arrows: false,
        breakpoints: {
            1024: {
                perPage: 2,
            },
            640: {
                perPage: 1,
                autoplay: true,
            },
        }
    });

    var splide = new Splide('#testimonialSlider', {
        type: 'free',
        gap: '2rem',
        perPage: 2,
        arrows: false,
        autoplay: false,
        pagination: false,
        breakpoints: {
            1024: {
                perPage: 1,
            },
            640: {
                perPage: 1,
                autoplay: true,
            },
        },
    });

    splide.mount();

    document.getElementById("customPrev").addEventListener("click", function () {
        splide.go("<");
    });

    document.getElementById("customNext").addEventListener("click", function () {
        splide.go(">");
    });
});
