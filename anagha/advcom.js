class AdvancedP extends HTMLElement {
  connectedCallback() {
    this._build()
  }

  _build() {


    this.style.color = 'orange';
 
    if (this.hasAttribute('color')) {

      this.style.color = this.getAttribute('color');
    
    if (this.hasAttribute('bold')) {

      this.style.fontWeight = 'bold'
 
    }
    if (this.hasAttribute('font-size')) {

      this.style.fontSize = this.getAttribute('font-size');
      // this.setAttribute('color','c');
    }

      var validTags = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span","div"];

      const tag = this.getAttribute('type');

      var target = false;

      for (var i in validTags) {
        if (validTags[i] == tag.trim().toLowerCase()) {
          target = true;
          break;

        }
      }
    if (target == true) {
      const newElement = document.createElement(tag)
        const text = this.textContent
        newElement.textContent = text
        this.textContent = ""
        this.appendChild(newElement)
      }
      else {
   
         const now = document.createElement('div')
         now.classList.add("class3");
         const text1 = this.textContent
       //  now.textContent = "text1"
          this.textContent=''
         now.textContent = tag + " is not a valid tag"

         this.appendChild(now)
       //  

       }
    sizeup(this,target);
    }
  }
window.customElements.define('advanced-p', AdvancedP)

function sizeup(advtag,target) {
  var element = document.getElementById("a2");
 if(target){
   element.addEventListener("click", function() {
   advtag.classList.add("div1");
  
  });}
}



 







