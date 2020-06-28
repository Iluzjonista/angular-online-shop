angularMiniShopApp.controller('productCtrl', function ($scope) {
    $scope.products = [
        {
            id: 1,
            name: "Leica M10-P",
            image: "camera-1.jpg",
            category: "Camera",
            description: "This is description of a product",
            price: 6900,
            stock: 30,
            like: 0,
            in_cart: false,
            buy: 0
        },
        {
            id: 2,
            name: "Leica SL2",
            image: "camera-2.jpg",
            category: "Camera",
            description: "This is description of a product",
            price: 5300,
            stock: 30,
            like: 0,
            in_cart: false,
            buy: 0
        },
        {
            id: 3,
            name: "Leica M10-P ASC 100 Edition",
            image: "camera-3.jpg",
            category: "Camera",
            description: "This is description of a product",
            price: 16250,
            stock: 30,
            like: 0,
            in_cart: false,
            buy: 0
        },
        {
            id: 4,
            name: "Leica V-lux 5",
            image: "camera-4.jpg",
            category: "Camera",
            description: "This is description of a product",
            price: 1050,
            stock: 30,
            like: 0,
            in_cart: false,
            buy: 0
        },
        {
            id: 5,
            name: "Leica Q2",
            image: "camera-5.jpg",
            category: "Camera",
            description: "This is description of a product",
            price: 9000,
            stock: 30,
            like: 0,
            in_cart: false,
            buy: 0
        },
        {
            id: 6,
            name: "Leica CL 100 years Bauhaus",
            image: "camera-6.jpg",
            category: "Camera",
            description: "This is description of a product",
            price: 3300,
            stock: 30,
            like: 0,
            in_cart: false,
            buy: 0
        },
        {
            id: 7,
            name: "Summicron-m 50mm",
            image: "lens-1.jpg",
            category: "Lens",
            description: "This is description of a product",
            price: 750,
            stock: 30,
            like: 0,
            in_cart: false,
            buy: 0
        },
        {
            id: 8,
            name: "Apo-Summicron-m 50mm",
            image: "lens-2.jpg",
            category: "Lens",
            description: "This is description of a product",
            price: 8100,
            stock: 30,
            like: 0,
            in_cart: false,
            buy: 0
        },
        {
            id: 9,
            name: "Summaron-m",
            image: "lens-3.jpg",
            category: "Lens",
            description: "This is description of a product",
            price: 2600,
            stock: 30,
            like: 0,
            in_cart: false,
            buy: 0
        },
        {
            id: 10,
            name: "Lens hood with Cap",
            image: "acc-1.jpg",
            category: "Accessories",
            description: "This is description of a product",
            price: 120,
            stock: 10,
            like: 0,
            in_cart: false,
            buy: 0
        }];
    $scope.query = "";
    var sum1 =0;
    var sum2 =0;
    $scope.buy = function (id) {
        if ($scope.products[id - 1].stock > 0) {
            $scope.products[id - 1].in_cart = true;
            $scope.products[id - 1].buy++;
            $scope.products[id - 1].stock--;
            toastr["info"]("Was added to cart", $scope.products[id - 1].name)
            sum1 += 1;
            sum2 += $scope.products[id - 1].price;
            toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": true,
                "progressBar": false,
                "positionClass": "toast-top-right",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "3000",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
        } else {
            toastr["warning"]("Product out of stock", "Ups")
        }
    }
});
