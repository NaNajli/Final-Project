export function searching()
{
    return new Promise((resolve)=>
        {
            document.getElementById("search-form").addEventListener("submit", function(event) {
             event.preventDefault();
             let searching = event.target.input.value;
             console.log(searching);
             resolve(searching);
            }
    )}

)}

export async function replace(letter){
    let searchWord = await searching();
    const urlParams = new urlParams(searchWord)
    const urlParam = searchWord.get(letter)
    urlParam.use
    console.log(urlParam)
    return  urlParam
    
}



