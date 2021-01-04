import React from "react";
import './CHome.css';

export const CHome = () => {
    return (
        <article className="videoContent">
            <p className="videoText text-warning">
                Od wielu lat zajmujemy się wszelkiego rodzaju metalami. Chcieliśmy zaprezentować film, który przybliży Ci, o czym jest nasza strona.
            </p>
            <div>
                <iframe src="https://www.youtube.com/embed/j0KwZZvOBCI" className="video" allowFullScreen title="Jak produkuje się stal?"/>
            </div>
        </article>
    );
}