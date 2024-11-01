/*  
===============================================================================
PunchCard is a jQuery little tool for socializing a post, a page, or a site
...............................................................................
LICENSE: http://www.opensource.org/licenses/mit-license.php
WEBSITE: http://noteslog.com/punchcard/

											   Copyright 2007 / Andrea Ercolino
===============================================================================
*/

PunchCard = {
	  icons : ""       //path of the icons
	, styles: ""       //path of the stylesheets
	, holes : [        //array of definitions
		  { title: "Backflip"       , img: "backflip"        
			, url: "http://www.backflip.com/add_page_pop.ihtml?url=|URL|&title=|TITLE|" 
		}
		, { title: "BlinkBits"      , img: "blinkbits"       
			, url: "http://blinkbits.com/bookmarklets/save.php?v=1&source_url=|URL|&title=|TITLE|" 
		}
		, { title: "Blinklist"      , img: "blinklist"       
			, url: "http://www.blinklist.com/index.php?Action=Blink/addblink.php&Title=|TITLE|&Url=|URL|" 
		}
		, { title: "blogmarks"      , img: "blogmarks"       
			, url: "http://blogmarks.net/my/new.php?mini=1&simple=1&url=|URL|&title=|TITLE|" 
		}
		, { title: "Buddymarks"     , img: "buddymarks"      
			, url: "http://buddymarks.com/add_bookmark.php?bookmark_title=|TITLE|&bookmark_url=|URL|" 
		}
		, { title: "CiteUlike"      , img: "citeulike"       
			, url: "http://www.citeulike.org/posturl?url=|URL|&title=|TITLE|" 
		}
		, { title: "del.icio.us"    , img: "delicious"       
			, url: "http://del.icio.us/post?v=2&url=|URL|&title=|TITLE|" 
		}
		, { title: "Diigo"          , img: "diigo"           
			, url: "http://www.diigo.com/post?url=|URL|&title=|TITLE|" 
		}
		, { title: "digg"           , img: "digg"            
			, url: "http://digg.com/submit?phase=3&url=|URL|&title=|TITLE|" 
		}
		, { title: "dzone"          , img: "dzone"           
			, url: "http://www.dzone.com/links/add.html?url=|URL|&title=|TITLE|" 
		}
		, { title: "FeedMarker"     , img: "feedmarker"      
			, url: "http://www.feedmarker.com/admin.php?do=bookmarklet_mark&url=|URL|&title=|TITLE|" 
		}
		, { title: "Feed Me Links!" , img: "feedmelinks"     
			, url: "http://feedmelinks.com/categorize?from=toolbar&op=submit&name=|TITLE|&url=|URL|&version=0.7" 
		}
		, { title: "Furl"           , img: "furl"            
			, url: "http://www.furl.net/storeIt.jsp?t=|TITLE|&u=|URL|" 
		}
		, { title: "Give a Link"    , img: "givealink"       
			, url: "http://www.givealink.org/cgi-pub/bookmarklet/bookmarkletLogin.cgi?&uri=|URL|&title=|TITLE|" 
		}
		, { title: "Gravee"         , img: "gravee"          
			, url: "http://www.gravee.com/account/bookmarkpop?u=|URL|&t=|TITLE|" 
		}
		, { title: "Hyperlinkomatic", img: "hyperlinkomatic" 
			, url: "http://www.hyperlinkomatic.com/lm2/add.html?LinkTitle=|TITLE|&LinkUrl=|URL|" 
		}
		, { title: "igooi"          , img: "igooi"           
			, url: "http://www.igooi.com/addnewitem.aspx?self=1&noui=yes&jump=close&url=|URL|&title=|TITLE|" 
		}
		, { title: "kinja"          , img: "kinja"           
			, url: "http://kinja.com/id.knj?url=|URL|" 
		}
		, { title: "Lilisto"        , img: "lilisto"         
			, url: "http://lister.lilisto.com/?t=|TITLE|&l=|URL|" 
		}
		, { title: "Linkagogo"      , img: "linkagogo"       
			, url: "http://www.linkagogo.com/go/AddNoPopup?title=|TITLE|&url=|URL|" 
		}
		, { title: "Linkroll"       , img: "linkroll"        
			, url: "http://www.linkroll.com/index.php?action=insertLink&url=|URL|&title=|TITLE|" 
		}
/*		, { title: "looklater"      , img: "looklater"       
			, url: "http://api.looklater.com/bookmarks/save?url=|URL|&title=|TITLE|" 
		}
*/		, { title: "Magnolia"       , img: "magnolia"        
			, url: "http://ma.gnolia.com/bookmarklet/add?url=|URL|&title=|TITLE|" 
		}
		, { title: "maple"          , img: "maple"           
			, url: "http://www.maple.nu/bookmarks/bookmarklet?bookmark[url]=|URL|&bookmark[name]=|TITLE|" 
		}
/*		, { title: "MesFavs"        , img: ""                    
			, url: "http://mesfavs.com/bookmarks.php/?action=add&address=|URL|&title=|TITLE|" 
		}
*/		, { title: "Netscape"       , img: "netscape"        
			, url: "http://www.netscape.com/submit/?U=|URL|&T=|TITLE|" 
		}
		, { title: "netvouz"        , img: "netvouz"         
			, url: "http://netvouz.com/action/submitBookmark?url=|URL|&title=|TITLE|&popup=no" 
		}
		, { title: "Newsvine"       , img: "newsvine"        
			, url: "http://www.newsvine.com/_wine/save?u=|URL|&h=|TITLE|" 
		}
/*		, { title: "Raw Sugar"      , img: "rawsugar"        
			, url: "http://www.rawsugar.com/tagger/?turl=|URL|&tttl=|TITLE|&editorInitialized=1" 
		}
*/		, { title: "reddit"         , img: "reddit"          
			, url: "http://reddit.com/submit?url=|URL|&title=|TITLE|" 
		}
		, { title: "Rojo"           , img: "rojo"            
			, url: "http://www.rojo.com/add-subscription/?resource=|URL|" 
		}
/*		, { title: "Scuttle"        , img: "scuttle"         
			, url: "http://scuttle.org/bookmarks.php/?action=add&address=|URL|&title=|TITLE|" 
		}
*/		, { title: "Segnalo"        , img: "segnalo"         
			, url: "http://segnalo.com/post.html.php?url=|URL|&title=|TITLE|" 
		}
/*		, { title: "Shadows"        , img: "shadows"         
			, url: "http://www.shadows.com/shadows.aspx?url=|URL|" 
		}
*/		, { title: "Simpy"          , img: "simpy"           
			, url: "http://simpy.com/simpy/LinkAdd.do?title=|TITLE|&href=|URL|&v=6&src=bookmarklet" 
		}
		, { title: "Spurl"          , img: "spurl"           
			, url: "http://www.spurl.net/spurl.php?v=3&title=|TITLE|&url=|URL|" 
		}
		, { title: "Squidoo"        , img: "squidoo"         
			, url: "http://www.squidoo.com/lensmaster/bookmark?|URL|" 
		}
		, { title: "tagtooga"       , img: "tagtooga"        
			, url: "http://www.tagtooga.com/tapp/db.exe?c=jsEntryForm&b=fx&title=|TITLE|&url=|URL|" 
		}
		, { title: "Tailrank"       , img: "tailrank"        
			, url: "http://tailrank.com/share/?title=|TITLE|&link_href=|URL|" 
		}
		, { title: "Technorati"     , img: "technorati"      
			, url: "http://technorati.com/faves/?add=|URL|" 
		}
		, { title: "unalog"         , img: "unalog"          
			, url: "http://unalog.com/my/stack/link?url=|URL|&title=|TITLE|" 
		}
		, { title: "Wink"           , img: "wink"            
			, url: "http://www.wink.com/_/tag?url=|URL|&doctitle=|TITLE|" 
		}
		, { title: "wists"          , img: "wists"           
			, url: "http://www.wists.com/r.php?r=|URL|&title=|TITLE|" 
		}
		, { title: "Yahoo My Web"   , img: "yahoo"           
			, url: "http://myweb2.search.yahoo.com/myresults/bookmarklet?u=|URL|&t=|TITLE|" 
		}
		, { title: "zurpy"          , img: "zurpy"           
			, url: "http://tag.zurpy.com/?box=1&url=|URL|&title=|TITLE|" 
		}
	]
};


////////////////////////////////////////////////////////////////// ADDONS START

//------------------------------------------------------------------CRC32 START
(function() {
	var table = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";	

	/* Number */
	crc32 = function( /* String */ str, /* Number */ crc ) {
		if( crc == window.undefined ) crc = 0;
		var n = 0; //a number between 0 and 255
		var x = 0; //an hex number

		crc = crc ^ (-1);
		for( var i = 0, iTop = str.length; i < iTop; i++ ) {
			n = ( crc ^ str.charCodeAt( i ) ) & 0xFF;
			x = "0x" + table.substr( n * 9, 8 );
			crc = ( crc >>> 8 ) ^ x;
		}
		return crc ^ (-1);
	};
})();
//--------------------------------------------------------------------CRC32 END

//-----------------------------------------------------------------Cookie START
// this is by Klaus Hartl (http://stilbuero.de)
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toGMTString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toGMTString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
//-------------------------------------------------------------------Cookie END

//--------------------------------------------------------Metaobjects 1.3 START
( function($) {
$.metaobjects = function( options ) {

	options = $.extend( {
		  context:  document
		, clean:    true
		, selector: 'object.metaobject'
	}, options );

	function jsValue( value ) {
		eval( 'value = ' + value + ";" );
		return value;
	}

	return $( options.selector, options.context )
	.each( function() {

		var settings = { target: this.parentNode };
		$( '> param[@name=metaparam]', this )
		.each( function() { 
			$.extend( settings, jsValue( this.value ) );
		} );

		$( '> param', this )
		.not( '[@name=metaparam]' )
		.each( function() {
			var name = this.name, value = jsValue( this.value );
			$( settings.target )
			.each( function() {
				this[ name ] = value;
			} );
		} );

		if( options.clean ) {
			$( this ).remove();
		}
	} );
}
} ) ( jQuery );
//----------------------------------------------------------Metaobjects 1.3 END

//----------------------------------------------------------------CoolTip START
(function($) {
	
	// cooltip and the ct_ prefix are specific to this script

	var $ct_cooltip;    // saved reference to the cooltip div
	var $ct_title;      // saved reference to the title span inside the cooltip div
	var $ct_img;        // saved reference to the img inside the cooltip div
	var ct_options;     // options: a dictionary + offsetX and offsetY
	var ct_d;           // ct_options.dictionary shortcut
	var ct_oldTitle;    // the title attribute of the hovered element, if any
	var ct_that;        // currently hovered element
	
	function ct_bind( event ) {
		if( this == ct_that ) return;

		ct_that = this;
		var $this = $(this);

		ct_oldTitle = $this.attr( "title" );
		$this.attr( "title", "" );

		if( ct_d ) {
			var id = $this.attr( "id" ).substr( 1 );
			if( "" != id ) {
				i = parseInt( id );
				if( 0 <= i && i < ct_d.tooltips.length ) {
					var def = ct_d.tooltips[ i ];
					if( def.img ) {
						$ct_img.attr( "class", "icon-" + def.img );
					}
					else {
						$ct_img.attr( "class", "icon-" );
					}
					$ct_title.html( def.title );
					$ct_cooltip.show();
				}
				else {
					$ct_img.attr( "class", "icon-" );
				}
			}
			else {
				$ct_img.attr( "class", "icon-" );
			}
		}
		else if( ct_oldTitle != "" ) {
//			$ct_img.hide();
			$ct_img.attr( "class", "icon-" );
			$ct_title.html( ct_oldTitle );
			$ct_cooltip.show();
		}

		$( "body" ).bind( "mousemove", ct_update );
		ct_update( event );
		$this.bind( "mouseout", ct_hide );
	}
	
	function ct_update( event )	{

		function mouse(c) {
			var p = c == "X" ? "Left" : "Top";
			return event["page" + c] 
				|| (
					event["client" + c] 
					+ (
						document.documentElement["scroll" + p] 
						|| document.body["scroll" + p]
					)
				) 
				|| 0
			;
		}
		
		// if no current element is available, remove this listener
		if( ct_that == null ) {
			$( "body" ).unbind( "mousemove", ct_update );
			return;	
		}
		
		$ct_cooltip.css({ 
			  top:  mouse( "Y" ) + ct_options.offset.Y + "px"
			, left: mouse( "X" ) + ct_options.offset.X + "px" 
		});
	}
	
	function ct_hide()	{
		ct_that = null;
		$ct_cooltip.hide();
		$( this )
			.attr( "title", ct_oldTitle )
			.unbind( "mouseout", ct_hide )
		;
	}

	$.fn.cooltip = function( options ) {
		ct_options = $.extend({
			  dictionary: null 
			, offset:     { X: 15, Y: -10 }
		}, options || {});
		ct_d = ct_options.dictionary;

		// there can be only one cooltip
		if( ! $ct_cooltip ) {
			$ct_cooltip = $( '<div class="cooltip"><b class="b1"></b><b class="b2"></b><b class="b3"></b><b class="b4"></b><div id="ct_tooltip"><img src="' + PunchCard.icons + '1x1.png" /><span></span></div><b class="b4"></b><b class="b3"></b><b class="b2"></b><b class="b1"></b></div>' )
				.appendTo( "body" )
				.hide()
				.css({ position: "absolute", zIndex: 3000 })
			;
				
			$ct_title = $( "span", $ct_cooltip );
			$ct_img = $( "img", $ct_cooltip );
		}
		
		// bind events for every selected element
		$( this ).bind( "mouseover", ct_bind );

		return this;
	};
	
})(jQuery);
//------------------------------------------------------------------CoolTip END

//////////////////////////////////////////////////////////////////// ADDONS END


//--------------------------------------------------------------PunchCard START
(function( $ ) {
/*
'punch' and 'pc_' prefixes are specific to this script
*/

//======================================================================= START
$( function() {

	var $punchcards = $( "div.punchcard" );
	if( ! $punchcards.length ) return;

/*
The following properties should be changed only when customizing PunchCard

punchcard DOM STRUCTURE (simplified)
	a punchcard div contains one pc_card div     (wrap1)
	a pc_card div   contains many punchhole divs (size)
	a punchhole div contains one pc_hole div     (wrap2)
*/
	var pc_size =    45; // # of available holes in the punchcard (>= PunchCard.holes.length)
	var pc_wrap1 =      // punchcard and pc_card
		'<b class="b1"></b><b class="b2 bg1"></b><b class="b3 bg1"></b><b class="b4 bg1"></b><div class="pc_home bg1"><a href="http://noteslog.com/punchcard/" target="_blank">PunchCard</a><span>a jQuery widget</span></div><div class="pc_card bg1"></div><b class="b5 bg1"></b><b class="b6"></b>';
	var pc_wrap2 =      // punchhole and pc_hole
		[
			  '<div class="punchhole"><div class="pc_hole bc1 '
			, ''
			, '" id="'
			, ''
			, '" title="'
			, ''
			, '"></div></div>'
		]
	;
/*
The following properties should never be changed
*/
	var pc_crc     = ""; // crc of the PunchCard.holes
	var pc_title   = ""; // title of the widget of the resource to submit
	var pc_id      = ""; // id of the widget/resource to submit
	var pc_url     = ""; // url of the resource to submit
	var pc_punched = ""; // string of just the punched PunchCard.holes

	loadCSS( PunchCard.styles + "corners.css" );
	loadCSS( PunchCard.styles + "punchcard.css" );

	$.metaobjects( {selector: "div.punchcard > object"} );

	pc_crc = crc32( pc_blob() );

// ..punchcard generation and click binding...............................start
	$punchcards.each( function() {

		var $punchcard = $( this );

		pc_read( $punchcard );

		$punchcard.append( pc_wrap1 );
		var $pc_card = $( "div.pc_card", $punchcard );

		for( var i = 0, top = PunchCard.holes.length; i < top; i++ ) {
			if( i == pc_size ) break;

			pc_wrap2[1] = pc_is_punched( i ) ? "punched" : "punchable";
			pc_wrap2[3] = "_"+i;
			pc_wrap2[5] = PunchCard.holes[ i ].title;

			var $punchhole = $( pc_wrap2.join("") )
				.click( function() { 
					return pc_click( this ); 
				});
			$pc_card.append( $punchhole );
		}

		$( "div.pc_home", $punchcard ).hide();
		$punchcard.click( function() {
			$( "div", this ).toggle();
		} );

	} );
//..........................................................................end

// ..cooltip generation and hover binding.................................start
	$( "div.pc_hole" )
		.cooltip({ dictionary: { 
			imgPath : PunchCard.icons, 
			tooltips: PunchCard.holes 
		} });
//--------------------------------------------------------------------------end

//========================================================================= END

// ::DECLARATIONS:::::::::::::::::::::::::::::::::::::::::::::::::::::::::start

	function loadCSS( stylesheetPath ) {
		var link = '<link rel="stylesheet" type="text/css"'
			+ ' href="' + stylesheetPath + '">'
		;
		if ($.browser.msie) {
			link = document.createElement( link );
		}
		$("head").append( link );
	}

	function pc_read( $punchcard ) {
		var data   = $punchcard[0].punchcard; //metaobject-ized
		pc_id      = data.id;
		pc_title   = data.title;
		pc_url     = data.url;
		pc_punched = pc_get_punched();
	}

	function pc_blob() {
		var s = [];
		for( var i = 0, top = PunchCard.holes.length; i < top; i++ ) {
			s.push( PunchCard.holes[i].title );
		}
		return s.join( "|" );
	}

	function pc_click( that ) {
		var $pc_hole = $( "div.pc_hole", that );
		var $punchcard = $( $pc_hole ).parent().parent().parent();
		/* ----------------------------------------------------------------- *
		 * $pc_hole.parent().parent().parent() changes $pc_hole too !!       *
		 * ----------------------------------------------------------------- */

		pc_read( $punchcard );

		pc_set_punched( $pc_hole.attr( "id" ).substr( 1 ) );
		$pc_hole.attr( "class", $pc_hole.attr( "class" )
			.replace( /\bpunchable\b/, "punched" ) 
		);

		var siteURL = PunchCard.holes[ $pc_hole.attr( "id" ).substr( 1 ) ].url
			.replace( "|TITLE|", escape( pc_title ) )
			.replace( "|URL|", escape( pc_url ) 
		);
		window.open( siteURL, "_blank" );
		return false;
	}

	function pc_is_punched( i ) {
		return "" == pc_punched ? 
			false 
			: pc_punched.indexOf( "(" + i + ")" ) > -1;
	}

	function pc_get_punched() {
		var cookie = $.cookie( escape( pc_id ) );
		if( ! cookie )                      return "";
		var obj_cookie = pc_unpack( cookie );
		if( obj_cookie.url != pc_url ) return "";
		if( obj_cookie.crc != pc_crc ) return "";
		return obj_cookie.punched;
	}

	function pc_set_punched( i ) {
		if( ! pc_is_punched( i ) ) pc_punched += "(" + i + ")";
		var obj_cookie = {url: pc_url, crc: pc_crc, punched: pc_punched};
		var cookie = pc_pack( obj_cookie );
		$.cookie( escape( pc_id ), cookie, {expires: 30, domain: ""} );
	}

	function pc_pack( obj_cookie ) {
		var cookie = "";
		for( var i in obj_cookie ) {
			cookie += i + ":" + obj_cookie[i] + "|";
		}
		return cookie;
	}

	function pc_unpack( cookie ) {
		var obj_cookie = {};
		var re = /([^:]+):([^\|]*)\|/g;
		var a = re.exec( cookie );
		while( a ) {
			obj_cookie[a[1]] = a[2];
			a = re.exec( cookie );
		}
		return obj_cookie;
	}
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::end

} );
} ) ( jQuery );
//----------------------------------------------------------------PunchCard END
