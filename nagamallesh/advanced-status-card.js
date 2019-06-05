class AdvancedStatusCard extends HTMLElement {
    connectedCallback() {
        this._build()
    }
    _build() {
        const bodyContent = this.innerHTML
        this.innerHTML = null
        const parentDiv = document.createElement('div')
        parentDiv.classList.add('card')
        let statusBar  = document.createElement('div')
        statusBar.classList.add('status-bar')
        parentDiv.appendChild(statusBar)
        let cardHeader=document.createElement('div')
        cardHeader.classList.add('card-header')
        if(this.hasAttribute('title')) {
            const titleText=this.getAttribute('title')
            cardHeader.textContent=titleText
        }
        parentDiv.appendChild(cardHeader)
        let cardBody=document.createElement('div')
        cardBody.classList.add('card-body')
        cardBody.innerHTML=bodyContent
        parentDiv.appendChild(cardBody)
        this.appendChild(parentDiv)

        if(this.hasAttribute('status')) {
            const status=this.getAttribute('status').trim().toLowerCase()
            const statusColors={'done':'success','pending':'warning','stopped':'danger','inProgress':'primary','default':'secondary'}
            if(statusColors[status]) {
                statusBar.classList.add('bg-'+statusColors[status])
            }
            else {
                console.log('provided status for status bar is not present')
                statusBar.classList.add('bg-'+statusColors['default'])
            }    
            changeState(this,statusBar,statusColors)
        }
        else {
            statusBar.classList.add('bg-secondary')
        }
    }
}


function changeState(card,statusBar,statusColors)
{
    const buttons = card.querySelectorAll('button')
    console.log(buttons)
    buttons.forEach((e)=>{
        console.log(e)
        e.addEventListener('click',function(){
            let classLength = statusBar.classList.length
            if( classLength > 1) {
                statusBar.classList.remove(statusBar.classList[classLength-1])
            }
           const newStatus = e.getAttribute('status')
       statusBar.classList.add(`bg-${statusColors[newStatus]}`)
       card.setAttribute('status',newStatus)
        })      
})
}
window.customElements.define('advanced-status-card',AdvancedStatusCard)
