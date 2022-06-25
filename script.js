const fileInput = document.querySelector('input'),
    downloadBtn = document.querySelector('button');

downloadBtn.addEventListener('click', e => {
    e.preventDefault();  // preventing form from submitting
    downloadBtn.innerText = 'Downloading...'
    fetchFile(fileInput.value);
})
    
function fetchFile(url) {
    // fetching file & returning response as blob
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = tempUrl; // passing tempurl as href value of <a> tag
        
        //passing file last name & extension as download value of <a> tag

        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);   // adding the <a> tag inside the body

        aTag.click();  // clicking <a> tag so that the file download
        aTag.remove();  // remove <a> tag once the filee download

        URL.revokeObjectURL(tempUrl); // removing tempurl from the document

        downloadBtn.innerText = 'Downloaded';
        
    })

}
