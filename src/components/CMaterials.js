import React, {Component} from "react";
import data from '../res/materials.json';
import './CMaterials.css';

export class CMaterials extends Component {
    constructor(props) {
        super(props);
        this.materialsData = () => JSON.parse(JSON.stringify(data));
        const imgContext = require.context('../res/', false, /\.jpg$/);
        let img = {};
        this.imgs = imgContext.keys().reduce((icons, file) => {
            const cname = imgContext(file).default;
            const label = file.slice(2, -4);
            img[label] = cname;
            return img;
        }, {});
    }

    render() {
        const items = [];
        for (let i = 0; i < this.materialsData().count; i++) {
            let value = this.materialsData().text[i];
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