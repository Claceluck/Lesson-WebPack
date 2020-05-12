import "../css/style.css";
import {Book} from "./book";

let book = new Book ("Война и Мир", "Толстой", 1324);
document.body.append(document.createTextNode(book.printInfo()));

console.log(jQuery('a'));