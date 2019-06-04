function findTrigger (that,tagPresent) {
    if(tagPresent) {
        const trigger = document.querySelectorAll('[advancedTag]')
        for (let i = 0; i < trigger.length; i++) {
            if ( trigger[i] && that.getAttribute('id')===trigger[i].getAttribute('advancedTag')) {
                trigger[i].addEventListener('click', () => {
                 that.classList.toggle('animatePara')
                })
             }
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
        let tagPresent =false;
        if (this.hasAttribute('type')) {
        let tagType = this.getAttribute('type');
        const validTextTags = ['div', 'h1', 'h2','h3','h4','h5','h6','span','p']
        for (var tag in validTextTags) {
            tagType = tagType.trim().toLowerCase()
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
            const newElement=document.createElement('div')
            newElement.classList.add('invalid')
            const text = tagType + ' is not a HTML element'
            newElement.textContent = text
            this.textContent = ''
            this.appendChild(newElement)
          }
        }
          
          findTrigger(this,tagPresent)
          
    }
}
window.customElements.define('advanced-p', AdvancedP)
