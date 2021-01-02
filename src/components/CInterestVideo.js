import React from "react";
import {CVideo} from "./CVideo";

export const CInterestVideo = () => {
    return (
        <article className="videoContent">
            <p className="videoText text-warning">
                Od wielu lat zajmujemy się wszelkiego rodzaju metalami. Chcieliśmy zaprezentować film, który przybliży Ci, o czym jest nasza strona.
            </p>
            <CVideo/>
        </article>
    );
}