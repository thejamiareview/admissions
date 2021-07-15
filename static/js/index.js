
const header = document.querySelector("header");
const s_one = document.querySelector(".section-1");
console.log(s_one)

const s_one_opt ={
    rootMargin :"-120px 0px 0px 0px"
};

const s_one_ob = new IntersectionObserver(function(entries,s_one_ob){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            header.classList.add("welcome_scrolled");
        }else {
            header.classList.remove("welcome_scrolled")
        }
    });
},
s_one_opt);
s_one_ob.observe(s_one);


// Footer stuff
const p = document.getElementById("copyright")
const date = new Date()
p.innerText += ` ${date.getFullYear()}  |  The Jamia Review Team`