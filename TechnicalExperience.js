class TechnicalExperience extends HTMLElement 
{
    connectedCallback() 
    {
        this.innerHTML = 
        `
            <br>
            <p class="Exp"> Unity </p>
            <p class="Exp"> FMOD </p>
            <p class="Exp"> Git </p>
            <p class="Exp"> Unreal </p>
            <p class="Exp"> Illustrator </p>
            <p class="Exp"> C# </p>
            <p class="Exp"> HTML </p>
            <p class="Exp"> CSS </p>
            <p class="Exp"> Blueprint </p>
        `;
    }
}

customElements.define("technical-exp", TechnicalExperience);