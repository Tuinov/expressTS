"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Access is denied');
}
let router = (0, express_1.Router)();
exports.router = router;
router.get('/protected', requireAuth, (req, res) => {
    res.send('welcome to protected route');
});
router.get('/login', (req, res) => {
    // res.sendFile(path.resolve(__dirname, '../views', 'main.html'));
    res.send(`<form method="POST">
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Email address</label>
     <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
     <div id="emailHelp" class="form-text">Введите email</div>
   </div>
   <div class="mb-3">
     <label for="exampleInputPassword1" class="form-label">Password</label>
     <input name="password" type="password" class="form-control" id="exampleInputPassword1">
   </div>
   <div class="mb-3 form-check">
     <input type="checkbox" class="form-check-input" id="exampleCheck1">
     <label class="form-check-label" for="exampleCheck1">Check me out</label>
   </div>
   <button type="submit" class="btn btn-primary">Submit</button>
 </form>`);
});
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === 'tuin@mail.ru' && password == 'pass') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.redirect('/login');
    }
});
router.get('/', (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.send(`<div>
    <div>You are logged in</div>
    <a href="/logout">Logout</a>
    </div>`);
    }
    else {
        // req.session = undefined;
        // res.redirect('/');
        res.send(`<div>
    <div>You are not logged in</div>
    <a href="/login">Login</a>
    </div>`);
    }
});
router.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
