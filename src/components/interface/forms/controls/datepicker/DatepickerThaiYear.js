/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useState, useRef } from 'react';
import DatePicker from 'react-multi-date-picker';
import 'react-multi-date-picker/styles/layouts/prime.css';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';
import thai_th from './Locale.Thai';
import thai from './Calendar.Thai';

const DatepickerThaiYear = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <DatePicker
      className="rmdp-prime"
      format={'DD/MM/YYYY'}
      calendar={thai}
      locale={thai_th}
      style={{
        width: '100%',
        boxSizing: 'border-box',
        height: '35px',
      }}
      containerStyle={{
        width: '100%',
      }}
    />
  );
};

export default DatepickerThaiYear;
