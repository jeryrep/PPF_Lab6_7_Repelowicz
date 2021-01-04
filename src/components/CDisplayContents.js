import {Component} from "react";
import './CDisplayContents.css';

export default class CDisplayContents extends Component {
    initializeJson(data) {
        this.data = () => JSON.parse(JSON.stringify(data));
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
        return false;
    }
}