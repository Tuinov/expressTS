"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
let router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
    // res.sendFile(path.resolve(__dirname, '../views', 'main.html'));
    res.send(`Hey there`);
});
