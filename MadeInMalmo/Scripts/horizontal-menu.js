// ---> Visma eAccounting
// Top main menu
$(function() {
  var loc = window.location.href; // returns the full URL
  if(/index.php/.test(loc)) {
	$('#TheSource').parent().addClass('active');
	$('.navbar-brand').addClass('active');
	$('#tab2').addClass('fade in active');
  }  
  else if(/GettingStarted.php/.test(loc)) {
	$('#TheSource').parent().addClass('active');
	$('#GettingStarted').addClass('active');
	$('#tab2').addClass('fade in active');
  }
  else if(/CSS.php/.test(loc)) {
	$('#TheSource').parent().addClass('active');
	$('#CSS').addClass('active');
	$('#tab2').addClass('fade in active');
  }
  else if(/Components.php/.test(loc)) {
	$('#TheSource').parent().addClass('active');
	$('#Components').addClass('active');
	$('#tab2').addClass('fade in active');
  }
  else if(/JavaScript.php/.test(loc)) {
	$('#TheSource').parent().addClass('active');
	$('#JavaScript').addClass('active');
	$('#tab2').addClass('fade in active');
  }
  else if(/examplePage.php/.test(loc)) {
	$('#TheSource').parent().addClass('active');
	$('#examplePage').addClass('active');
	$('#tab2').addClass('fade in active');
  }
  else if(/examplePageII.php/.test(loc)) {
	$('#TheSource').parent().addClass('active');
	$('#examplePageII').addClass('active');
	$('#tab2').addClass('fade in active');
  }
  else if(/Velkommen.php/.test(loc)) {
	$('#TheSource').parent().addClass('active');
	$('#Velkommen').addClass('active');
	$('#tab2').addClass('fade in active');
  }
  else if(/Customers.php/.test(loc)) {
	$('#TheSource').parent().addClass('active');
	$('#Customers').addClass('active');
	$('#tab2').addClass('fade in active');
  }
  else if(/Customers-newCustomer.php/.test(loc)) {
	$('#TheSource').parent().addClass('active');
	$('#newCustomer').addClass('active');
	$('#tab2').addClass('fade in active');
  }
  else if(/loginPage.php/.test(loc)) {
	$('#TheSource').parent().addClass('active');
	$('#loginPage').addClass('active');
	$('#tab2').addClass('fade in active');
  }
  else if(/loginPage2.php/.test(loc)) {
	$('#TheSource').parent().addClass('active');
	$('#loginPage2').addClass('active');
	$('#tab2').addClass('fade in active');
  }
  else if(/eAccounting/.test(loc)) {
	$('#TheSource').parent().addClass('active');
	$('#eAccounting').addClass('active');
	$('#tab2').addClass('fade in active');
  }
});
	
	