angular.module("ListaTelefonica").provider("serialGenerator", function() {
    var _length = 10;
    this.getLength = function () {
        return _length
    }
    this.setLength = function (length) {
        _length = length
    }
    this.$get = function () {
        return {
            generate: function () {
                var serial = ""
                while(serial.length < 5 ) {
                    serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32)
                }
                return serial
            }
        }
    }
})