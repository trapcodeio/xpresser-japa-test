import {$} from "../app";

export function getId() {
    return "xpresser-" + $.config.get('name');
}