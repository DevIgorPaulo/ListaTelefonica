angular.module("ListaTelefonica").directive("uiTel", () => {
    return {
        require: "ngModel",
        link:  (scope, element, attrs, ctrl) => {
            var _formatTel = function(tel) {
                tel = tel.replace(/[^0-9-()]+/g, "")
                if(tel.length > 1 && tel.length < 3) tel = "(" + tel.substring(0,2) + tel.substring(2) +")"
                if(tel.length > 8 ) tel = tel.substring(0,9) +  "-" + tel.substring(10,14)
                return tel
            }
            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatTel(ctrl.$viewValue))
                ctrl.$render()
            })
        }

    }
})