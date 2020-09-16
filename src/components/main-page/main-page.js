import React from "react";

import "./main-page.module.css";

const MainPage = () => {
    return (
        <React.Fragment>
            <h1 className="mainWord">Welcome Tankopedia!!!</h1>
            <br></br>
            <p className="p1">World of Tanks is a massively multiplayer online game dedicated
            to armored vehicles of the mid-20th century. Here players fight
            shoulder to shoulder with fans of tanks from all over the world,
                defending their claims to world domination.</p>
            <br></br>
            <p className="p2">
                An advanced system of pumping and development will allow you to test
                any of the machines presented in the game. World of Tanks has a large
                selection of vehicles! Here you can harass with nimble light tanks,
                make frantic breakthroughs with universal mediums, incinerate with gigantic
                heavy weights and become a first-class sniper driving a tank destroyer.
                A vehicle of any class will become a deadly weapon in the hands of a true professional!
            </p>
            <br></br>
            <p className="p3">
                World of Tanks is interesting for both a beginner and an experienced player.
                But even the most powerful tankers could not succeed alone. Here everything
                is decided by the team, and victory is achieved thanks to the well-coordinated
                work of the team, where everyone has their own role. The Wargaming.net encyclopedia
                will help you learn more about the rules and strategies of the game. Play and Win!
            </p>
        </React.Fragment>
    )
};

export default MainPage;