function findTrigger (that) {
    const trigger = document.querySelectorAll('[advancedTag]')
    for (let i = 0; i < trigger.length; i++) {
        if ( trigger[i] && that.getAttribute('id')===trigger[i].getAttribute('advancedTag')) {
            trigger[i].addEventListener('click', () => {
             that.classList.toggle('animatePara')
            })
         }
    }

}

class AdvancedP extends HTMLElement {
    connectedCallback () {
        this._build()
    }

    _build () {
        if (this.hasAttribute('bold')) {
            this.style.fontWeight='bold'
        }
        if (this.hasAttribute('color')) {
            this.style.color=this.getAttribute('color')
        }
        if (this.hasAttribute('bold')) {
        const tagType = this.getAttribute('type');
        const validTextTags = ["div", "h1", "h2","h3","h4","h5","h6","span","p"];
        let tagPresent =false;
        for (var tag in validTextTags) {
           if (validTextTags[tag] === tagType) {
            tagPresent =true;           
            break;
           }
          }
          if(tagPresent) {
            const newElement=document.createElement(tagType)
            const text = this.textContent
            newElement.textContent = text
            this.textContent = ""
            this.appendChild(newElement)
          }
          else {
            const newElement=document.createElement('span')
            const text = tagType+' is not a HTML element'
            newElement.textContent = text
            newElement.style.color='red'
              this.textContent = ''
              this.parentElement.appendChild(newElement)
          }
        }
          
          findTrigger(this)
    }
}
window.customElements.define('advanced-p', AdvancedP)
