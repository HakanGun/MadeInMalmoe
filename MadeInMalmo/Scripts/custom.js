/*!
 * Small scripts for active/focus demo state for tabs, buttons, progress bar, pills, navigation - DO NOT USE ANY OF THIS JAVASCRIPT
 * IT'S ALL JUST JUNK FOR OUR DOCS!
 * 
 */
 
	// Add ie10 class for the html tag in IE10
	if (Function('/*@cc_on return document.documentMode===10@*/')()){
		document.documentElement.className+=' ie10';
	} 
	
	// Add ie11 class for the html tag in IE11
	jQuery(window).load(function() {
		if(navigator.userAgent.match(/Trident.*rv:11\./)) {
			jQuery('html').addClass('ie11');
		}
	});

	// Progress bar script 
	setTimeout(function(){
		$('.progress .progress-bar').each(function() {
			var me = $(this);
			var perc = me.attr("aria-valuemax");
			var current_perc = 0;
			var progress = setInterval(function() {
				if (current_perc>=perc) {
					clearInterval(progress);
				} else {
					current_perc +=1;
					me.css('width', (current_perc)+'%');
				}
				$('.counter').text((current_perc)+'%');
			}, 50);
		});
	},100); 

	// Active states for buttons, pills, tabs 
	// Pills 
	$('.nav-pills a').click(function() {
		$('.nav-pills a').parent().removeClass('active');    
		$(this).parent().addClass('active');
	}); 
	$('#nav-pills button').click(function() {
		$('#pillsGroup button').removeClass('active');    
		$(this).addClass('active');
	}); 

	//Button toolbar
	$('.btn-toolbar button').click(function() {
		$('.btn').removeClass('active');    
		$(this).addClass('active');
	}); 
	
	// Second level navigation
	$('#navbar-tabs a#Home-nav, #navbar-tabs-lg a#Home-nav-lg').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
		$('#tab1').addClass('in active');
		$('#tab2').removeClass('in active');
		$('#tab3').removeClass('in active');
	})
	$('#navbar-tabs a#Link-nav, #navbar-tabs-lg a#Link-nav-lg').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
		$('#tab2').addClass('in active');
		$('#tab1').removeClass('in active');
		$('#tab3').removeClass('in active');
	})
	$('#navbar-tabs a#Link2-nav, #navbar-tabs-lg a#Link2-nav-lg').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
		$('#tab3').addClass('in active');
		$('#tab1').removeClass('in active');
		$('#tab2').removeClass('in active');
	})
	
	
	// Components pages
	// Navbars - active class for each element from menu when click 
	$('#navbars-example1 li a').click(function() {
		$('#navbars-example1 li a').parent().removeClass('active');    
		$(this).parent().addClass('active');
		if ($('#navbars-example1 li').hasClass('dropdown')) {
			$('#navbars-example1 li.dropdown a').parent().removeClass('active'); 
		}
	}); 

	$('#navbars-example2 li a').click(function() {
		$('#navbars-example2 li a').parent().removeClass('active');    
		$(this).parent().addClass('active');
		if ($('#navbars-example2 li').hasClass('dropdown')) {
			$('#navbars-example2 li.dropdown a').parent().removeClass('active'); 
		}
	}); 
	
	$('#navbars-example3 li a').click(function() {
		$('#navbars-example3 li a').parent().removeClass('active');    
		$(this).parent().addClass('active');
		if ($('#navbars-example3 li').hasClass('dropdown')) {
			$('#navbars-example3 li.dropdown a').parent().removeClass('active'); 
		}
	}); 
	
	$('#navbars-example4 li a').click(function() {
		$('#navbars-example4 li a').parent().removeClass('active');    
		$(this).parent().addClass('active');
		if ($('#navbars-example4 li').hasClass('dropdown')) {
			$('#navbars-example4 li.dropdown a').parent().removeClass('active'); 
		}
	}); 
	
	
	
	// ---> Example page:
	
	//Sorting table columns from the eAccounting demo pages: http://thesource.visma.com/resources/nc2/latest/eAccounting/quotes.php
	$("#sort, #sort2, #sort3").click(function(){
		$("#sortTable, #sortTable2, #sortTable3, #sortTable4, #sortTable5, #sortTable6, #sortTable7, #sortTable8").jSort({
			sort_by: 'sortCol',
			item: 'div',
			order: 'asc'
		});
	});
	$("#sort, #sort2, #sort3").click(function(){
		$("#sortTable, #sortTable2, #sortTable3, #sortTable4, #sortTable5, #sortTable6, #sortTable7, #sortTable8").jSort({
			sort_by: 'sortCol',
			item: 'div',
			order: 'desc'
		});
	});
	$('#sort p, #sort2 p, #sort3 p').on('click', function () {
		$(this).toggleClass('sortDown sortUp');
	});
	
	//Button toolbar from the eAccounting demo pages: http://thesource.visma.com/resources/nc2/latest/eAccounting/quotes.php
	$('.btn-toolbar button').click(function() {
		$('.btn').parent().removeClass('activeParent');    
		$(this).parent().addClass('activeParent');
	}); 
	
	// Collapsible table fields: http://thesource.visma.com/resources/nc2/latest/eAccounting/reconciliation.php
	$(document).ready(function(){
	  $(".hideField").click(function(){
		$(this).parent().parent().parent().parent().parent().parent().hide();
	  });
	});
	$('.panel').on('click', function () {
		$(this).toggleClass('panelOpen panelClosed');
	});
	

	
	// ---> Visma eAccounting scripts:
	// Tabs (Company settings page)
	$('#myTab a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})
	

	
	
	// ---> Datepicker
	$(function() { $( "#datepicker, #datepicker1, #datepicker2, #datepicker3, #datepicker4, #datepicker5" ).datepicker(); });
	$(function() { $( ".datepicker, .datepicker1, .datepicker2, .datepicker3, .datepicker4, .datepicker5" ).datepicker(); });
	
