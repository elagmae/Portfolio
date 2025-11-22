class Contacts extends HTMLElement 
{
    connectedCallback() 
    {
        this.innerHTML = 
        `
            <a href="https://www.instagram.com/elagmae"><img src="Resources/InstagramLogo.png" alt="Instagram" class="ContactLogos" style="filter: brightness(0) invert(1);"></a>
            <a href="https://github.com/elagmae"><img src="Resources/GithubLogo.png" class="ContactLogos" style="filter: brightness(0) invert(1);"></a>
            <a href="https://www.linkedin.com/in/léa-pouthier-2a33b833a"><img src="Resources/LinkedinLogo.png" class="ContactLogos"></a>
        `;
    }
}

customElements.define("contacts-link", Contacts);