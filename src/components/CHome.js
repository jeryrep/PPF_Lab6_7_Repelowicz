import React from "react";
import './CHome.css';

export const CHome = () => {
    return (
        <article className="videoContent">
            <p className="videoText text-warning">
                Od wielu lat zajmujemy się wszelkiego rodzaju metalami. Chcieliśmy zaprezentować film, który przybliży
                Ci, o czym jest nasza strona.
            </p>
            <div>
                <iframe onCanPlay={console.log("Można włączyć")} onCanPlayThrough={console.log("onCanPlayThrough")}
                        onDurationChange={console.log("onDurationChange")}
                        src="https://www.youtube.com/embed/j0KwZZvOBCI" className="video" name="stalVideo"
                        title="Jak produkuje się stal"
                        onEnded={console.log("onEnded")}
                        onLoadedMetadata={console.log("onLoadedMetadata")}
                        onLoadStart={console.log("onLoadStart")}
                        onVolumeChange={console.log("onVolumeChange")}
                        onWaiting={console.log("onWaiting")}
                        onTimeUpdate={console.log("onTimeUpdate")}
                        onAbort={console.log("onAbort")}
                        onPlaying={console.log("onPlaying")}
                        onProgress={console.log("onProgress")}
                        onLoadedData={console.log("onLoadedData")}/>
            </div>
        </article>
    );
}