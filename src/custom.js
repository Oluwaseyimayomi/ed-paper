//JavaScript Document

//Nav mobile toggle
function navDropdown() {
    document.getElementById("navDropdown").style.display = "contents"
    document.getElementById("firstIcon").style.display = "none"
    document.getElementById("secondIcon").style.display = "contents"
};

function navPullUp() {
    document.getElementById("navDropdown").style.display = "none"
    document.getElementById("firstIcon").style.display = "contents"
    document.getElementById("secondIcon").style.display = "none"
};


//FAQ toggle
function faqDropdown() {
    document.getElementById("faqAnswer").style.display = "block"
    document.getElementById("chevronDown").style.display = "none"
    document.getElementById("chevronUp").style.display = "contents"
};

function faqPullUp() {
    document.getElementById("faqAnswer").style.display = "none"
    document.getElementById("chevronDown").style.display = "contents"
    document.getElementById("chevronUp").style.display = "none"
};