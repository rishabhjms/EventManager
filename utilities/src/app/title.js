setDocumentTitle = async (e_id) => {
    let x = await document.getElementById(e_id).innerText;
    document.title = x;
    return x;
}
let x = setDocumentTitle('eventHeading');
let heading = document.getElementById('eventHeading');
