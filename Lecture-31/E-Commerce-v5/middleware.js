

const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash('error','You need to login first to add a review')
        return res.redirect('/login');
    }
    next();
}


module.exports={
    isLoggedIn
}