class EducationCard extends HTMLElement 
{
    
    connectedCallback() 
    {
        const EducationName = this.getAttribute("EducationName") || "Education";
        const Context = this.getAttribute("Context") || "Context";

        this.innerHTML = 
        `
            <h3> ${EducationName} </h3>
            <h5> ${Context} </h5>
        `;
    }
}

customElements.define("education-card", EducationCard);