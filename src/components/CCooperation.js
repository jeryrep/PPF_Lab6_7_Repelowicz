import React, {Component} from "react";
import coopInfo from '../res/coop.json';
import './CCooperation.css';

export class CCooperation extends Component {
    constructor(props) {
        super(props);
        this.coopData = () => JSON.parse(JSON.stringify(coopInfo));
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
        const tabData = this.coopData().data;
        const items = tabData.map((item) => (
            <div id={`"div${item.id}`} className="contentsFlex">
                <img className="contentsFlexImg" src={this.imgs[item.img]} alt=""/>
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