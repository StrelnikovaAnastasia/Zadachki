var paragraph = "Однажды я шел перед вечером мимо базарной площади в лесничество." +
    "Оно помещалось на окраине городка над рекой." +
    "Среди улицы мальчишки играли в футбол." +
    "Громкоговоритель висел на телеграфном столбе." +
    "Он неожиданно защелкал.";

function write(paragraph)
{
    let prh = paragraph.split(".");
    let words = [];
    let sentences = []
    prh.forEach((item,index)=>{
        words[index] = item.split(" ");
        sentences.push({sentence: prh[index]+=".", length: words[index].length, words: words[index]});
        sentences[index].words.push(".");     
    }) ;
    sentences.pop();
    return sentences;
}

console.log(write(paragraph));