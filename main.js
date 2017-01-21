//var lineCounter = 0;

$(document).ready(() => {
    gv.nextLine();
    gm.lineCounter++;
    // clicking on text wrapper
    $('#text-wrapper').click(()=> {
        if(gm.lineCounter < chapter.length) {
            gv.nextLine();
            gv.nextName();
            gv.nextBg();
            gv.nextItem();
            gv.checkAvatar('left');
            gv.checkAvatar('right');
            gv.crazyMode();
            gm.lineCounter++;
        }
    });
}); // end of ready function

//=========== GAME VIEW =============
var gv = {
    // shows next line
    nextLine: () => { 
        $('#text-display').html(chapter[gm.lineCounter].text);
    },
    // if there's a character's name, it chooses a side and shows it
    nextName: () => {
        if(!chapter[gm.lineCounter].nameSide){
            $('#name-container').removeClass();
            $('#name-container').html('');
        }
        else {
            $('#name-container').html(chapter[gm.lineCounter].speaker);
            if(chapter[gm.lineCounter].nameSide === 'right'){
                $('#name-container').removeClass();
                $('#name-container').addClass('name-right');
            }
            else {
                $('#name-container').removeClass();
                $('#name-container').addClass('name-left');
            }
        }
        gv.darkenAvatar(chapter[gm.lineCounter].nameSide);
    }, // next name end
    nextBg: () => {
        if(!chapter[gm.lineCounter].backSpeed) {chapter[gm.lineCounter].backSpeed = 10}
        if(!chapter[gm.lineCounter].backPic){
            $('#background').fadeOut(chapter[gm.lineCounter].backSpeed);
        }
        else{
            var url = `url(img/backgrounds/${chapter[gm.lineCounter].backPic}.jpg`;
            $('#background').css('background-image', url);
            $('#background').fadeIn(chapter[gm.lineCounter].backSpeed);

        }
    },
    nextItem: () => {
        if(!chapter[gm.lineCounter].itemPic){
            $('#item-pic').hide('fast');
        }
        else {
            var url = `url(img/items/${chapter[gm.lineCounter].itemPic}.png`;
            $('#item-pic').css('background-image',url);
            $('#item-pic').show('fast');
        }
    },

    checkAvatar: (side) => {
        var avatarSide;
        if(side == 'left'){avatarSide = chapter[gm.lineCounter].avatarLeft;}
        if(side == 'right'){avatarSide = chapter[gm.lineCounter].avatarRight;}
        if(!avatarSide){
            $(`#avatar-pic-${side}`).fadeOut('fast');
        }
        else {
            if(!chapter[gm.lineCounter].emotion){chapter[gm.lineCounter].emotion = '01'}
            var url = `url(img/avatars/${avatarSide}/${chapter[gm.lineCounter].emotion}.png`;
            $(`#avatar-pic-${side}`).css('background-image',url);
            $(`#avatar-pic-${side}`).fadeIn('fast');
        }
    },

    darkenAvatar: (activeSide) => {
        (activeSide == 'right') ?
            ($('#darken-left').fadeIn('fast'), $('#darken-right').fadeOut('fast'))
            :
            ($('#darken-right').fadeIn('fast'), $('#darken-left').fadeOut('fast'));
    },

    crazyIdList: [],

    crazyMode: () => {
        if(!chapter[gm.lineCounter].crazyMode) {gv.crazyIdList.forEach((i) => clearTimeout(i));}
        if(chapter[gm.lineCounter].crazyMode) {
            var crazyId = setInterval(() => {
                $('.js-shake').animate({left: "+=5"}, 5);
                $('.js-shake').animate({left: "-=5"}, 5);
                console.log('!');
            }, 100);
        }
        gv.crazyIdList.push(crazyId);
    }
} //=========== game view end =============

//============= GAME MANAGER ==============
var gm = {
    lineCounter: 0
} //============ game manager end ==========

// var timerList = [];
// window.onload = init;
// function init() {
//     var clickArea = document.getElementById("text-wrapper");
//     clickArea.onclick = onClick;
//     nextSpeechLine(0);
// }

// function onClick() {
//     if (isStillRunning) {
//         timerList.forEach(function(i){clearTimeout(i)});
//         isStillRunning = false;
//         charText.innerHTML = chapter[lineCounter - 1].text;
//     } else {
//         nextSpeechLine(lineCounter);
//     }
// }

// //======== NEXT LINE EVENT ==========
// var isStillRunning = false;
// function nextSpeechLine(i) {
//     charName.innerHTML = chapter[i].speaker;
//     charText.innerHTML = '';
//     chapter[i].text.split('').forEach(function (letter, i, arr) {
//         var id = setTimeout(function () {
//             isStillRunning = true;
//             charText.innerHTML = charText.innerHTML + letter;
//             if (arr.length - 1 === i) {
//                 isStillRunning = false;
//             }
//         }, 50 * i)
//         timerList.push(id);
//     });

// } //======== NEXT LINE EVENT END==========
