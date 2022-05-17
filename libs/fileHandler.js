
export default new class {

    constructor() { }

    downloadFile(data, fileName) {
        const blob = new Blob([data], {type: 'application/json'});
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
    }

    loadFile(e, fn) {
        const files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        const reader = new FileReader();
        reader.onload = async e => {
            const uploadedData = JSON.parse(e.target.result);
            return await fn(e.target.result);
        };
        reader.readAsText(files[0]);
    }

}