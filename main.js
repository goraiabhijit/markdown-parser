let text= "## hello . \n# and this \n**hello** ***helo***";

let parsedtext="";
const heading= /^(#{1,6}) (.+)$/gm;
const bold=/(\*\*|__)(.+?)\1/g;
const italics= /(\*|_)(.+?)\1/gm;


// let arr = [...text.matchAll(/## (.+)/g)];

// arr.forEach((v)=>{
    //     parsedtext+=`<h2>${v[1]}</h2> \n`;
    // }
    // )
    
text=text.replaceAll(heading,(m,h,c,i)=>{

    return `<H${h.length}>${c}</H${h.length}>`
})

text=text.replaceAll(bold,(m,h,c)=>{
    // console.log(m);
    // console.log(h);
    // console.log(c);
    return `<Strong>${c}</Strong>`

})

text=text.replaceAll(italics,(match,hashes,content)=>{
    
     return `<i>${content}</i>`
})

console.log(text);

