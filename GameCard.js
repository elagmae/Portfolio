class GameCard extends HTMLElement 
{
    connectedCallback() 
    {
        const gameGif = this.getAttribute("gif") || "Resources/project1.gif";
        const group = this.getAttribute("group") || "1";
        const support = this.getAttribute("support") || "Unity";
        const duration = this.getAttribute("duration") || "1 week";
        const name = this.getAttribute("name") || "Name";
        const role = this.getAttribute("role") || "Rôle";
        const context = this.getAttribute("context") || "Context";

        this.innerHTML = 
        `
            <button type="button" class="OverlayButton">

                <div class="GameCardContext">

                    <img src=${gameGif} class="GameGif">

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

            this.querySelector(".OverlayButton").addEventListener("click", () => {
            this.showOverlay(name, role, context, gameGif, group, support, duration); // Appelle la fonction pour afficher l'overlay
        });
    }

    showOverlay(name, role, context, gameGif, group, support, duration) {
        let overlay = document.getElementById("gameOverlay");

        if (!overlay) 
        {
            overlay = document.createElement("game-page");

            overlay.id = "gameOverlay";
            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.right = "0";
            overlay.style.bottom = "0";
            overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.opacity = "0";
            overlay.style.zIndex = "2000";
            overlay.style.color = "white";
            document.documentElement.style.overflow = "hidden";

            overlay.style.transition = "opacity 0.5s ease"; // Animation

            overlay.innerHTML = 
            `
                <div id="GamePage">
                
                    <button id="GamePageClosing">< Retour</button>

                    <h2 style="text-align:center;"> ${name} </h2>
                    <img src="${gameGif}" id="PageGif">

                </div>

            `;
            document.body.appendChild(overlay);

            // Ajouter le bouton de fermeture
            overlay.querySelector("#GamePageClosing").addEventListener("click", () => {
                overlay.style.opacity = "0";
                document.documentElement.style.overflow = "";
                setTimeout(() => overlay.remove(), 500);
            });
        }

        // Afficher avec animation
        requestAnimationFrame(() => {
            overlay.style.opacity = "1";
        });
    }
}

customElements.define("game-card", GameCard);