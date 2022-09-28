/////////////////// product +/-
$(document).ready(function() {
    $('.num-in span').click(function () {
        var $input = $(this).parents('.num-block').find('input.in-num');
        if($(this).hasClass('minus')) {
            var count = parseFloat($input.val()) - 1;
            count = count < 0 ? 0 : count;
            if (count < 2) {
                $(this).addClass('dis');
            }
            else {
                $(this).removeClass('dis');
            }
            if (count < 1) {
                $(this).parents('.add-cart').find(('#price-btn')).removeClass('btn-hiden');
                $(this).parents('.add-cart').find(('#price-btn-2')).removeClass('btn-hiden');
                $(this).parents('.add-cart').find(('#price-btn-3')).removeClass('btn-hiden');
                $(this).parents('.add-cart').find(('#price-btn-4')).removeClass('btn-hiden');
            }
            if (count < 1) {
                $(this).parents('.add-cart').find(('.num-block')).removeClass('in-active');
            }
            $input.val(count);
        }
        else {
            var count = parseFloat($input.val()) + 1
            $input.val(count);
            if (count > 1) {
                $(this).parents('.num-block').find(('.minus')).removeClass('dis');
            }
        }

        /*$input.change();
        return false;*/
    });

});
// product +/-

// $(".vkuster-good-to-cart").attr('id', 'id-element');

/*const elements = [...document.querySelectorAll('.vkuster-good-to-cart')]; // массив
const ids = elements.map(() => Math.random().toString(36).substring(2)); // случайные строки
elements.forEach((el, i) => el.id = ids[i]); // назначить эти id соотв. элементам*/

/*$(".vkuster-good-to-cart").each(function () {
    $(this).uniqueId();
});*/


/*var input = document.querySelector('.input-n');
var plus = document.querySelector('.plus');
var minus = document.querySelector('.minus');
var total = 0;
var step = 1;

plus.addEventListener('click', Increase);
minus.addEventListener('click', Decrease);

// Functions
function Increase(e) {
    e.preventDefault();
    total += step;
    input.value = total;

    if(input.value > 0){
        minus.disabled = false;
        minus.classList.remove('_disabled');
    }
}

function Decrease(e) {
    e.preventDefault;
    total -= step;
    input.value = total;

    if(input.value < 0 || input.value == 0) {
        minus.disabled = true;
        minus.classList.add('_disabled');
        input.value = 0;
    }
}*/


document.getElementById('price-btn').onclick = function() {
    document.getElementById('price-in').classList.add('in-active');
    document.getElementById('price-btn').classList.add('btn-hiden');
}
document.getElementById('price-btn-2').onclick = function() {
    document.getElementById('price-in-2').classList.add('in-active');
    document.getElementById('price-btn-2').classList.add('btn-hiden');
}
document.getElementById('price-btn-3').onclick = function() {
    document.getElementById('price-in-3').classList.add('in-active');
    document.getElementById('price-btn-3').classList.add('btn-hiden');
}
document.getElementById('price-btn-4').onclick = function() {
    document.getElementById('price-in-4').classList.add('in-active');
    document.getElementById('price-btn-4').classList.add('btn-hiden');
}


