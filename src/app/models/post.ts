export class NuovoPost {
    // Definisco i campi che ogni post deve avere (titolo e contenuto)
    title: string;
    body: string;

    // Quando creo un nuovo post, imposto titolo e corpo (anche vuoti di default)
    constructor(title: string = "", body: string = "") {
        this.title = title;
        this.body = body;
    }
}