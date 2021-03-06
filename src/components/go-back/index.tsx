import * as React from 'react'
import { Icon } from 'antd/lib'
import { browserHistory, hashHistory } from 'react-router'

export default class GoBack extends React.Component<any, any> {
    go = () => {
        const { url, history, autoClose } = this.props

        if (url) {
            if (history) { browserHistory.push(url) } else { hashHistory.push(url) }
        } else {
            if (window.history.length == 1) {
                if (autoClose) {
                    window.close();
                }
            } else {
                hashHistory.go(-1);
            }
        }
    }

    getButtonView () {
        const { style } = this.props;

        let iconStyle: any = {
            cursor: 'pointer',
            fontFamily: 'anticon',
            fontSize: '18px',
            color: 'rgb(148, 168, 198)',
            letterSpacing: '5px',
            position: 'relative',
            top: '2px'
        }

        if (style) {
            iconStyle = Object.assign(iconStyle, style)
        }

        return (
            <Icon
                style={iconStyle}
                type={'left-circle-o'}
                onClick={this.go}
            />
        )
    }

    render () {
        return this.getButtonView();
    }
}
