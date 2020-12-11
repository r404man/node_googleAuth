module.exports = {
    // Should be authenticated
    ensureAuth: function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        else {
            res.redirect('/');
        }
    },
    // Already authenticated
    ensureGuest: function(req, res, next) {
        if(req.isAuthenticated()) {
            console.log(req.user);
            res.redirect('/index');
        }
        else {
            return next();
        }
    }
}