var app = window.app || {};

(function($){
	'use strict';

	app.init = function(){
		var productos = [
			{
				id : 1,
				img : 'asset/cigjacket2.png',
				name : 'Libertad 5oz',
				price : 299.00,
				desc : 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
			},
			{
				id : 2,
				name : 'Libertad 5oz',
				img : 'asset/cigjacket2.png',
				price : 199.00,
				desc : 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
			},
			{
				id : 3,
				name : 'Libertad 5oz',
				img : 'asset/cigjacket2.png',
				price : 99.00,
				desc : 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
			},
			{
				id : 5,
				name : 'Libertad_05',
				img : 'asset/cigjacket2.png',
				price : 60.00,
				desc : 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
			},
			{
				id : 6,
				name : 'Libertad_06',
				img : 'asset/cigjacket2.png',
				price : 180.00,
				desc : 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
			},
			{
				id : 7,
				name : 'Libertad_07',
				img : 'asset/cigjacket2.png',
				price : 40.00,
				desc : 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
			},
			{
				id : 8,
				name : 'Libertad_08',
				img : 'asset/cigjacket2.png',
				price : 80.00,
				desc : 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
			},
			{
				id : 9,
				name : 'Libertad_09',
				img : 'asset/cigjacket2.png',
				price : 80.00,
				desc : 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
			},
			{
				id : 10,
				name : 'Libertad_010',
				img : 'asset/cigjacket2.png',
				price : 120.00,
				desc : 'Libertad 5oz BU 1998 Contains 1 Libertad 5oz BU brilliant uncirculated .999 fine Silver. In capsule The same coin as you see in this picture. We only Ship to the US, and is FREE Shipping Shipping time 5-7 business days via UPS express with tracking and insurance. Payments only via Paypal.',
			}
		],
		wrapper = $('.productosWrapper'),
		contenido = ''


		for(var i = 0; i < productos.length; i++){

				contenido+= '<div class="col-md-6 col-sm-6 col-xs-12 coin-wrapper">'
				contenido+= '		<img onmouseover="app.showProduct(' + i + ')" onmouseleave = "app.hideProduct(' + i + ')" src="'+productos[i].img+'" alt="'+productos[i].name+'">'
				contenido+= '		<div class="col-md-5 col-sm-5 col-xs-5"><div class="columns product-details">'
				contenido+= '			<h4>'+productos[i].name+'</h4>'
				contenido+= '		 	<div class="price">$'+productos[i].price+' USD</div></div></div>'
				contenido+= '		<div class="col-md-7 col-sm-7 col-xs-7"><a id="product-' + i + '" class="tile-circle tile-show"><span class="col1"></span><span class="col2"></span><span class="col3"></span><span class="col4"></span><span class="col5"></span><span class="col6"></span></a></div>'
				contenido+= '		<div class="clearfix"></div>'
				contenido+= '</div>'

		}

		
		app.showProduct= function(id) {
			document.getElementById('product-' + id).style.display = "block";
		}

		app.hideProduct= function(id) {
			document.getElementById('product-' + id).style.display = "none";
		}

		wrapper.html(contenido)

		
	}

	

	$(document).ready(function(){
		app.init()
	})

})(jQuery)