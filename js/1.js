ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.763197, 49.234880],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),
        position =  [55.763197, 49.234880],
        myPlacemark = new ymaps.Placemark(position, {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './media/google_marker.png',
            // Размеры метки.
            iconImageSize: [42, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-12, -38]
        });

    myMap.geoObjects.add(myPlacemark);
});