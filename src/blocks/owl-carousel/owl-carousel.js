$('.owl-carousel').owlCarousel({
    loop:false,
    dots:true,
    autoHeight: true,
    responsive:{
        10:{
          items:1,
          center:true
        },
        768:{
          autoWidth:true,
          items:2,
          margin:120
        }
    }
})
