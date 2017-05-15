/**
 *
 * HTML5 Audio player with playlist
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Script Tutorials
 * http://www.script-tutorials.com/
 */
jQuery(document).ready(function() {

    // inner variables
    var song;
    var tracker = $('.tracker');
    var volume = $('.volume');

    function initAudio(elem) {
        var url = elem.attr('audiourl');

        song = new Audio('player/sound/' + url);

        // timeupdate event listener
        song.addEventListener('timeupdate',function (){
            var curtime = parseInt(song.currentTime, 10);
            tracker.slider('value', curtime);
        });

        $('.playlist li').removeClass('active');
        elem.addClass('active');
    }
    function playAudio() {
        song.play();

        tracker.slider("option", "max", song.duration);

        $('.play').addClass('hidden')
        $('.pause').removeClass('hidden')
    }
    function stopAudio() {
        song.pause();

        $('.pause').addClass('hidden')
        $('.play').removeClass('hidden')
    }

    // play click

    $('.mejs__play').click(function (e) {
        e.preventDefault();

        playAudio();
    });
    // pause click
    $('.mejs__pause').click(function (e) {
        e.preventDefault();

        stopAudio();
    });

    // forward click
    $('.fwd').click(function (e) {
        e.preventDefault();

        stopAudio();
        $('.ui-slider-range').style='width:0%;';
        $('.ui-slider-handle').style='left:0%;';
        var next = $('.playlist li.active').next();
        if (next.length == 0) {
            next = $('.playlist li:first-child');
        }
        initAudio(next);
    });

    // rewind click
    $('.rew').click(function (e) {
        e.preventDefault();

        stopAudio();
        $('.ui-slider-range').style='width:0%;';
        $('.ui-slider-handle').style='left:0%;';
        var prev = $('.playlist li.active').prev();
        if (prev.length == 0) {
            prev = $('.playlist li:last-child');
        }
        initAudio(prev);
    });

    // show playlist

    // playlist elements - click
    $('.playlist li').click(function () {
        stopAudio();
        initAudio($(this));
    });

    // initialization - first element in playlist
    initAudio($('.playlist li:first-child'));

    // set volume

    // initialize the volume slider

    

    $('.mejs__mute').click(function (){
        if(song.volume==1)
        {
            song.volume=0;
            var mute=$('.mejs__mute');
            mute.removeClass('mejs__mute');
            mute.addClass('mejs__unmute');
        }
        else
        {
            song.volume=1;
            var mute=$('.mejs__unmute');
            mute.removeClass('mejs__unmute');
            mute.addClass('mejs__mute');
        }
    });

    // empty tracker slider
    tracker.slider({
        range: 'min',
        min: 0, max: 10,
        start: function(event,ui) {},
        slide: function(event, ui) {
            song.currentTime = ui.value;
        },
        stop: function(event,ui) {}
    });
});
