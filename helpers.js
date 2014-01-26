module.exports = {
    logger: function(req, res, next) {
        console.log(req.method, req.url);
        next();
    },
    split_and_trim: function(string) {
        var trimmed = string.trim();
        var array = trimmed.split(",");
        for (var i=0; i<array.length; i++) {
            array[i] = array[i].trim();
        }
        return array;
    }
}
