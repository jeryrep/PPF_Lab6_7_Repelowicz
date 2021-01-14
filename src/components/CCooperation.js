import React from "react";
import coopInfo from '../res/coop.json';
import CDisplayContents from "./CDisplayContents";

export class CCooperation extends CDisplayContents {

    render() {
        this.initializeJson(coopInfo);
        const tabData = this.data().data;
        const items = tabData.map((item) => (
            <div id={`"div${item.id}`} className="contentsFlex">
                <img className="contentsFlexImg" src={this.imgs[item.img]} alt="Logo firmy"
                     onMouseOver={(e) => this.resizeImage("enlarge", e)}
                     onMouseOut={(e) => this.resizeImage("stretch", e)}/>
                <p className="contentsFlexTxt">
                    {item.text}
                </p>
            </div>
        ));
        return (
            <article>
                {items}
            </article>
        );
    }
}