var angularMiniShopApp = angular.module('angularMiniShop', ['ngRoute']);
angularMiniShopApp.config(function ($routeProvider) {
    $routeProvider
        .when("/",
            {
                template: "" +
                    "<div class='' data-ng-show='query != &apos;&apos;'>" +
                    "    <div class='' style='background-color: white'><h6>Queries: {{ query }}</h6></div>" +
                    "</div>" +
                    "<div class='main-div'>" +
                    "	<div class='product' style='background-color: white' data-ng-repeat='product in products | filter : query'>" +
                    "    	<div class=''>" +
                    "        	<div class='image-container'>" +
                    "            	<div class='frame'><img class='img-fluid' src='images/{{ product.image }}''></div>" +
                    "        	</div>" +
                    "    	</div>" +
                    "    	<div class='cell colspan2'>" +
                    "        	<h3>{{ product.name }}</h3>" +
                    "        	<p>{{ product.description }}</p>" +
                    "        	<div>" +
                    "            	<p class='price font-weight-bold'>{{ product.price | currency: 'PLN ' }}</p>" +
                    "            	<p class='stock text-right'><b>Stock:</b> {{ product.stock }} pcs</p>" +
                    "        	</div>" +
                    "        	<div class='row' style='margin-top: 25px;'>" +
                    "        	    <div class='colors' style='margin-top: 25px;'>" +
                    "                	<button class='btn btn-light' data-ng-click='count = count + 1' ng-init='count=0'>Like {{ count }}</button>" +
                    "                	<div class='dropdown'>" +
                    "                    	<button class='btn btn-light dropdown-toggle'type='button' data-toggle='dropdown'>Share <span class='caret'></span></button>" +
                    "                    	<ul class='dropdown-menu'>" +
                    "                        	<li><a href='#/'>Facebook</a></li>" +
                    "                        	<div class='dropdown-divider'></div>" +
                    "                        	<li><a href='#/'>Twitter</a></li>" +
                    "                    	</ul>" +
                    "                	</div>" +
                    "                	<button class='btn btn-light' data-ng-click='buy(product.id)'><svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-cart3\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
                    "  <path fill-rule=\"evenodd\" d=\"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z\"/>\n" +
                    "</svg></button>" +
                    "        	    </div>" +
                    "        	</div>" +
                    "    	</div>" +
                    "	</div>" +
                    "</div>"
            })
        .when("/cart",
            {
                template: "" +
                    "<div class='main-div--cart'>" +
                    "	<div class='container'>" +
                    "    	<div class='cell offset1 colspan3 padding10 bg-white' style='background-color: white'><h6>Total cart: {{ (products | filter: { in_cart : true }).length }}</h6></div>" +
                    "	</div>" +
                    "<h2>Your Cart Items</h2>" +
                    "                  <table class='table table-hover checkout'>" +
                    "                    <tbody>" +
                    "                      <tr>" +
                    "                        <th class='text-center'>Name</th>" +
                    "                        <th class='text-center'>Qty.</th>" +
                    "                        <th class='text-right'>Price</th>" +
                    "                        <th class='text-right'>Total</th>" +
                    "                      </tr>" +
                    "                      <tr data-ng-repeat='product in products | filter : qry.in_cart=true'>" +
                    "                        <th class='text-center'>{{ product.name }}</th>" +
                    "                        <th class='text-center items'>{{ product.buy }}</th>" +
                    "                        <th class='text-right'>{{ product.price }}</th>" +
                    "                        <th class='text-right total'>{{ product.price * product.buy }}</th>" +
                    "                      </tr>" +
                    "					  <tr>" +
                    "                        <th colSpan='2'>Total</th>" +
                    "                        <th class='text-center' id='sum1'>{{ (products | filter: { in_cart : true }).length }}</th>" +
                    "                        <th></th>" +
                    "                        <th class='text-right price' id='sum2'></th>" +
                    "                      </tr>" +
                    "                    </tbody>" +
                    "                  </table>" +
                    "</div>"
                    // "<script>var sum1=0,sum2=0;$(\"#category tr\").not(\":first\").not(\":last\").each(function(){function t(t){return s=t,!isNaN(parseFloat(s))&&isFinite(s)?parseInt(t,10):0;var s}sum1+=t($(this).find(\"td:eq(2)\").text()),sum2+=t($(this).find(\"td:eq(3)\").text())}),$(\"#sum1\").text(sum1),$(\"#sum2\").text(sum2);</script>"
            })
        .when("/category",
            {
                template: "" +
                    "<div class='grid'>" +
                    "	<div class='row cells5' data-ng-show='query != &apos;&apos;'>" +
                    "    	<div class='cell offset1 colspan3 padding10 bg-white' style='background-color: white'><h6>Queries: Only show in home page</h6></div>" +
                    "	</div>" +
                    "	<div class='row cells5 padding10' style='background-color: white' data-ng-repeat='product in products | filter : queryObj'>" +
                    "    	<div class='cell colspan3'>" +
                    "        	<div class='image-container'>" +
                    "            	<div class='frame'><img src='images/{{ product.image }}''></div>" +
                    "        	</div>" +
                    "    	</div>" +
                    "    	<div class='cell colspan2'>" +
                    "        	<h3>{{ product.name }}</h3>" +
                    "        	<p>{{ product.description }}</p>" +
                    "        	<div>" +
                    "            	<h5 class='place-left'>{{ product.price | currency: 'PLN ' }}</h5>" +
                    "            	<h5 class='place-right'><b>Stock:</b> {{ product.stock }} pcs</h5>" +
                    "        	</div>" +
                    "        	<div style='margin-top: 125px; background-color: blue'>" +
                    "            	<span class='place-left'>" +
                    "                	<button class='button bg-lightRed' data-ng-click='product.like = product.like + 1'>Like</button>" +
                    "                	<div class='dropdown-button'>" +
                    "                    	<button class='button dropdown-toggle bg-lightGreen fg-white'>Share</button>" +
                    "                    	<ul class='split-content d-menu' data-role='dropdown'>" +
                    "                        	<li><a href='#category'>Facebook</a></li>" +
                    "                        	<li><a href='#category'>Twitter</a></li>" +
                    "                    	</ul>" +
                    "                	</div>" +
                    "            	</span>" +
                    "            	<span class='place-right'>" +
                    "                	<button class='button cycle-button bg-lightBlue' data-ng-click='buy(product.id)'><span class='mif-cart fg-white'></span></button>" +
                    "            	</span>" +
                    "        	</div>" +
                    "    	</div>" +
                    "	</div>" +
                    "</div>"
            });
});
