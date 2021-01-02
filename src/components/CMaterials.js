import React from "react";
import materialsData from '../res/materials.json';
import CDisplayContents from "./CDisplayContents";

export class CMaterials extends CDisplayContents {
    render() {
        this.initializeJson(materialsData);
        const items = [];
        for (let i = 0; i < this.data().count; i++) {
            let value = this.data().text[i];
            items.push(
                <div className="contentsFlex">
                    <img className="contentsFlexImg" src={this.imgs['material' + (i + 1)]} alt=""/>
                    <p className="contentsFlexTxt">
                        {value}
                    </p>
                </div>
            )
        }
        return (
            <article>
                {items}
            </article>
        )
    }
}