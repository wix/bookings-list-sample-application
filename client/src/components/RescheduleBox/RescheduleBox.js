import React from 'react';
import {st, classes} from './RescheduleBox.st.css';
import {Text} from 'wix-style-react';
import {dateOnlyWithoutYearFormat, timeOnlyFormat} from '../../utils';
import {formatDate} from 'wix-style-react/src/LocaleUtils';

const RescheduleBox = (props) => {
    const {data, isSelected} = props;

    const {start} = data;
    const startDate = formatDate(new Date(start.timestamp), dateOnlyWithoutYearFormat);
    const startTime = formatDate(new Date(start.timestamp), timeOnlyFormat);
    return (
        <div onClick={() => props.onClick(data)} className={st(classes.rescheduleBoxContainer, classes.rescheduleBox, isSelected ? classes.rescheduleBoxSelected : null)}>
            <Text size="tiny" className={st(classes.rescheduleBoxLabel)}>{startDate}</Text>
            <Text size="tiny" className={st(classes.rescheduleBoxLabel)}>{startTime}</Text>
        </div>
    );
};

export default RescheduleBox;