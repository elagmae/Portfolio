class GameCard extends HTMLElement 
{
//#region GameCard

    connectedCallback() 
    {
        const gameGif = this.getAttribute("gif") || "Resources/project1.gif";
        const group = this.getAttribute("group") || "1";
        const support = this.getAttribute("support") || "Unity";
        const duration = this.getAttribute("duration") || "1 week";

        const name = this.getAttribute("name") || "Name";
        const role = this.getAttribute("role") || "Rôle";

        const build = this.getAttribute("build") || "";
        const link = this.getAttribute("link") || "";

        this.innerHTML = 
        `
            <a class="ButtonLink" href="${link}"> <button type="button">

                <div class="GameCardContext">

                    <img src=${gameGif} class="GameGif">

                    <article> 
                
                        <img src="Resources/Sources/GroupIcon.png" class="GameInfoLogo" style="filter:invert(1);">
                        <p> ${group} </p>

                        <img src="Resources/Sources/TimeIcon.png" class="GameInfoLogo" style="filter:invert(1);">
                        <p> ${duration} </p>

                        <img src="Resources/Sources/SettingsIcon.png" class="GameInfoLogo" style="filter:invert(1);">
                        <p> ${support} </p>


                    </article>

                </div>

                <div class="GameCardInfos"> 

                    <div class = "GameLink"> 

                        <h2>${name}</h2>
                        <img src="Resources/Sources/Arrow.png" class="GameLinkImg">

                    </div>

                    <h3>${role}</h3>


                </div>

            </button>
        `;
    }


//#endregion GameCard

    // showOverlay(name, role, context, gameGif, group, support, duration, comp, video, build, devlog) {
    //     let overlay = document.getElementById("gameOverlay");

    //     if (!overlay) 
    //     {
    //         overlay = document.createElement("game-page");
    //         overlay.id = "gameOverlay";

    //         overlay.innerHTML = 
    //         `
    //         <div id="GamePage">
                
    //             <div id="LeftContainer">
    //                 <div id="LeftHeader">

    //                     <button id="GamePageClosing">
    //                         <img src="Resources/Arrow.png" style="rotate:180deg;" id="Arrow">
    //                         <p> RETOUR </p>
    //                     </button>
                        
    //                 </div>

    //                 <div id="CardSection">

    //                     <game-card gif="${gameGif}" group="${group}" support="${support}" duration="${duration}" name="${name}" role="${role}"></game-card>
                    
    //                     <div id="LinkSection">

    //                         <div class="Link">
    //                             <a href="${build}"> <img src="Resources/BuildIcon.png"> </a>
    //                             <p> Build </p>
    //                         </div>

    //                     </div>

    //                 </div>
    //             </div>

    //             <div id="RightContainer">

    //                 <div id="RightHeader">
    //                     <h1> ${name} </h1>
    //                 </div>

    //                 <div id="Infos">
    //                     <div class="Context">
    //                         <h2> Contexte de production </h2>
    //                         <p>${context}</p>
    //                     </div>

    //                     <div class="Context">
    //                         <h2> Travail apporté </h2>
    //                         <p>${comp}</p>
    //                     </div>

    //                 </div>

    //             </div>

    //         </div>

    //         `;

    //         document.body.appendChild(overlay);

    //         // Ajouter le OnClick du bouton de fermeture
    //         overlay.querySelector("#GamePageClosing").addEventListener("click", () => {
    //             overlay.style.opacity = "0";
    //             document.documentElement.style.overflow = "";
    //             setTimeout(() => overlay.remove(), 500);
    //         });
    //     }

    //     requestAnimationFrame(() => 
    //     {
    //         overlay.style.opacity = "1";
    //         document.documentElement.style.overflow = "hidden";
    //     });
    // }
}

customElements.define("game-card", GameCard);