class EducationCard extends HTMLElement 
{
    
    connectedCallback() 
    {
        const EducationName = this.getAttribute("EducationName") || "Education";
        const Context = this.getAttribute("Context") || "Context";

        this.innerHTML = 
        `
            <div class="EducationContext">
                <h3> ${EducationName} </h3>
                <h5> ${Context} </h5>
            </div>

            <img src="Resources/Sources/Arrow.png" class="Arrow">
        `;
    }
}

customElements.define("education-card", EducationCard);