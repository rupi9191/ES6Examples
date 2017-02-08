import $ from 'jquery';
import './defaultParameters';
import templateLiterals from './templateLiterals';
import multilineString from './multilineString';
import {defaultParametersES5,defaultParametersES6} from './defaultParameters';

$(document).ready(function(){
    $('a.page-scroll').click(function(event) {
        var $anchor = $(this);
        var id = $anchor.attr('href');
        console.log(id);
        switch(id) {
        case "#1":
            defaultParametersES5();
            defaultParametersES6();
            break;
        case "#2":
            templateLiterals();
            break;
        case "#3":
            multilineString();
            break;
        }
        $("body").animate({ scrollTop: $($anchor.attr('href')).offset().top }, 1000);
    });

    $("select").on('change', function (e) {
        console.log(this.value);
        $('a.page-scroll[href="' +e.target.value+'"]').click();
    });
});
