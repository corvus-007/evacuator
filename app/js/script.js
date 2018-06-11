document.addEventListener('DOMContentLoaded', function() {
  svg4everybody();
  $.fancybox.defaults.animationEffect = 'zoom-in-out';
  $('.js-tabs').tabslet();
  $('input[type="tel"]').mask('+7 (999) 999-99-99', {});

  ymaps.ready(initMap);

  function initMap() {
    var map = new ymaps.Map("map", {
      center: [53.256175, 34.374052],
      zoom: 16,
      controls: []
    });

    map.behaviors.disable(['scrollZoom']);

    var mapMarker = new ymaps.Placemark([53.256175, 34.374052], {
      hintContent: 'г. Брянск, ул. Некрасова, д. 2',
      balloonContent: 'АТ-Л'
    }, {
      iconLayout: 'default#image',
    });

    map.geoObjects.add(mapMarker);
  }
});
