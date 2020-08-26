const angularMiniShopApp = angular.module('angularMiniShop', ['ngRoute']);
angularMiniShopApp.config(function ($routeProvider) {
    $routeProvider
        .when("/",
            {
                template: "" +
                    "<div class='breadcrumb'>" +
                    "   <nav aria-label='breadcrumb'>" +
                    "       <ol class='breadcrumb'>" +
                    "           <li class='breadcrumb-item'><a href='#'>Home</a></li>" +
                    "           <li class='breadcrumb-item'><a href='#/'>Products</a></li>" +
                    "           <li class='breadcrumb-item active' aria-current='page' data-ng-show='query != &apos;&apos;'>{{ query }}</li>" +
                    "           <li class='breadcrumb-item active' aria-current='page' data-ng-show='queryObj != &apos;&apos; ' >{{ queryObj.category }}</li>" +
                    "       </ol>" +
                    "   </nav>" +
                    "</div>" +
                    "<h2 class='text-center pb-2'>Available products</h2>" +
                    "<h2 class='text-center pb-2' data-ng-show='queryObj != &apos;&apos; '>{{ queryObj.category }}</h2>" +
                    "<div class='main-div'>" +
                    "	<div class='product' style='background-color: white' data-ng-repeat='product in products | filter : query | filter : queryObj'>" +
                    "    	<div class=''>" +
                    "        	<a href='#!product#{{product.id}}'><div class='image-container'>" +
                    "            	<div class='frame'><img class='img-fluid' src='images/{{ product.image }}''></div>" +
                    "        	</div></a>" +
                    "    	</div>" +
                    "    	<div class='cell colspan2'>" +
                    "        	<h3>{{ product.name }}</h3>" +
                    "        	<p>{{ product.description }}</p>" +

                    "        	<div>" +
                    "            	<p class='price font-weight-bold'>{{ product.price | currency: 'PLN ' }}</p>" +
                    "            	<p class='stock text-right'><b>Stock:</b> {{ product.stock }} pcs</p>" +
                    "        	<p><a href='#!category#{{product.category}}' class='btn btn-outline-dark' data-ng-click='queryObj.category=\"Camera\"'>" +
                    "{{ product.category }}</a></p>" +
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
                    "<div class='breadcrumb'>" +
                    "   <nav aria-label='breadcrumb'>" +
                    "       <ol class='breadcrumb'>" +
                    "           <li class='breadcrumb-item'><a href='#/'>Home</a></li>" +
                    "           <li class='breadcrumb-item active' aria-current='page'>Cart</li>" +
                    "       </ol>" +
                    "   </nav>" +
                    "</div>" +
                    "<div class='main-div--cart'>" +
                    "<h2>Your Cart Items</h2>" +
                    "                  <table class='table table-hover checkout' id='sum'>" +
                    "                    <tbody>" +
                    "                      <tr>" +
                    "                        <th class='text-center'>Name</th>" +
                    "                        <th class='text-center'>Qty.</th>" +
                    "                        <th class='text-right'>Price</th>" +
                    "                        <th class='text-right'>Total</th>" +
                    "                        <th class='text-right'></th>" +
                    "                      </tr>" +
                    "                      <tr data-ng-repeat='product in products | filter : qry.in_cart=true'>" +
                    "                        <th class='text-center'>{{ product.name }}</th>" +
                    "                        <th class='text-center items'>{{ product.buy }}</th>" +
                    "                        <th class='text-right'>{{ product.price }}</th>" +
                    "                        <th class='text-right total countable'>{{ product.price * product.buy }}</th>" +
                    "                        <th class='text-right total'><button class='btn' data-ng-click='delete(product.id)'>x</button></th>" +
                    "                      </tr>" +
                    "					  <tr>" +
                    "                        <th colSpan='2'></th>" +
                    "                        <th class='text-center' id='sum1'>Items in cart: {{ getTotalProducts() }}</th>" +
                    // "                        <th class='text-center' id='sum1'>{{ (products | filter: { in_cart : true }).length }}</th>" +
                    "                        <th></th>" +
                    "                        <th class='text-right price' id='sum2'>Total: {{ getTotalSum() }}</th>" +
                    "                      </tr>" +
                    "                    </tbody>" +
                    "                  </table>" +
                    "</div>"
            })
        .when("/category",
            {
                template: "" +
                    "<div class='breadcrumb'>" +
                    "   <nav aria-label='breadcrumb'>" +
                    "       <ol class='breadcrumb'>" +
                    "           <li class='breadcrumb-item'><a href='#/'>Home</a></li>" +
                    "           <li class='breadcrumb-item'><a href='#/'>Products</a></li>" +
                    "           <li class='breadcrumb-item active' aria-current='page'>{{ queryTest }}</li>" +
                    "       </ol>" +
                    "   </nav>" +
                    "</div>" +
                    "<h2 class='text-center pb-2'>Available products</h2>" +
                    "<h2 class='text-center pb-2' data-ng-show='queryObj != &apos;&apos; '>{{ queryTest }}</h2>" +
                    "	<div class='row cells5' data-ng-show='query != &apos;&apos;'>" +
                    "    	<div class='cell offset1 colspan3 padding10 bg-white' style='background-color: white'><h6>Queries: Only show in home page</h6></div>" +
                    "	</div>" +
                    "<div class='main-div'>" +
                    "	<div class='product' style='background-color: white' data-ng-repeat='product in products | filter : queryTest'>" +
                    "    	<div class=''>" +
                    "        	<a href='#!product#{{product.id}}'><div class='image-container'>" +
                    "            	<div class='frame'><img class='img-fluid' src='images/{{ product.image }}''></div>" +
                    "        	</div></a>" +
                    "    	</div>" +
                    "    	<div class='cell colspan2'>" +
                    "        	<h3>{{ product.name }}</h3>" +
                    "        	<p>{{ product.description }}</p>" +
                    "        	<div>" +
                    "            	<p class='price font-weight-bold'>{{ product.price | currency: 'PLN ' }}</p>" +
                    "            	<p class='stock text-right'><b>Stock:</b> {{ product.stock }} pcs</p>" +
                    "<p><a href='#!category#{{product.category}}' class='btn btn-outline-dark' data-ng-click='queryObj.category=\"Camera\"'> {{ product.category }}</a></p>" +
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
        .when("/product",
            {
                template: "" +
                    "<div class='breadcrumb' data-ng-repeat='product in products | filter: { id: productId2}'>" +
                    "   <nav aria-label='breadcrumb'>" +
                    "       <ol class='breadcrumb'>" +
                    "           <li class='breadcrumb-item'><a href='#/'>Home</a></li>" +
                    "           <li class='breadcrumb-item'><a href='#/'>Products</a></li>" +
                    "           <li class='breadcrumb-item'><a href='#!category#{{product.category}}' ng-click='reloadRoute'>{{ product.category }}</a></li>" +
                    "           <li class='breadcrumb-item active' aria-current='page'>{{ product.name }}</li>" +
                    "       </ol>" +
                    "   </nav>" +
                    "</div>" +
                    "	<div class='row cells5' data-ng-show='query != &apos;&apos;'>" +
                    "    	<div class='cell offset1 colspan3 padding10 bg-white' style='background-color: white'><h6>Queries: Only show in home page</h6></div>" +
                    "	</div>" +
                    "<div class='product-div'>" +
                    "	<div class='product' style='background-color: white' data-ng-repeat='product in products | filter: { id: productId2 }'>" +
                    "<h2 class='text-center'>Product: {{ product.name }}</h2>" +
                    "    	<div class='' id ='test'>" +
                    "        	<div class='image-container'>" +
                    "            	<div class='frame'><img class='img-fluid' src='images/{{ product.image }}''></div>" +
                    "        	</div>" +
                    "    	</div>" +
                    "    	<div class='cell colspan2'>" +
                    "        	<h3>{{ product.name }}</h3>" +
                    "        	<p>{{ product.description }}</p>" +
                    "        	<p><a href='#!category#{{product.category}}' class='btn btn-outline-dark' ng-click='reloadRoute'> {{ product.category }}</a></p>" +
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
            });
});
