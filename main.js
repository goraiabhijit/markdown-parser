let text= `## heading 2 
# heading 1 
**bold**
***bold and italics*** 
~~strikethorugh~~ 
\`inlinecode\` 

\` this i s acode blcok #hello \`
> this is a qoute\nnotquote
------
`;

let parsedtext="";

const map = new Map();
let count=0;

const code=/(`)(.+?)\1/g;
const codeplaceholder=/(codeblock\d+)/g;
const heading= /^(#{1,6}) (.+)$/gm;
const bold=/(\*\*|__)(.+?)\1/g;
const italics= /(\*|_)(.+?)\1/g;
const strikethrough=/(\~\~)(.+?)\1/g;
const quote=/(^>)(.+?)$/gm;
const line=/(^-{3,})\s*$/gm;


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

text=text.replaceAll(code,(match,hashes,content)=>{
    map.set(`codeblock${count}`,`${content}`)
    count++;
     return `<code>codeblock${count-1}</code>`
})
text=text.replaceAll(italics,(match,hashes,content)=>{
     return `<i>${content}</i>`
})

text=text.replaceAll(strikethrough,(match,hashes,content)=>{
     return `<del>${content}</del>`
})
text=text.replaceAll(quote,(match,hashes,content)=>{
     return `<blockquote>${content}</blockquote>`
})
text=text.replaceAll(line,(match,hashes,content)=>{
     return `<hr>`
})
text=text.replaceAll(codeplaceholder,(match,hashes,content)=>{
     return `${map.get(match)}`
})


console.log(text);

