class GameCard extends HTMLElement 
{
    connectedCallback() 
    {
        const linkedPage = this.getAttribute("linkedPage") || "";
        const gameGif = this.getAttribute("gif") || "Resources/project1.gif";
        const group = this.getAttribute("group") || "1";
        const support = this.getAttribute("support") || "Unity";
        const duration = this.getAttribute("duration") || "1 week";
        const name = this.getAttribute("name") || "Name";
        const role = this.getAttribute("role") || "Rôle";
        const context = this.getAttribute("context") || "Context";

        this.innerHTML = 
        `
            <button type="button" onclick="window.location.href='${linkedPage}'">

                <div class="GameCardContext">

                    <img src=${gameGif}>

                    <article> 
                
                        <img src="Resources/GroupIcon.png" class="GameInfoLogo" style="filter:invert(1);">
                        <p> ${group} </p>

                        <img src="Resources/TimeIcon.png" class="GameInfoLogo" style="filter:invert(1);">
                        <p> ${duration} </p>

                        <img src="Resources/SettingsIcon.png" class="GameInfoLogo" style="filter:invert(1);">
                        <p> ${support} </p>


                    </article>

                </div>

                <div class="GameCardInfos"> 

                    <div class = "GameLink"> 

                        <h2>${name}</h2>
                        <img src="Resources/Arrow.png" class="GameLinkImg">

                    </div>

                    <h3>${role}</h3>


                </div>

            </button>
        `;
    }
}

customElements.define("game-card", GameCard);