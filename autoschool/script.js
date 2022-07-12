'use strict';


/*burger*/

//document.querySelector('.burger').addEventListener('click', function(event) {
//    event.preventDefault();
//    document.querySelector('.navigationbottom').classList.toggle('navigationbottom__burger');
//    document.querySelector('.contentdesktop').classList.toggle('contentdesktop__burger');
//    document.querySelector('.runstrip').classList.toggle('runstrip__burger');
//    document.querySelector('.filials').classList.toggle('filials__burger');
//    document.querySelector('.instructors').classList.toggle('instructors__burger');
//    document.querySelector('.faq').classList.toggle('faq__burger');
//    document.querySelector('.howfound').classList.toggle('howfound__burger');
//    document.querySelector('.deaulus').classList.toggle('deaulus__burger');
//    document.querySelector('.logo-footer').classList.toggle('logo-footer__burger');
//    document.querySelector('.footer').classList.toggle('footer__burger');
//    let linksFooter = document.querySelectorAll('.navigationbottom__itemfooter');
//    for (let i = 0; i < linksFooter.length; i++) {
//         linksFooter[i].style.color = 'black';
//    };
//    document.querySelector('.allrights').classList.toggle('allrights__burger');
//    let contactsFooter = document.querySelectorAll('.navigationtop__item div');
//    for (let i = 0; i < contactsFooter.length; i++) {
//         contactsFooter[i].style.color = 'black';
//    };
//    document.querySelector('.bottomnavigation-top').classList.toggle('bottomnavigation-top__burger');
//    document.querySelector('.navigationbottom__footer').classList.toggle('navigationbottom__footer__burger');
//    document.querySelector('.bottomnavigation-bottom').classList.toggle('bottomnavigation-bottom__burger');
//    document.querySelector('.socialmedia').classList.toggle('socialmedia__burger');
//});
//

/*instructors slider*/

//document.querySelector('.icon-arrowleft').addEventListener('click', function(event) {
//    document.querySelector('.instructorphotoimg').src='img/ins2big.png';
//})



//document.querySelector('.burger').addEventListener('click', function(event) {
//    event.preventDefault();
//    document.querySelector('.menu-adaptive').classList.add('visible');
//    document.querySelector('.header').classList.add('hidden');
//    document.querySelector('.content ').classList.add('hidden');
//    document.querySelector('.footer ').classList.add('hidden');
//});
//
//document.querySelector('.menu-adaptive__burgerclose').addEventListener('click', function(event) {
//    event.preventDefault();
//    document.querySelector('.menu-adaptive').classList.remove('visible');
//    document.querySelector('.header').classList.remove('hidden');
//    document.querySelector('.content ').classList.remove('hidden');
//    document.querySelector('.footer ').classList.remove('hidden');
//})

document.querySelector('.burger').addEventListener('click', function(event) {
    event.preventDefault();
    
    if (document.querySelector('.footernavigation').classList.contains('hidden')) {
        document.querySelector('.footernavigation').classList.remove('hidden');
        document.querySelector('.autoschool').classList.remove('hidden');
        document.querySelector('.contentdesktop').classList.remove('hidden');
        document.querySelector('.runstrip').classList.remove('hidden');
        document.querySelector('.filials').classList.remove('hidden');
        document.querySelector('.filials').classList.remove('hidden');
        document.querySelector('.instructors').classList.remove('hidden');
        document.querySelector('.faq').classList.remove('hidden');
        document.querySelector('.howfound').classList.remove('hidden');
        document.querySelector('.deaulus').classList.remove('hidden');
        document.querySelector('.logo-footer').classList.remove('hidden');
        document.querySelector('.footer').style.backgroundColor='#373737';
        document.querySelector('.menu_bottom').style.paddingTop = '80px';    
        document.querySelector('.navigationtop').style.paddingBottom = '23px'; 
        document.querySelector('.bottomnavigation-bottom').style.paddingBottom = '120px'; 
        document.querySelector('.footernavigation').classList.remove('hidden');
        let menuTopLinks = document.querySelectorAll('.navigationbottom__item');
        for (let i = 0; i < menuTopLinks.length; i++) {
            menuTopLinks[i].classList.remove('visible');
            menuTopLinks[i].classList.remove('marginrightnull');
        }
        document.querySelector('.adressadaptive').classList.remove('hidden');
        document.querySelector('.bigcall').classList.remove('hidden');
        document.querySelector('.menu_top').classList.remove('menuadaptive');
    } else {
        document.querySelector('.autoschool').classList.add('hidden');
        document.querySelector('.contentdesktop').classList.add('hidden');
        document.querySelector('.runstrip').classList.add('hidden');
        document.querySelector('.filials').classList.add('hidden');
        document.querySelector('.filials').classList.add('hidden');
        document.querySelector('.instructors').classList.add('hidden');
        document.querySelector('.faq').classList.add('hidden');
        document.querySelector('.howfound').classList.add('hidden');
        document.querySelector('.deaulus').classList.add('hidden');
        document.querySelector('.logo-footer').classList.add('hidden');
        document.querySelector('.footer').style.backgroundColor='white';

        document.querySelector('.menu_bottom').style.paddingTop = '0px';    
        document.querySelector('.navigationtop').style.paddingBottom = '0px'; 
        document.querySelector('.bottomnavigation-bottom').style.paddingBottom = '0px'; 
        document.querySelector('.footernavigation').classList.add('hidden');
        let menuTopLinks = document.querySelectorAll('.navigationbottom__item');
        for (let i = 0; i < menuTopLinks.length; i++) {
            menuTopLinks[i].classList.add('visible');
            menuTopLinks[i].classList.add('marginrightnull');
        }
        document.querySelector('.adressadaptive').classList.add('hidden');
        document.querySelector('.bigcall').classList.add('hidden');
        document.querySelector('.navigationbottom').style.backgroundColor='white';
        document.querySelector('.menu_top').classList.add('menuadaptive');
    }
       
});
                           
                           

