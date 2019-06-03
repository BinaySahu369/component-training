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
        var validTextTags = ["div", "h1", "h2","h3","h4","h5","h6","span","p"];

        if (this.hasAttribute('bold'))
        {
            this.style.fontWeight='bold'
        }
        if (this.hasAttribute('color'))
        {
            this.style.color=this.getAttribute('color')
        }
        const tagType = this.getAttribute('type');
        const newElement=document.createElement(tagType)
        const text = this.textContent
        newElement.textContent = text
        this.textContent = ""
        this.appendChild(newElement)
        findTrigger(this)
    }
}
window.customElements.define('advanced-p', AdvancedP)
