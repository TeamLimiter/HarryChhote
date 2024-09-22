//$(function(){
	var topLanguage = $('#toplanguage').attr('lau'),
		topBarClass = 'universal_topbar_'+topLanguage,
		homeText = 'Home',
		charactersText = 'Characters',
		newsText = 'News',
		screenshotsText = 'Screenshots',
		videoshotsText = 'Videos',
		introductionhotsText = 'Introduction',
		fullUrl = 'https://opmw.perfectworld.com/payment/'+topLanguage+'/index.html';
	var logoAlt = 'onepunchmanworld/one punch man/game/action/saitama/jump/anime';
	if(topLanguage == 'id'){
		homeText = 'Beranda';
		charactersText = 'Karakter';
		newsText = 'Berita';
		screenshotsText = 'Screenshots';
		videoshotsText = 'Video';
		introductionhotsText = 'Pencapaian';
		logoAlt = 'onepunchmanworld/one punch man/game/aksi/saitama/lompat/anime';
	}else if(topLanguage == 'th'){
		homeText = 'à¸«à¸™à¹‰à¸²à¹à¸£à¸';
		charactersText = 'à¸•à¸±à¸§à¸¥à¸°à¸„à¸£';
		newsText = 'à¸‚à¹ˆà¸²à¸§à¸ªà¸²à¸£';
		screenshotsText = 'à¸Ÿà¸µà¹€à¸ˆà¸­à¸£à¹Œà¹€à¸à¸¡';
		videoshotsText = 'à¸§à¸µà¸”à¸µà¹‚à¸­';
		introductionhotsText = 'à¸„à¸³à¹à¸™à¸°à¸™à¸³à¸ªà¸¹à¹ˆ';
		logoAlt = 'onepunchmanworld/à¸§à¸±à¸™à¸žà¸±à¸™à¸Šà¹Œà¹à¸¡à¸™/à¹€à¸à¸¡/à¹à¸­à¸„à¸Šà¸±à¹ˆà¸™/à¹„à¸‹à¸•à¸²à¸¡à¸°/à¸ˆà¸±à¸¡à¸›à¹Œ/à¸­à¸™à¸´à¹€à¸¡à¸°';
	}
	var topbarStr = '<div class="universal_topbar '+topBarClass+'">\
		<a href="https://opmw.perfectworld.com/en/home.html"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiP2FAguPPqDP0xDtl8khJB-zWjkycTgE1DQmHFQILCZcwuxcFSqTVsIG3xdsoZ54WXQpp8epQROSjf7sDl2QkkzkXjCmn_xBI0i9m2IsZIPOivQj3FIDjmEXAg2SQ07cPQoOXxRPtbvWcquIwBIYq4JEMd7nqORHwfh7jOtPdDI2UDN7zk-GlQ-OGlhsxv/s1600/logo.png" alt="'+logoAlt+'" class="top_logo"></a>\
		<div class="topbar_cont">\
			<ul class="topbar_nav">\
				<li class="publicGoogleAnalytics" type="Home_default_click" barnav="home">'+homeText+'<span></span></li>\
				<li class="publicGoogleAnalytics" type="character_default_click" barnav="characters">'+charactersText+'<span></span></li>\
				<li class="publicGoogleAnalytics" type="NewsBar_default_click" barnav="news">'+newsText+'<span></span></li>\
				<li class="publicGoogleAnalytics" type="Screenshots_default_click" barnav="screenshots">'+screenshotsText+'<span></span></li>\
				<li class="publicGoogleAnalytics" type="video_default_click" barnav="videos">'+videoshotsText+'<span></span></li>\
				<li class="publicGoogleAnalytics" type="introduction_default_click" barnav="introduction">'+introductionhotsText+'<span></span></li>\
			</ul>\
			<a class="btn_full publicGoogleAnalytics" type="Topup_default_click" href="'+fullUrl+'" target="_blank"></a>\
		</div> \
		<div id="topbar_menu" class="menu_on"></div>\
	</div>';
	$('body').append(topbarStr);
	$(document).on('click','#topbar_menu',function(){
        if($(this).hasClass('menu_on')){
            $('.topbar_cont').show();
            $(this).attr('class','menu_off');
        }else{
            $('.topbar_cont').hide();
            $(this).attr('class','menu_on');
        }
    });
	$(document).on('click','.topbar_nav li',function(){
        if(!$(this).hasClass('on')){
			var barnav = $(this).attr('barnav');
			var clientWidth = document.documentElement.clientWidth;
			showPage(barnav);
			if(clientWidth <= 750){
				$('.topbar_cont').hide();
				$('#topbar_menu').attr('class','menu_on');
			}
		}
    });
	window.addEventListener('resize', function(){
		var clientWidth = document.documentElement.clientWidth;
		if(clientWidth > 750){
			$('.topbar_cont').show();
		}else{
			$('.topbar_cont').hide();
			$('#topbar_menu').attr('class','menu_on');
		}
	}, false);
//});
