var qnumber = 1;
$('#qnum').text(qnumber);

var nextAngle=0;
var reduceAngle =0;

var items = $('.sliders');
var currentItem = items.filter('.currentSlider');
currentItem.css('background-color','blue');


  $('#next').on('click',function(){
    currentItem.css('background-color','#D6D7D9');
    var nextItem = currentItem.next();
    currentItem.removeClass('.currentSlider');
    if(nextItem.length){
      currentItem = nextItem.addClass('.currentSlider');
      currentItem.css('background-color','blue');
    } else {
      currentItem = items.first().addClass('.currentSlider');
    }

      nextAngle += 6;
      reduceAngle -= 6;
    // console.log(nextAngle);
    $('.circle_container').rotate({animateTo: nextAngle});
    $('.sliders').rotate({animateTo:reduceAngle});
    $('#choice').rotate({animateTo:reduceAngle});
    qnumber = qnumber+1;
    $('#qnum').text(qnumber);

    $('.current').removeClass('current').hide()
      .next().show().addClass('current');
    if($('.current').hasClass('last')){
      $('#next').attr('disabled',true);
    }
    $('#back').attr('disabled', null);
    });

  $('#back').on("click",function() {
    currentItem.css('background-color','#D6D7D9');
    var nextItem = currentItem.prev();
    currentItem.removeClass('.currentSlider');
    if(nextItem.length){
      currentItem = nextItem.addClass('.currentSlider');
      currentItem.css('background-color','blue');
    } else {
      currentItem = items.first().addClass('.currentSlider');
    }
    nextAngle -= 6;
    reduceAngle += 6;
    $('.circle_container').rotate({animateTo:nextAngle});
    $('.sliders').rotate({animateTo:reduceAngle});
    $('#choice').rotate({animateTo:reduceAngle});

    qnumber = qnumber-1;
    $('#qnum').text(qnumber);

    $('.current').removeClass('current').hide()
        .prev().show().addClass('current');
    if ($('.current').hasClass('first')) {
        $('#back').attr('disabled', true);
    }
    $('#next').attr('disabled', null);

});

$(document).ready(function(){
  var range_all_sliders = {
    'min': ['SD'],
    '25%': ['D'],
    '50%': ['N'],
    '75%': ['SA'],
    'max': ['A']
  };
//code for snapping slider
var sliders = document.getElementsByClassName('sliders');
for(var i =0; i<sliders.length; i++){
  noUiSlider.create(sliders[i], {
    start: [3],
    pips: {
      mode: 'values',
      values:[1,2,3,4,5],
      density: 4
    },
    step: 1,
    orientation:"horizontal",
    range:{
      'min':[1],
      'max': [5]
    }
  });
}
//code to change color of the marker on drag
$('#choice').text('Neutral');
$("#s1,#s2,#s3,#s4,#s5,#s6,#s7,#s8,#s9,#s10").each(function(){
  // console.log(this.noUiSlider.get());
  this.noUiSlider.on('update',function(values,handle){
    // console.log("Hello"+this.id);
    console.log(values[handle]);
    if(values[handle] == '1.00'){
      $('.noUi-marker-large').css('background-color','yellow');
      $('#choice').text('Strongly Disagree');
    } else if(values[handle] == '2.00'){
      $('#choice').text('Disagree');
    } else if(values[handle] == '3.00'){
      $('#choice').text('Neutral');
    } else if(values[handle] == '4.00'){
      $('#choice').text('Agree');
    } else if(values[handle] == '5.00'){
      $('#choice').text('Strongly Agree');
    }
  });
});


//code for position each slider around a circle
var numItems = $(".circle_container .sliders").length;
var start = 0;
var step = (2*Math.PI)/numItems;
$(".circle_container .sliders").each(function(index){
  var radius = ($(".circle_container").width() - $(this).width())/2;
  var tmpTop = (($(".circle_container").height()/2) + radius * Math.sin(start)) - ($(this).height()/2);
  var tmpLeft = (($(".circle_container").width()/2) + radius * Math.cos(start)) - ($(this).width()/2);
  start += step;

  $(this).css("top",tmpTop);
  $(this).css("left",tmpLeft);
  // $(this).css('transform','rotate('+90+'deg)');
});

var qnumber = 1;
$('#qnum').text(qnumber);


});
