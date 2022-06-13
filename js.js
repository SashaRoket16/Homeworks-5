let Document = {
    header: 0,
    body: '',
    footer: 0,
    data: '',
    Додаток: {
        header: {
            header: ""
        },
        body: {
            body: ""
        },
        footer: {
            footer: ""
        },
        data: {
            data: ""
        }
    }

};
Document.header = "352";
Document.body = "Боди";
Document.footer = "20000";


if ("data" in Document) {
    Document.footer = '30000000';
    Document.Додаток.header.header = "20000"
    Document.Додаток.body.body = "Як справи"
    Document.Додаток.footer.footer = "26"
    Document.Додаток.data.data = "17.09.2008"
    Document.Додаток.header.header = "100"

    Document.data = '16.06.2006'

}
console.log(Document);