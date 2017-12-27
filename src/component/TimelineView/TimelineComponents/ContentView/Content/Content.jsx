// @flow
import React from 'react'
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';

import Icon from '../Parts/Icon';
import Buttons from '../Parts/Buttons';

import CommonItem from './Common';
import ReplyItem from './Reply';
import RetweetedItem from './Retweeted';

import type Content from '../../../../../core/value/Content'
import {Normal, Reply, Retweeted} from '../../../../../core/value/Content';

const styles = theme => ({
});

type Props = {
    classes: Object,
    service: string,
    timelineIndex: number,
    data: Content,
    callApi: Function,
    setReply: Function,
};

const selectComponent = (data: Content) => {
    switch (data.type) {
        case Normal:
            return (<CommonItem data={data} />);
        case Reply:
            return (<ReplyItem data={data} />);
        case Retweeted:
            return (<RetweetedItem data={data} />);
        default:
            return (<CommonItem data={data} />);
    }
}

const NormalContent = pure((props: Props) => (
    <div>
        {selectComponent(props.data)}
        <Buttons
            service={props.service}
            timelineIndex={props.timelineIndex}
            data={props.data}
            callApi={props.callApi}
            setReply={props.setReply} />
    </div>
));

export default withStyles(styles)(NormalContent);