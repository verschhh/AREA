"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRequestToDiscord = void 0;
const ErrorStatus_1 = require("../../../middleware/errors/ErrorStatus");
function postRequestToDiscord(message) {
    return __awaiter(this, void 0, void 0, function* () {
        const requestBody = {
            message: message
        };
        return fetch("http://localhost:8081/discord", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody),
        }).then((res) => {
            if (res.ok) {
                return;
            }
            else {
                throw new ErrorStatus_1.ErrorStatus("Error sending POST request to Discord", res.status);
            }
        }).catch((err) => {
            return { data: null, error: err };
        });
    });
}
exports.postRequestToDiscord = postRequestToDiscord;
