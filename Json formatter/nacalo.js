function formatJson () {
    const input = document.getElementById ('jsonInput').value;
    try{
        const json =JSON.parse(input);
        const formattedJson= JSON.stringify(json,null,4);
        document.getElementById('jsonOutput').textContent=formattedJson;
    } catch (error) {
        document.getElementById('jsonOutput').textContent='Invalid JSON:'+error.message;
    }
}