class Contacts extends HTMLElement 
{
    connectedCallback() 
    {
        this.innerHTML = 
        `
            <div id="Contacts">
                <a href="https://github.com/elagmae"><img src="Resources/Sources/GithubLogo.png" class="ContactLogos" style="filter: brightness(0) invert(1);"></a>
                <a href="https://www.linkedin.com/in/elagmae"><img src="Resources/Sources/LinkedinLogo.png" class="ContactLogos"></a>
                <a href="https://elagmae.itch.io"><img src="Resources/Sources/ItchioLogo.png" class="ContactLogos" style="filter: brightness(0) invert(1);"></a>
                <a id="CV" href="Resources/PouthierLéa_CV.pdf"> <img style="border-radius:5rem;" src="Resources/Sources/profil.png" class="ContactLogos"> </a>
            </div>
        `;
    }
}

customElements.define("contacts-link", Contacts);