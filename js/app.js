import $ from 'jquery';
import './defaultParameters';
import {defaultParametersES5,defaultParametersES6} from './defaultParameters';
import {templateLiteralsES5, templateLiteralsES6} from './templateLiterals';
import {multilineStringES5, multilineStringES6} from './multilineString';
import {PersonES5, PersonES6} from './classSystem';
import {es5, es6} from './arrowFunction';
import {es5Scoping, es6Scoping} from './scoping';
import {es5Destructuring, es6Destructuring} from './destructuring';
import {es5SpreadOperator, es6SpreadOperator} from './spreadOperator';

$(document).ready(function(){
    $('a.page-scroll').click(function(event) {
        var $anchor = $(this);
        var id = $anchor.attr('href');
        switch(id) {
        case "#1":
            $(id).find(".es5 span").text(defaultParametersES5());
            $(id).find(".es6 span").text(defaultParametersES6());
            break;
        case "#2":
            $(id).find(".es5 span").text(templateLiteralsES5());
            $(id).find(".es6 span").text(templateLiteralsES6());
            break;
        case "#3":
            $(id).find(".es5 span").text(multilineStringES5());
            $(id).find(".es6 span").text(multilineStringES6());
            break;
        case "#4":
            const persones5 = new PersonES5("Rupesh from es5");
            const persones6 = new PersonES6("Rupesh from es6");
            $(id).find(".es5 span").text(persones5.getName());
            $(id).find(".es6 span").text(persones6.getName());
            break;
        case "#5":
            $(id).find(".es5 span").text(es5(2,3));
            $(id).find(".es6 span").text(es6(2,3));
            break;
        case "#6":
            $(id).find(".es5 span").text(es5Scoping());
            $(id).find(".es6 span").text(es6Scoping());
            break;
        case "#8":
            $(id).find(".es5 span").text(es5Destructuring());
            $(id).find(".es6 span").text(es6Destructuring());
            break;
        case "#9":
            $(id).find(".es5 span").text(es5SpreadOperator());
            $(id).find(".es6 span").text(es6SpreadOperator());
            break;
        }
        $('html,body').animate({ scrollTop: $($anchor.attr('href')).offset().top }, 1000);
    });

    $("select").on('change', function (e) {
        $('a.page-scroll[href="' +e.target.value+'"]').click();
    });
});
