//slick slider

$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 800,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right.png"></button>',
        responsive: [ //адаптация
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false
                }
            }
        ]
            
      });
//Вставляем класс с нашими табами      Здесь говорится что мы будем тыкать только на вкладки у которых нет тега active
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)//На какой таб тыкнули, там будет задаваться класс active
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
                                            //Тут мы убираем у всех соседних классов тег active чтобы работало только то что мы нажали
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
//находим ближайший род элемент                                                                          Получает тот номер элемента на который мы клацнули
    });//Кароче, этот скрипт при нажатии на таб запоминает его номер и после сопоставляет с порядком постановления контента с классом catalog__content. 
       // Т.е. если нажали на 2 таб, то откроется тот контент, который 2 по счёту в html файле


    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault(); //нужно чтобы ссылка не направляла куда-то (Браузер себя так по дефолту ведёт), а выполняла какие либо действия
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })      //eq надо для того, чтобы жёстко привязать выполнение действий к какому либо классу
        })
    };

    toggleSlide('.catalog-item__more') //Вызов функции
    toggleSlide('.catalog-item__back') //И это тоже

    //Модальные окна
    //$ нужен для получения какого либо элемента со страницы
    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('fast');
    })

    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #thanks, #order').fadeOut('fast');
    })

    })
    //each это перебор всех элементов
    $('.buy').each(function(i) {
        $(this).on('click', function() { //text получает наш заголовок
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('#order .modal__money-price').text($('.price_true-price').eq(i).text());
            $('.overlay, #order').fadeIn('fast');
        })
    
    



    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    minlength: 11
                },
                email: {
                    required: true,
                    email: true
                }
            },

            messages: {
                name: {
                    required: "Пожалуйста, введите своё имя",
                    minlength: jQuery.validator.format("Введите не менее {0}-х символов!")
                },

                phone: {
                    required: "Пожалуйста, введите свой номер телефона",
                    minlength: jQuery.validator.format("Введите не менее {0}-ти цифр!"),
                },
                
                email: {
                    required: "Пожалуйста, введите свой E-mail",
                    email: "Почта введена не правильно"
                }
            }
        
        });
    }
    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('[name=phone]').mask("+7 (999) 999-99-99");

});





//tiny-slider

/* const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
});
document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
}); //кнопка листания назад

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});//кнопка листания вперёд */



